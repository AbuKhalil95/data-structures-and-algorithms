'use-strict';

const HashTable = require('../../challenges/hashtable/hashtable');
let hashTable = new HashTable(1024);

function tree_intersection(tree_1, tree_2) {

  if (!tree.root) {
    return null;
  }

  let thisNode = tree.root;
  let arr = [];

  let order = (node) => {
    arr[arr.length] = node.value;

    if (node.left) {
      order(node.left);
    }
    if (node.right) {
      order(node.right);
    }
  }
  order(thisNode);
  return arr;

};

module.exports = tree_intersection; 