const PseudoQueue = require('../challenges/queueWithStacks/queue-with-stacks');

describe('Queue Linear LinkedList DS class-010', ()=> {
  it('Can successfully enqueue the first value', ()=> {
    let queue = new PseudoQueue();
    let initialValue = 'First One';

    expect(queue.enqueue(initialValue)).toEqual(initialValue);
});

  it('Can successfully enqueue multiple values into a queue and dequeue the first value', ()=> {
      let queue = new PseudoQueue();
      let initialValue = 'First One';
      let secondValue = 'Second One';
      let thirdValue = 'Third One';

      queue.enqueue(initialValue);
      queue.enqueue(secondValue);
      queue.enqueue(thirdValue);
      expect(queue.dequeue()).toEqual(initialValue);
  });

  it('Can successfully empty after multiple dequeue', ()=> {
    let queue = new PseudoQueue();
    let initialValue = 'First One';
    let secondValue = 'Second One';
    let thirdValue = 'Third One';

    queue.enqueue(initialValue);
    queue.enqueue(secondValue);
    queue.enqueue(thirdValue);
    queue.dequeue();
    queue.dequeue();
    expect(queue.dequeue()).toBeNull;
});

  it('Returns empty queue if actually empty', ()=> {
    let queue = new PseudoQueue();
    expect(queue.dequeue()).toBeNull();
  });
});
