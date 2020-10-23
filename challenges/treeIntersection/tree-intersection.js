'use-strict';
const Stack = require('../stacksAndQueues/stacks-and-queues').Stack;

function tree_intersection(tree_1, tree_2) {
  const stackA = new Stack();
  const stackB = new Stack();
  if (!tree_1.root || !tree_2.root) {
    return null;
  }

  let nodeA = tree_1.root;
  let nodeB = tree_2.root;
  stackA.push(nodeA);
  stackB.push(nodeB);
  let arr = [];
  while(stackA.top && stackB.top) {
    if(stackA.top.value.value == stackB.top.value.value) {
      arr[arr.length] = stackA.top.value.value;
    }
    let newA = stackA.pop();
    let newB = stackB.pop();

    if (newA.left && newB.left) {
      stackA.push(newA.left);
      stackB.push(newB.left);
    }
    if (newA.right && newB.right) {
      stackA.push(newA.right);
      stackB.push(newB.right);
    }
  }
  return arr;
};

module.exports = tree_intersection; 