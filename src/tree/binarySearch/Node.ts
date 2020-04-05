// No TS definition exists for this module.
// @ts-ignore
import {printAsciiTree} from 'binary-tree-printer';

const defaultComparisonFunction = (a: any, b: any): number => a - b;

/**
 * This class represents a Binary Tree Node.
 * We require a value for the node, and it can contain left and right children.
 */
export default class BinarySearchTreeNode<T> {
    value: T;
    left: (BinarySearchTreeNode<T> | null) = null;
    right: (BinarySearchTreeNode<T> | null) = null;
    compareFunction: Function = defaultComparisonFunction;

    constructor(value: T, compareFunction: Function, data?: (T[] | null)) {
        this.value = value;
        if (compareFunction) {
            this.compareFunction = compareFunction;
        }

        if (data && data.length) {
            data.forEach(item => this.insert(item));
        }
    }

    /**
     * Insert a value in the BinarySearchTree represented by this Node as root.
     * @param item The value to be inserted into the tree.
     * @returns {boolean} True if the value has been inserted, false otherwise (the value already exists in the tree).
     */
    insert(item: T): boolean {
        const compareResult = this.compareFunction(this.value, item);
        if (compareResult === 0) {
            // The value is already present, and is the same as this Node's value.
            return false;
        }

        if (compareResult > 0) {
            if (this.left === null) {
                this.left = new BinarySearchTreeNode(item, this.compareFunction);
                return true;
            } else {
                return this.left.insert(item);
            }
        } else {
            if (this.right === null) {
                this.right = new BinarySearchTreeNode(item, this.compareFunction);
                return true;
            } else {
                return this.right.insert(item);
            }
        }
    }

    find(item: T): (BinarySearchTreeNode<T> | null) {
        if (this.value === item) {
            return this;
        } else {
            const foundLeft = this.left ? this.left.find(item) : null;
            // Early return if found to avoid searching on the right sub-tree.
            if (foundLeft) {
                return foundLeft;
            }
            const foundRight = this.right ? this.right.find(item) : null;
            return foundRight || null;
        }
    }

    height(): number {
        const leftHeight = this.left ? this.left.height() : -1;
        const rightHeight = this.right ? this.right.height() : -1;

        return Math.max(leftHeight, rightHeight) + 1;
    }

    size(): number {
        let size = 1;

        if (this.left) {
            size += this.left.size();
        }

        if (this.right) {
            size += this.right.size();
        }

        return size;
    }

    toAsciiTreeStructure(): Object {
        return {
            value: this.value,
            left: this.left && this.left.toAsciiTreeStructure(),
            right: this.right && this.right.toAsciiTreeStructure()
        };
    }

    print() {
        console.log(printAsciiTree(this.toAsciiTreeStructure()));
    }
}