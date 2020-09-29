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
        this.tail = this.head;
        return this;
    }

    let currentNode = this.tail;
    currentNode.next = node;
    console.log('this.head after insertin ===>>', node, this.head);
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

    while(currentNode) {
      output += `{ ${currentNode.value} } -> `
      currentNode = currentNode.next;
    }
    output += 'NULL';
    return output;
  }

  append(value) {
    let node = new Node(value);
    if (!this.head) {
        this.head = node;
        this.tail = this.head;
        return this;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
    this.tail = currentNode.next;
    return this;
  }

  insertBefore(value, newVal) {
    let node = new Node(value);
    if (!this.head) {
        this.head = node;
        return this;
    }

    let currentNode = this.head;
    while (currentNode.next.value != newVal) {
      currentNode = currentNode.next;
    }

    node.next = currentNode.next;
    currentNode.next = node;
    return this;
  }

  insertAfter(value, newVal) {
    let node = new Node(newVal);
    if (!this.head) {
        this.head = node;
        return this;
    }

    let currentNode = this.head;
    while (currentNode.value != value) {
      currentNode = currentNode.next;
    }

    node.next = currentNode.next;
    currentNode.next = node;
    return this;
  }

  kthFromEnd(k) {
    let targetNode = this.head;
    let endNode = this.head;
    let distance = 0;

    if (!this.head) {
      return 'Empty LL';
    }

    while (endNode) {
      endNode = endNode.next;
      distance ++;
      if (k > 0) {
        if (distance > k){
          targetNode = targetNode.next;
        }
      } else if (k < 0) {
        if (distance == Math.abs(k)) {
          return endNode && endNode.value || null;
        }
      }
    }

    if (!(distance >= Math.abs(k))) {
      return 'Length is too short';
    }

    return targetNode.value;
  }
}

module.exports.Node = Node;
module.exports.LinkedList = LinkedList;
