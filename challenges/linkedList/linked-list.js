'use strict';

// this is a node for a singly linked list 
// it has data and next, it can only go forward
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insert(value) {             // this is already a O(1) time complexity since new node has reference 
    let node = new Node(value); // to the old node and will be inserted afterwards.
    if (!this.head) {
        this.head = node;
        return this;
    }

    let currentNode;
    if (!this.tail) {
      currentNode = this.head;
    } else (
      currentNode = this.tail
    )

    currentNode.next = node;
    this.tail = currentNode.next;
    return this;
  }

  includes(value) {
    let currentNode = this.head;
    
    while(currentNode.next) {
      if (currentNode.value == value + '') {
        return true;
      }
      currentNode = currentNode.next;
    }

    return false;
  }

  toString() {
    let currentNode = this.head;
    let output = '';

    while(currentNode.next) {
      output += `{ ${currentNode.value} } -> `
      currentNode = currentNode.next;
    }
    output += ' NULL';
    return output;
  }
}

module.exports.Node = Node;
module.exports.LinkedList = LinkedList;
