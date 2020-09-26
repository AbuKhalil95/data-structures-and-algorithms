const BinaryTree = require('../challenges/tree/tree').BinaryTree;
const Node = require('../challenges/tree/tree').Node;

describe('Binary Tree DS class-15', ()=> {
  it('Can successfully enqueue the first value', ()=> {
    let binaryTree = new BinaryTree();
    let initialValue = new Node('First One');
    let secondValue = new Node('Second One');
    let thirdValue = new Node('Third One');
    let fourthValue = new Node('Fourth One');

    binaryTree.add(initialValue);
    binaryTree.add(secondValue);
    binaryTree.add(thirdValue);
    binaryTree.add(fourthValue);
    binaryTree.add(fourthValue);
    binaryTree.add(fourthValue);
    binaryTree.add(fourthValue);

    // binaryTree.add(secondValue);
    // binaryTree.add(thirdValue);

    expect().toEqual(thirdValue);
});

//   it('Can successfully enqueue multiple values into a queue and dequeue the first value', ()=> {
//       let queue = new PseudoQueue();
//       let initialValue = 'First One';
//       let secondValue = 'Second One';
//       let thirdValue = 'Third One';

//       queue.enqueue(initialValue);
//       queue.enqueue(secondValue);
//       queue.enqueue(thirdValue);
//       expect(queue.dequeue()).toEqual(initialValue);
//   });

//   it('Can successfully empty after multiple dequeue', ()=> {
//     let queue = new PseudoQueue();
//     let initialValue = 'First One';
//     let secondValue = 'Second One';
//     let thirdValue = 'Third One';

//     queue.enqueue(initialValue);
//     queue.enqueue(secondValue);
//     queue.enqueue(thirdValue);
//     queue.dequeue();
//     queue.dequeue();
//     expect(queue.dequeue()).toBeNull;
// });

//   it('Returns empty queue if actually empty', ()=> {
//     let queue = new PseudoQueue();
//     expect(queue.dequeue()).toBeNull();
//   });
});
