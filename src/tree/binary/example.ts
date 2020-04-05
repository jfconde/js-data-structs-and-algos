import Node from './Node';
import chalk from 'chalk';
import {
    preOrderBTSearchRecursive,
    preOrderBTSearchIterative,
    inOrderBTSearchRecursive,
    inOrderBTSearchIterative,
    postOrderBTSearchRecursive,
    postOrderBTSearchIterative
} from "./search/depthFirst";
import {levelOrderBTSearch, reverseLevelOrderBTSearch} from "./search/breadthFirst";
import {printSectionTitle, printExampleTitle, printResult} from "../../util/output";

/**
 * Example Binary Tree.
 * Graphical representation:
 *           1
 *        /    \
 *       2     7
 *      / \   / \
 *     3  4  8   9
 *    / \
 *   5  6
 */
const exampleBinaryTree: Node<Number> = new Node(
    1,
    new Node(
        2,
        new Node(
            3,
            new Node(5),
            new Node(6)
        ),
        new Node(4)
    ),
    new Node(
        7,
        new Node(8),
        new Node(9)
    )
);

function printNodeSequence (nodes: Node<any> []) {
    return nodes.map(node => node.value).join(' > ');
}

printSectionTitle('Binary Tree Examples');

console.log(chalk.cyan('\nExample node tree:'));
console.log(chalk.cyan('           1'));
console.log(chalk.cyan('        /     \\'));
console.log(chalk.cyan('       2      7'));
console.log(chalk.cyan('      / \\    / \\'));
console.log(chalk.cyan('     3  4   8   9'));
console.log(chalk.cyan('    / \\'));
console.log(chalk.cyan('   5  6\n'));

let visitedNodes: Node<Number>[] = [];

printExampleTitle('1', 'Node/tree methods\n');
printExampleTitle('1.1', 'Calculate height/depth of Node/tree');
printResult(`The height of the example node tree is: ${exampleBinaryTree.height()}`);

printExampleTitle('1.2', 'Calculate size (number of Nodes) of Node/tree');
printResult(`The size of the example node tree is: ${exampleBinaryTree.size()}`);

printExampleTitle('2', 'Depth first\n');

// 2.1 - Depth First / Pre order (recursive)
printExampleTitle('2.1', 'Depth first > Pre order (recursive)');
visitedNodes = preOrderBTSearchRecursive(exampleBinaryTree);
printResult(printNodeSequence(visitedNodes));

// 2.2 - Depth First / Pre order (iterative)
printExampleTitle('2.2', 'Depth first > Pre order (iterative - using stack)');
visitedNodes = preOrderBTSearchIterative(exampleBinaryTree);
printResult(printNodeSequence(visitedNodes));

// 2.3 - Depth First / In order
printExampleTitle('2.3', 'Depth first > In order');
visitedNodes = inOrderBTSearchRecursive(exampleBinaryTree);
printResult(printNodeSequence(visitedNodes));

// 2.4 - Depth First / In order (iterative)
printExampleTitle('2.4', 'Depth first > In order (iterative - using stack)');
visitedNodes = inOrderBTSearchIterative(exampleBinaryTree);
printResult(printNodeSequence(visitedNodes));

// 2.5 - Depth First / Post order
printExampleTitle('2.5', 'Depth first > Post order');
visitedNodes = postOrderBTSearchRecursive(exampleBinaryTree);
printResult(printNodeSequence(visitedNodes));

// 2.6 - Depth First / Post order (iterative)
printExampleTitle('2.6', 'Depth first > Post order (iterative - using stack)');
visitedNodes = postOrderBTSearchIterative(exampleBinaryTree);
printResult(printNodeSequence(visitedNodes));

console.log('\n\n');
printExampleTitle('3', 'Breadth first\n');

// 3.1 - Breadth First / Level order
printExampleTitle('3.1', 'Breadth first > Level order');
visitedNodes = levelOrderBTSearch(exampleBinaryTree);
printResult(printNodeSequence(visitedNodes));

// 3.2 - Breadth First / Reverse level order
printExampleTitle('3.2', 'Breadth first > Reverse level order');
visitedNodes = reverseLevelOrderBTSearch(exampleBinaryTree);
printResult(printNodeSequence(visitedNodes));