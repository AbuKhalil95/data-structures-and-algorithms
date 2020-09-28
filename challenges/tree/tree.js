'use strict';

const util = require('util');
const Queue = require('../stacksAndQueues/stacks-and-queues').Queue;

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

  add(node) {
  console.log('adding >>>>>>>>', node);
  if (!this.root) {
    this.root = node;
    console.log('initialized', this);
    this.arr[0] = (node);
    console.log('initialized arr', this.arr);
    return
  }

  let nextNode = this.root;
  let arr = this.arr;
  while (arr[arr.length - 1]) {
    let temp = arr[arr.length - 1];
    console.log('peeeeeeeeked >>>>>>>>', temp);
    if (temp.left && temp.right) {
      arr.pop();
      arr.unshift(temp.left);
      arr.unshift(temp.right);
      console.log('adding new left and right queues >>>>>>>>', arr);
    }
    nextNode = temp;
    if (!temp.left) {
      console.log('adding left >>>>>>>>', temp);
      nextNode.left = node;
      nextNode = nextNode.left;
      console.log(util.inspect(this, {showHidden: false, depth: null}))
      return;
    } else if (!temp.right) {
      console.log('adding right >>>>>>>>', temp);
      nextNode.right = node;
      nextNode = nextNode.right;
      console.log(util.inspect(this, {showHidden: false, depth: null}))
      return;
    }
  }

    // console.log('adding >>>>>>>>', node);
    // if (!this.root) {
    //   this.root = node;
    //   console.log('initialized', this);
    //   return
    // }
    // let nextNode = this.root;
    // if (!this.queue.peek()) {
    //   this.queue.enqueue(nextNode);
    // }
    // let queue = this.queue;
    // let temp = queue.peek();
    // console.log
    // while (queue.peek()) {
    //   temp = queue.peek();
    //   console.log('peeeeeeeeked >>>>>>>>', temp);
    //   if (temp.left && temp.right) {
    //     temp = queue.dequeue();
    //     queue.enqueue(temp.left);
    //     queue.enqueue(temp.right);
    //     console.log('adding new left and right queues >>>>>>>>', queue);
    //   }

    //   nextNode = temp;

    //    if (!temp.left) {
    //     console.log('adding left >>>>>>>>', temp);
    //     nextNode.left = node;
    //     nextNode = nextNode.left;
    //     // queue.enqueue(temp);
    //     console.log(util.inspect(this, {showHidden: false, depth: null}))
    //     return;

    //   } else if (!temp.right) {
    //     console.log('adding right >>>>>>>>', temp);
    //     nextNode.right = node;
    //     nextNode = nextNode.right;
    //     // queue.enqueue(temp);
    //     // queue.enqueue(temp.left);
    //     // queue.enqueue(temp.right);
    //     console.log(util.inspect(this, {showHidden: false, depth: null}))
    //     return;
    //   }

    //   // if (temp.left) {
    //   //   console.log('left position inserted  -----------------------------------', nextNode.left)
    //   //   queue.enqueue(temp.left);
    //   //   console.log('after enqueue queue -----------------------------------', queue)
    //   // }
      
    //   // if (temp.right) {
    //   //   console.log('right position inserted  -----------------------------------', nextNode.right)
    //   //   queue.enqueue(temp.right);
    //   //   console.log('after enqueue queue -----------------------------------', queue)
    //   // }
  //  }
  }

  preOrder() {

  }

  inOrder() {

  }

  postOrder() {

  }

  contains() {

  }

  findMaximumValue() {
    
  }
}

module.exports.BinaryTree = BinaryTree;
module.exports.Node = Node;