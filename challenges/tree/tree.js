'use strict';

// const util = require('util');
// const Queue = require('../stacksAndQueues/stacks-and-queues').Queue;
// console.log(util.inspect(this, false, null, true /* enable colors */))

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
    this.arr = [];

  }

  /**
   * adds nodes into the tree whenever empty through breadth first approach
   * @param {Node} node is an input of Node class with value, left and right properties
   */
  add(node) {
    if (!this.root) {
      this.root = node;
      this.arr[0] = (node);
      return
    }

    let nextNode = this.root;
    let arr = this.arr;
    while (arr[arr.length - 1]) {
      let temp = arr[arr.length - 1];
      if (temp.left && temp.right) {
        arr.pop();
        arr.unshift(temp.left);
        arr.unshift(temp.right);
      }
      nextNode = temp;
      if (!temp.left) {
        nextNode.left = node;
        nextNode = nextNode.left;
        return;
      } else if (!temp.right) {
        nextNode.right = node;
        nextNode = nextNode.right;
        return;
      }
    }
  }

  /**
   * preOrder traversal, where nodes are registered first then goes to the left then right
   */
  preOrder() {
    if (!this.root) {
      return null;
    }

    let thisNode = this.root;
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
  }

  /**
   * inOrder traversal, where nodes traversed maximum left, then registered then traversed right whenever possible
   */
  inOrder() {
    if (!this.root) {
      return null;
    }

    let thisNode = this.root;
    let arr = [];

    let order = (node) => {
      if (node.left) {
        order(node.left);
      }

      arr[arr.length] = node.value;

      if (node.right) {
        order(node.right);
      }
    }
    order(thisNode);
    return arr;
  }

  /**
   * postOrder traversal, where nodes traversed maximum left, then right whenever possible and finally is registered
   */
  postOrder() {
    if (!this.root) {
      return null;
    }

    let thisNode = this.root;
    let arr = [];

    let order = (node) => {
      if (node.left) {
        order(node.left);
      }

      if (node.right) {
        order(node.right);
      }

      arr[arr.length] = node.value;
    }
    order(thisNode);
    return arr;
  }

  /**
   * Using preOrder traversal, this method would check for value and returns boolean true if exists, false otherwise.
   * @param {any} value checks against the tree for that value
   */
  contains(value) {
    if (!this.root) {
      return null;
    }

    let thisNode = this.root;
    let exists = false;

    let order = (node) => {
      if (node.value === value) {
        exists = true;
      }

      if (node.left) {
        order(node.left);
      }

      if (node.right) {
        order(node.right);
      }
    }
    order(thisNode);
    return exists;
  }

  /**
   * Using preOrder traversal, this method would check for a maximum value and returns it after traversal.
   */
  findMaximumValue() {
    if (!this.root) {
      return null;
    }

    let thisNode = this.root;
    let max = 0;

    let order = (node) => {
      if (node.value >= max) {
        max = node.value;
      }

      if (node.left) {
        order(node.left);
      }

      if (node.right) {
        order(node.right);
      }
    }
    order(thisNode);
    return max;
  }

  /**
   * Breadth First traversal registers values on each depth level
   * starting from left to right and then downwards, similar to add so the order should be the same
   */
  breadthFirstTraversal() {
    if (!this.root) {
      return null;
    }

    let nextNode = this.root;
    let arr = [];
    let output = [];
    arr[0] = nextNode;
    output[0] = nextNode.value;

    while (arr[arr.length - 1]) {
      let temp = arr[arr.length - 1];
      arr.length --;
      if (temp.left) {
        arr.unshift(temp.left);
        output.push(temp.left.value);
      }
      if (temp.right) {
        arr.unshift(temp.right);
        output.push(temp.right.value);
      }
    }
    return output;
  }
}

module.exports.BinaryTree = BinaryTree;
module.exports.Node = Node;
