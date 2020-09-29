
const BinaryTree = require('../challenges/tree/tree').BinaryTree;
const Node = require('../challenges/tree/tree').Node;

describe('Binary Tree DS class-15', ()=> {
  it('Can successfully instantiate an empty tree', ()=> {
    let binaryTree = new BinaryTree();
    expect(binaryTree.root).toBeNull;
  });

  it('Can successfully instantiate a tree with a single root node', ()=> {
    let binaryTree = new BinaryTree();
    let initialValue = new Node('First One');

    binaryTree.add(initialValue);
    expect(binaryTree.root.value).toEqual(initialValue.value);
  });

  it('Can successfully add a left child and right child to a single root node', ()=> {
    let binaryTree = new BinaryTree();
    let initialValue = new Node('First One');
    let secondValue = new Node('Second One');
    let thirdValue = new Node('Third One');

    binaryTree.add(initialValue);
    binaryTree.add(secondValue);
    binaryTree.add(thirdValue);
    expect(binaryTree.root.left.value).toEqual(secondValue.value);
    expect(binaryTree.root.right.value).toEqual(thirdValue.value);
  });

  it('Can successfully add a binary tree', ()=> {
    let binaryTree = new BinaryTree();
    let initialValue = new Node('First One');
    let secondValue = new Node('Second One');
    let thirdValue = new Node('Third One');
    let fourthValue = new Node('Fourth One');
    let fifthValue = new Node('Fifth One');
    let sixthValue = new Node('Sixth One');
    let seventhValue = new Node('Seventh One');
    let eighthValue = new Node('Eighth One');

    binaryTree.add(initialValue);
    binaryTree.add(secondValue);
    binaryTree.add(thirdValue);
    binaryTree.add(fourthValue);
    binaryTree.add(fifthValue);
    binaryTree.add(sixthValue);
    binaryTree.add(seventhValue);
    binaryTree.add(eighthValue);

    expect(binaryTree.root.left.left).toEqual(fourthValue);
  });

  it('Can successfully return a collection from a preOrder traversal', ()=> {
    let binaryTree = new BinaryTree();
    let initialValue = new Node('First One');
    let secondValue = new Node('Second One');
    let thirdValue = new Node('Third One');
    let fourthValue = new Node('Fourth One');
    let fifthValue = new Node('Fifth One');

    binaryTree.add(initialValue);
    binaryTree.add(secondValue);
    binaryTree.add(thirdValue);
    binaryTree.add(fourthValue);
    binaryTree.add(fifthValue);

    expect(binaryTree.preOrder()).toEqual(['First One', 'Second One', 'Fourth One', 'Fifth One', 'Third One']);
  });

  it('Can successfully return a collection from a inOrder traversal', ()=> {
    let binaryTree = new BinaryTree();
    let initialValue = new Node('First One');
    let secondValue = new Node('Second One');
    let thirdValue = new Node('Third One');
    let fourthValue = new Node('Fourth One');
    let fifthValue = new Node('Fifth One');

    binaryTree.add(initialValue);
    binaryTree.add(secondValue);
    binaryTree.add(thirdValue);
    binaryTree.add(fourthValue);
    binaryTree.add(fifthValue);

    expect(binaryTree.inOrder()).toEqual(['Fourth One', 'Second One', 'Fifth One', 'First One', 'Third One']);
  });

  it('Can successfully return a collection from a postOrder traversal', ()=> {
    let binaryTree = new BinaryTree();
    let initialValue = new Node('First One');
    let secondValue = new Node('Second One');
    let thirdValue = new Node('Third One');
    let fourthValue = new Node('Fourth One');
    let fifthValue = new Node('Fifth One');

    binaryTree.add(initialValue);
    binaryTree.add(secondValue);
    binaryTree.add(thirdValue);
    binaryTree.add(fourthValue);
    binaryTree.add(fifthValue);

    expect(binaryTree.postOrder()).toEqual(['Fourth One', 'Fifth One', 'Second One', 'Third One', 'First One']);
  });

  it('Can successfully return true for a contain value using a preOrder traversal', ()=> {
    let binaryTree = new BinaryTree();
    let initialValue = new Node('First One');
    let secondValue = new Node('Second One');
    let thirdValue = new Node('Third One');
    let fourthValue = new Node('Fourth One');
    let fifthValue = new Node('Fifth One');

    binaryTree.add(initialValue);
    binaryTree.add(secondValue);
    binaryTree.add(thirdValue);
    binaryTree.add(fourthValue);
    binaryTree.add(fifthValue);

    expect(binaryTree.contains(fifthValue.value)).toBeTruthy();
  });

  it('Can successfully return false for a non existent contain value using a preOrder traversal', ()=> {
    let binaryTree = new BinaryTree();
    let initialValue = new Node('First One');
    let secondValue = new Node('Second One');
    let thirdValue = new Node('Third One');
    let fourthValue = new Node('Fourth One');
    let fifthValue = new Node('Fifth One');

    binaryTree.add(initialValue);
    binaryTree.add(secondValue);
    binaryTree.add(thirdValue);
    binaryTree.add(fourthValue);
    binaryTree.add(fifthValue);

    expect(binaryTree.contains('Sixth One')).toBeFalsy();
  });
});

describe('Maximum Value class-16', ()=> {
  it('Returns null for empty trees', ()=> {
    let binaryTree = new BinaryTree();

    expect(binaryTree.findMaximumValue()).toBeNull;
  });

  it('Can successfully find a maximum value', ()=> {
    let binaryTree = new BinaryTree();
    let initialValue = new Node(1000);
    let secondValue = new Node(2);
    let thirdValue = new Node(32333);
    let fourthValue = new Node(44);
    let fifthValue = new Node(55);
    let sixthValue = new Node(66);
    let seventhValue = new Node(777);
    let eighthValue = new Node(8888);

    binaryTree.add(initialValue);
    binaryTree.add(secondValue);
    binaryTree.add(thirdValue);
    binaryTree.add(fourthValue);
    binaryTree.add(fifthValue);
    binaryTree.add(sixthValue);
    binaryTree.add(seventhValue);
    binaryTree.add(eighthValue);

    expect(binaryTree.findMaximumValue()).toEqual(32333);
  });
});

describe('Breadth First Traversal class-17', ()=> {
  it('Can successfully breadth traverse a tree', ()=> {
    let binaryTree = new BinaryTree();
    let initialValue = new Node(1);
    let secondValue = new Node(2);
    let thirdValue = new Node(3);
    let fourthValue = new Node(4);
    let fifthValue = new Node(5);
    let sixthValue = new Node(6);
    let seventhValue = new Node(7);
    let eighthValue = new Node(8);

    binaryTree.add(initialValue);
    binaryTree.add(secondValue);
    binaryTree.add(thirdValue);
    binaryTree.add(fourthValue);
    binaryTree.add(fifthValue);
    binaryTree.add(sixthValue);
    binaryTree.add(seventhValue);
    binaryTree.add(eighthValue);
    expect(binaryTree.breadthFirstTraversal()).toEqual([1,2,3,4,5,6,7,8]);
  });
});
