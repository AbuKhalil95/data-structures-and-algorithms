'use strict';

const Stack = require('../challenges/stacksAndQueues/stacks-and-queues').Stack;
const Queue = require('../challenges/stacksAndQueues/stacks-and-queues').Queue;

describe('Stack Linear LinkedList DS class-010', ()=> {
    
  it('constructor() initializes empty stack', ()=> {
      let stack = new Stack();
      expect(stack.top).toBeNull();
  });

  it('Can successfully push onto a stack', ()=> {
      let stack = new Stack();
      let initialValue = 'First One';

      stack.push(initialValue);
      expect(stack.top.value).toEqual(initialValue);
  });

  it('Can successfully push multiple values onto a stack', ()=> {
      let stack = new Stack();
      let initialValue = 'First One';
      let secondValue = 'Second One';
      let thirdValue = 'Third One';

      stack.push(initialValue);
      stack.push(secondValue);
      stack.push(thirdValue);
      expect(stack.top.value).toEqual(thirdValue);
  });

  it('Can successfully pop off the stack', ()=> {
    let stack = new Stack();
    let initialValue = 'First One';
    let secondValue = 'Second One';
    let thirdValue = 'Third One';

    stack.push(initialValue);
    stack.push(secondValue);
    stack.push(thirdValue);
    stack.pop();
    expect(stack.top.value).toEqual(secondValue);
  });

  it('Can successfully empty a stack after multiple pops', ()=> {
    let stack = new Stack();
    let initialValue = 'First One';
    let secondValue = 'Second One';

    stack.push(initialValue);
    stack.push(secondValue);
    stack.pop();
    stack.pop();
    expect(stack.top).toBeNull;
  });

  it(' Can successfully peek the next item on the stack', ()=> {
    let stack = new Stack();
    let initialValue = 'First One';
    let secondValue = 'Second One';

    stack.push(initialValue);
    stack.push(secondValue);
    expect(stack.peek()).toEqual(secondValue);
  });

  it('Calling pop or peek on empty stack raises exception', ()=> {
    let stack = new Stack();
    
    expect(stack.pop()).toEqual('Empty Stack!');
    expect(stack.peek()).toEqual('Empty Stack!');
  });
});

describe('Queue Linear LinkedList DS class-010', ()=> {
    
  it('constructor() initializes empty queue', ()=> {
      let queue = new Queue();
      expect(queue.front).toBeNull();
  });

  it('Can successfully enqueue into a queue', ()=> {
      let queue = new Queue();
      let initialValue = 'First One';

      queue.enqueue(initialValue);
      expect(queue.front.value).toEqual(initialValue);
  });

  it('Can successfully enqueue multiple values into a queue', ()=> {
      let queue = new Queue();
      let initialValue = 'First One';
      let secondValue = 'Second One';
      let thirdValue = 'Third One';

      queue.enqueue(initialValue);
      queue.enqueue(secondValue);
      queue.enqueue(thirdValue);
      expect(queue.back.value).toEqual(thirdValue);
  });

  it('Can successfully dequeue out of a queue the expected value', ()=> {
    let queue = new Queue();
    let initialValue = 'First One';
    let secondValue = 'Second One';
    let thirdValue = 'Third One';

    queue.enqueue(initialValue);
    queue.enqueue(secondValue);
    queue.enqueue(thirdValue);
    queue.dequeue();
    expect(queue.front.value).toEqual(secondValue);
  });

  it('Can successfully empty a queue after multiple dequeues', ()=> {
    let queue = new Queue();
    let initialValue = 'First One';
    let secondValue = 'Second One';
    let thirdValue = 'Third One';

    queue.enqueue(initialValue);
    queue.enqueue(secondValue);
    queue.enqueue(thirdValue);
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.front).toBeNull;
  });

  it('Can successfully peek into a queue, seeing the expected value', ()=> {
    let queue = new Queue();
    let initialValue = 'First One';
    let secondValue = 'Second One';

    queue.enqueue(initialValue);
    queue.enqueue(secondValue);
    expect(queue.peek()).toEqual(initialValue);
  });

  it('Calling dequeue or peek on empty queue raises exception', ()=> {
    let queue = new Queue();

    expect(queue.dequeue()).toEqual('Empty Queue!');
    expect(queue.peek()).toEqual('Empty Queue!');
  });
});
