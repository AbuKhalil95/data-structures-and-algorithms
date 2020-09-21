"use strict";

const Stack = require('../stacksAndQueues/stacks-and-queues').Stack;

class fifoAnimalShelter {
  constructor() {
    this.inputStack = new Stack();
    this.dogStack = new Stack();
    this.catStack = new Stack();
    this.order = [];
  }

  enqueue(value) {
    this.inputStack.push(value);
    if(value == 'dog') {
      this.order.push(1);
    }
    if(value == 'cat') {
      this.order.push(2);
    }
    return this.inputStack.peek();
  }

  dequeue(type) {
    let top = this.inputStack.peek();

    if (!(this.dogStack.peek() && this.catStack.peek())) {
      if(!top) {
        return null;
      }

      while(top) {
        if(top == 'dog') {
          this.dogStack.push(top);
        }
        if(top == 'cat') {
          this.catStack.push(top);
        }
        this.inputStack.pop();  
        top = this.inputStack.peek();
      }

      console.log('data node ++++++++++++++++++++', this.dogStack, this.catStack, this.order, this.inputStack);
    }

    switch (type) {
      case 'dog':
        for (let i = 0; i < this.order.length; i++) {
          if (this.order[i] == 1) {
            this.order.splice(i, 1);
            break;
          }
        }
        console.log('order node before dog pop 1', this.order);
        return this.dogStack.pop();
      case 'cat':
        for (let i = 0; i < this.order.length; i++) {
          if (this.order[i] == 2) {
            this.order.splice(i, 1);
            break;
          }
        }
        console.log('order node before cat pop() 2', this.order);
        return this.catStack.pop();
      default :
        console.log('order node before first shift', this.order);
        if(this.order[0] == 1) {
          this.order.shift();
          console.log('order node after first shift', this.order);
          return this.dogStack.pop();
        } else if (this.order[0] == 2) {
          this.order.shift();
          console.log('order node after first shift', this.order);
          return this.catStack.pop();
        }
    }
  }
}

module.exports = fifoAnimalShelter