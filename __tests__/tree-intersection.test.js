
const BinaryTree = require('../challenges/tree/tree').BinaryTree;
const Node = require('../challenges/tree/tree').Node;

let initialValue = new Node('First One');
let secondValue = new Node('Second One');
let thirdValue = new Node('Third One');
let fourthValue = new Node('Fourth One');
let fifthValue = new Node('Fifth One');
let sixthValue = new Node('Sixth One');
let seventhValue = new Node('Seventh One');
let eighthValue = new Node('Eighth One');

let treeA = new BinaryTree();
treeA.add(initialValue);
treeA.add(secondValue);
treeA.add(thirdValue);
treeA.add(fourthValue);
treeA.add(fifthValue);
treeA.add(sixthValue);
treeA.add(seventhValue);
treeA.add(eighthValue);

let treeB = new BinaryTree();
treeB.add(initialValue);
treeB.add(secondValue);
treeB.add(thirdValue);
treeB.add(fourthValue);
treeB.add(fifthValue);
treeB.add(sixthValue);
treeB.add(seventhValue);
treeB.add(eighthValue);

describe('Tree Intersection class-32', ()=> {
  it('Can successfully find intersections in a tree', ()=> {

  });
});
