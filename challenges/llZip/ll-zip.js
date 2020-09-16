'use strict';

function zipLists(A, B) {
  let nodeA = A.head;
  let nodeB = B.head;

  while (nodeA || nodeB) {
    if (!nodeB) {
      break;
    }

    A.insertAfter(nodeA.value, nodeB.value);
    console.log('A.toString();', A.toString())
    nodeA = nodeA.next.next;
    
    if (!nodeA) {
      while (nodeB.next) {
        A.insertAfter(nodeB.value, nodeB.next.value);
        nodeB = nodeB.next;
      }
    }

    nodeB = nodeB.next;
  }
  return A.toString();
}

module.exports = zipLists;