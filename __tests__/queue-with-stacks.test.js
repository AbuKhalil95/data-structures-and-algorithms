const PseudoQueue = require('../challenges/queueWithStacks/queue-with-stacks');

describe('Queue Linear LinkedList DS class-010', ()=> {
    

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

  it('Returns empty queue if actually empty', ()=> {
    let queue = new PseudoQueue();
    expect(queue.dequeue()).toEqual('Empty Stack!');
  });
});
