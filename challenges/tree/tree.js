'use strict';

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
    this.queue = new Queue();

  }

  add(node) {
    console.log('adding >>>>>>>>', node);
    if (!this.root) {
      this.root = node;
      console.log('initialized', this);
      return
    }
    let nextNode = this.root;
    if (!this.queue.peek()) {
      this.queue.enqueue(nextNode);
    }
    let queue = this.queue;
    let temp = queue.peek();
    console.log(queue.peek());
    while (queue.peek()) {
      console.log('Before dequeue queue while-----------------------------------', queue)
      // console.log('queue.peek().left',queue.peek(), queue.peek().left);
      temp = queue.dequeue();
      console.log('dequeued', temp);
      nextNode = temp;
      if (temp.left) {
        console.log('left position inserted  -----------------------------------', nextNode.left)
        queue.enqueue(temp.left);
        console.log('after enqueue queue -----------------------------------', queue)
      } else if (!temp.left) {
        console.log('adding left >>>>>>>>', temp);
        nextNode.left = node;
        nextNode = nextNode.left;
        console.log(this);
        return;
      }
      
      if (temp.right) {
        console.log('right position inserted  -----------------------------------', nextNode.right)
        queue.enqueue(temp.right);
        console.log('queue -----------------------------------', queue)

      } else if (!temp.right) {
        console.log('adding right >>>>>>>>', temp);
        nextNode.right = node;
        nextNode = nextNode.right;
        console.log(this);
        return;
      }

    }
    // return this.root = temp;
  }

  preOrder() {

  }

  inOrder() {

  }

  postOrder() {

  }

  contains() {

  }
}

module.exports.BinaryTree = BinaryTree;
module.exports.Node = Node;