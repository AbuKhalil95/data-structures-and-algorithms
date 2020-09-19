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
      return 'Empty Stack!';
    }
    this.top = this.top.next;

    return this;
  }

  peek() {
    let string = this.top ? this.top.value :  'Empty Stack!';
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
    let newNode = new Node(value);              // initializes back to be the newest entered node and points towards old back

    if(!(this.front && this.back)) {
      this.front = newNode;
      this.back = newNode;
      return;
    }
    newNode.next = this.back;
    this.back = newNode;
  }

  dequeue() {                                   // removes front then moves from back to new front that is the oldest node
    if(!this.front) {
      return 'Empty Queue!';
    }

    this.front = null;
    let currentNode = this.back;
    console.log('backNode', currentNode);
    if (currentNode.next) {
      while(currentNode.next.next) {
        currentNode = currentNode.next;
      }
      
      console.log('currentNode', currentNode);
      this.front = currentNode;
      this.front.next = null;
    }
  }

  peek() {
    let string = this.front ? this.front.value :  'Empty Queue!';
    return string;
  }

  isEmpty() {
    return this.front ? false : true;
  }
}

module.exports.Stack = Stack
module.exports.Queue = Queue