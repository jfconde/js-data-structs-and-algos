import Node from '../Node';
import Queue, {QUEUE_TYPE} from '../../../queue/Queue';

/**
 * Level-order breadth-first binary tree search algorithm, which generates an array of Binary Tree Nodes.
 * Instead of using recursion, we must now use a stack to implement the breadth-search. If we used recursion, then
 * we would be implementing depth-first and we would have no way of keeping order or remembering the previous visited
 * nodes in order to visit them horizontally instead of vertically (that's what we accomplish by "pushing" the children
 * of the nodes at the end of the queue: we visit every row (instead of every branch) and then proceed with the next
 * elements in the queue, which are in order and represent the next row, pushing their children - the subsequent row
 * at the end of the queue, etc.).
 *
 * @param rootNode The node that represents the root of the binary tree.
 */
export function levelOrderBTSearch <T> (rootNode: Node<T>) : Node<T> [] {
    const queue : Queue<Node<T>> = new Queue(QUEUE_TYPE.FIFO);
    let visitedNodes: Node<T>[] = [];

    queue.push(rootNode);

    while(!queue.isEmpty()) {
        const currentNode: Node<T> = queue.pop();
        visitedNodes = [...visitedNodes, currentNode];

        if (currentNode.left) {
            queue.push(currentNode.left);
        }
        if (currentNode.right) {
            queue.push(currentNode.right);
        }
    }

    return visitedNodes;
}


/**
 * Reverse level-order. As with the level order traversal algorithm, we want to traverse the tree horizontally, but this
 * time we are going to do it from the bottom (leaves / max depth) to the top (root).
 *
 * @param rootNode The node that represents the root of the binary tree.
 */
export function reverseLevelOrderBTSearch <T> (rootNode: Node<T>) : Node<T> [] {
    const queue : Queue<Node<T>> = new Queue(QUEUE_TYPE.FIFO);
    const stack : Queue<Node<T>> = new Queue(QUEUE_TYPE.LIFO);

    queue.push(rootNode);

    while(!queue.isEmpty()) {
        const currentNode : Node<T> = queue.pop();

        if (currentNode.right) {
            queue.push(currentNode.right);
        }
        if (currentNode.left) {
            queue.push(currentNode.left);
        }

        stack.push(currentNode);
    }

    return stack.toArray();
}

