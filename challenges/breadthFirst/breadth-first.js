const { Graph } = require('../graph/graph');
const Queue = require('../stacksAndQueues/stacks-and-queues').Queue;

class BreadthFirst extends Graph {

  BreadthFirstTraversal(startNode) {
    const queue = new Queue();  
    const bfArray = [];
    queue.enqueue(startNode);
  
    while (queue.peek()) {
      const currentNode = queue.dequeue();
      const neighbors = this.getNeighbors(currentNode);
      // missing implementation
    }
        
    return bfArray;
  }
}

module.exports= BreadthFirst;