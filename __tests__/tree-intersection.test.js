
const BinaryTree = require('../challenges/tree/tree').BinaryTree;
const Node = require('../challenges/tree/tree').Node;
const treeIntersection = require('../challenges/treeIntersection/tree-intersection');

describe('Tree Intersection class-32', ()=> {
  it('Can successfully find all intersections in a tree', ()=> {
    let treeA = new BinaryTree();
    treeA.add(new Node('Data'));
    treeA.add(new Node('One'));
    treeA.add(new Node('Three'));
    treeA.add(new Node(3));
    treeA.add(new Node(10));
    treeA.add(new Node('yes'));

    let treeB = new BinaryTree();
    treeB.add(new Node('Data'));
    treeB.add(new Node('One'));
    treeB.add(new Node('Three'));
    treeB.add(new Node(3));
    treeB.add(new Node(10));
    treeB.add(new Node('yes'));
    let result = treeIntersection(treeA, treeB);
    expect(result).toEqual([ 'Data', 'Three', 'yes', 'One', 10, 3 ]);
  });

  it('Can successfully find some intersections in a tree', ()=> {
    let treeA = new BinaryTree();
    treeA.add(new Node('Data'));
    treeA.add(new Node('One'));
    treeA.add(new Node('Three'));
    treeA.add(new Node(3));
    treeA.add(new Node(10));
    treeA.add(new Node('yes'));

    let treeB = new BinaryTree();
    treeB.add(new Node('Data'));
    treeB.add(new Node('One'));
    treeB.add(new Node('xd'));
    treeB.add(new Node(3));
    treeB.add(new Node(10));
    treeB.add(new Node('no'));
    let result = treeIntersection(treeA, treeB);
    expect(result).toEqual(['Data', 'One', 10, 3]);
  });

  it('Can successfully find no intersections in a tree', ()=> {
    let treeA = new BinaryTree();
    treeA.add(new Node('Data'));
    treeA.add(new Node('One'));
    treeA.add(new Node('Three'));
    treeA.add(new Node(3));
    treeA.add(new Node(10));
    treeA.add(new Node('yes'));

    let treeB = new BinaryTree();
    treeB.add(new Node('Data'));
    treeB.add(new Node('two'));
    treeB.add(new Node('four'));
    treeB.add(new Node(11));
    treeB.add(new Node(20));
    treeB.add(new Node('no'));
    let result = treeIntersection(treeA, treeB);
    expect(result).toBeFalsy;
  });
});
