const fifoAnimalShelter = require('../challenges/fifoAnimalShelter/fifo-animal-shelter');

describe('Fifo animal shelter queue with stacks DS class-12', ()=> {
  it('Can successfully enqueue the first dog', ()=> {
    let queue = new fifoAnimalShelter();
    let initialValue = 'dog';

    expect(queue.enqueue(initialValue)).toEqual(initialValue);
  });

  it('Can successfully enqueue a dog and two cats into a queue and dequeue the first value (dog) and return null on dog column', ()=> {
      let queue = new fifoAnimalShelter();
      let initialValue = 'dog';
      let secondValue = 'cat';

      queue.enqueue(initialValue);
      queue.enqueue(secondValue);
      queue.enqueue(secondValue);
      expect(queue.dequeue()).toBeNull;
  });

  it('Can successfully enqueue a cat and a dog then a cat into a queue and dequeue the first value (cat) and return a cat', ()=> {
    let queue = new fifoAnimalShelter();
    let initialValue = 'cat';
    let secondValue = 'dog';

    queue.enqueue(initialValue);
    queue.enqueue(secondValue);
    queue.enqueue(initialValue);
    expect(queue.dequeue()).toBeNull;
  });

  it('Can successfully empty after multiple dequeue', ()=> {
    let queue = new fifoAnimalShelter();
    let initialValue = 'dog';
    let secondValue = 'cat';

    queue.enqueue(initialValue);
    queue.enqueue(secondValue);
    queue.enqueue(secondValue);
    queue.dequeue();
    queue.dequeue();
    expect(queue.dequeue()).toBeNull;
  });

  it('Can successfully enqueue two dogs and two cats into a queue and dequeue the cats (cat)', ()=> {
    let queue = new fifoAnimalShelter();
    let initialValue = 'dog';
    let secondValue = 'cat';

    queue.enqueue(initialValue);
    queue.enqueue(initialValue);
    queue.enqueue(secondValue);
    queue.enqueue(secondValue);
    queue.dequeue('cat')
    expect(queue.dequeue('cat')).toBeNull;
  });

  it('Can successfully enqueue two dogs and two cats into a queue and dequeue the dogs (dog)', ()=> {
    let queue = new fifoAnimalShelter();
    let initialValue = 'dog';
    let secondValue = 'cat';

    queue.enqueue(initialValue);
    queue.enqueue(initialValue);
    queue.enqueue(secondValue);
    queue.enqueue(secondValue);
    queue.dequeue('dog')
    expect(queue.dequeue('dog')).toBeNull;
  });

  it('Can successfully enqueue a dog and two cats into a queue and dequeue the first value (dog)', ()=> {
    let queue = new fifoAnimalShelter();
    let initialValue = 'dog';
    let secondValue = 'cat';

    queue.enqueue(initialValue);
    queue.enqueue(secondValue);
    queue.enqueue(secondValue);
    expect(queue.dequeue('cat')).toEqual(secondValue);
  });

  it('Returns empty queue if actually empty', ()=> {
    let queue = new fifoAnimalShelter();
    expect(queue.dequeue()).toBeNull();
  });
});
