import Node from '../Node';
import Queue, {QUEUE_TYPE} from "../../../queue/Queue";

/**
 * Pre-order depth-first binary tree search algorithm, which generates an array of Binary Tree Nodes searching using
 * the root->left->right strategy.
 * @param rootNode The node that represents the root of the binary tree.
 */
export function preOrderBTSearchRecursive<T>(rootNode: Node<T>): Node<T> [] {
    // Visit root node.
    let visitedNodes: Node<T> [] = [rootNode];

    if (rootNode.left) {
        visitedNodes = [...visitedNodes, ...preOrderBTSearchRecursive(rootNode.left)];
    }

    if (rootNode.right) {
        visitedNodes = [...visitedNodes, ...preOrderBTSearchRecursive(rootNode.right)];
    }

    return visitedNodes;
}

/**
 * Same as preOrderBTSearchRecursive, but iterative, using a stack.
 * @param rootNode The node that represents the root of the binary tree.
 */
export function preOrderBTSearchIterative<T>(rootNode: Node<T>): Node<T> [] {
    const stack = new Queue<Node<T>>(QUEUE_TYPE.LIFO);
    let visitedNodes: Node<T> [] = [];
    stack.push(rootNode);

    while (!stack.isEmpty()) {
        const currentNode = stack.pop();
        visitedNodes = [...visitedNodes, currentNode];
        if (currentNode.right) {
            stack.push(currentNode.right);
        }
        if (currentNode.left) {
            stack.push(currentNode.left);
        }
    }
    return visitedNodes;
}

/**
 * In-order depth-first binary tree search algorithm, which generates an array of Binary Tree Nodes searching using
 * the left->root->right strategy.
 * @param rootNode The node that represents the root of the binary tree.
 */
export function inOrderBTSearchRecursive<T>(rootNode: Node<T>): Node<T> [] {
    // Visit root node.
    let visitedNodes: Node<T> [] = [];

    if (rootNode.left) {
        visitedNodes = [...visitedNodes, ...inOrderBTSearchRecursive(rootNode.left)];
    }

    visitedNodes = [...visitedNodes, rootNode];

    if (rootNode.right) {
        visitedNodes = [...visitedNodes, ...inOrderBTSearchRecursive(rootNode.right)];
    }

    return visitedNodes;
}

/**
 * Same as inOrderBTSearchRecursive, but iterative, using a stack.
 * @param rootNode The node that represents the root of the binary tree.
 */
export function inOrderBTSearchIterative<T>(rootNode: Node<T>): Node<T> [] {
    const stack = new Queue<Node<T>>(QUEUE_TYPE.LIFO);
    let visitedNodes: Node<T> [] = [];
    let currentNode: (Node<T> | null) = rootNode;

    while (currentNode !== null || !stack.isEmpty()) {
        while (currentNode !== null) {
            stack.push(currentNode);
            currentNode = currentNode.left;
        }

        currentNode = stack.pop();
        visitedNodes = [...visitedNodes, currentNode];
        currentNode = currentNode.right;
    }

    return visitedNodes;
}


/**
 * Post-order depth-first binary tree search algorithm, which generates an array of Binary Tree Nodes searching using
 * the left->right->root strategy.
 * @param rootNode The node that represents the root of the binary tree.
 */
export function postOrderBTSearchRecursive<T>(rootNode: Node<T>): Node<T> [] {
    // Visit root node.
    let visitedNodes: Node<T> [] = [];

    if (rootNode.left) {
        visitedNodes = [...visitedNodes, ...postOrderBTSearchRecursive(rootNode.left)];
    }

    if (rootNode.right) {
        visitedNodes = [...visitedNodes, ...postOrderBTSearchRecursive(rootNode.right)];
    }

    visitedNodes = [...visitedNodes, rootNode];

    return visitedNodes;
}

/**
 * Same as postOrderBTSearchRecursive, but iterative, using a stack.
 * @param rootNode The node that represents the root of the binary tree.
 */
export function postOrderBTSearchIterative<T>(rootNode: Node<T>): Node<T> [] {
    const stack = new Queue<Node<T>>(QUEUE_TYPE.LIFO);
    let visitedNodes: Node<T> [] = [];
    let currentNode: (Node<T> | null) = rootNode;

   do {
       while (currentNode !== null) {
           if (currentNode.right) {
               stack.push(currentNode.right);
           }
           stack.push(currentNode);
           currentNode = currentNode.left;
       }

       if (!stack.isEmpty()) {
           currentNode = stack.pop();
       }else{
           continue;
       }

       if (currentNode.right != null && !stack.isEmpty() && stack.peek() === currentNode.right) {
           stack.pop();
           stack.push(currentNode);
           currentNode = currentNode.right;
       }else{
           visitedNodes = [...visitedNodes, currentNode];
           currentNode = null;
       }
   } while (!stack.isEmpty());

   return visitedNodes;
}
