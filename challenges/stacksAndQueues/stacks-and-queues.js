'use strict';

class Node {
  
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {

  constructor() {
    this.top = null;
  }

  push(value) {
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;

    return this;
  }

  pop() {
    if(!this.top) {
      return null;
    }
    let popped = this.top.value;
    this.top = this.top.next;

    return popped;
  }

  peek() {
    let string = this.top ? this.top.value : null;
    return string;
  }

  isEmpty() {
    return this.top ? false : true;
  }
}

class Queue {
  
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {                              // initializes front to be always the first ever entered node 

    if(!(this.front && this.back)) {
      this.front = value;
      this.back = value;
      return;
    }
    value.next = this.back;
    this.back = value;
  }

  dequeue() {                                   // removes front then moves from back to new front that is the oldest node
    if(!this.front) {
      return 'Empty Queue!';
    }

    this.front = null;
    let currentNode = this.back;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    this.front = currentNode;

    if (!this.front) {
      this.back = null;
    }

    console.log('dataaaaaaaaaaaa in queue \n',  currentNode, this.front)
    return this.front;
  }

  peek() {
    return this.front ? this.front :  null;
  }

  isEmpty() {
    return this.front ? false : true;
  }
}

module.exports.Stack = Stack
module.exports.Queue = Queue
module.exports.Node = Node