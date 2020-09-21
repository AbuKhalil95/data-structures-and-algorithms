"use strict";

const Stack = require('../stacksAndQueues/stacks-and-queues').Stack;

class PseudoQueue {
  constructor() {
    this.Stack_1 = new Stack();
    this.Stack_2 = new Stack();
  }

  enqueue(value) {
    this.Stack_1.push(value);
    return this.Stack_1.peek();
  }

  dequeue() {
    if (!this.Stack_2.peek()) {
      if (!this.Stack_1.peek()) {
        return null;
      }

      while(this.Stack_1.peek()) {
        this.Stack_2.push(this.Stack_1.peek());
        this.Stack_1.pop();  
      }
    }
    
    //  = this.Stack_2.peek();
     let extract = this.Stack_2.pop();
    return extract;
  }
}

module.exports = PseudoQueue;