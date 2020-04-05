/**
 * This class represents a Binary Tree Node.
 * We require a value for the node, and it can contain left and right children.
 */
export default class BinaryTreeNode<T> {
    value: T;
    left: (BinaryTreeNode<T> | null) = null;
    right: (BinaryTreeNode<T> | null) = null;

    constructor(value: T, left: (BinaryTreeNode<T> | null) = null, right: (BinaryTreeNode<T> | null) = null) {
        this.value = value;
        this.left = left;
        this.right = right;
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
}