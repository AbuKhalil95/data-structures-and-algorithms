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
    let node = new Node(value);
    if (!this.head) {
        this.head = node;
        return this;
    }

    let currentNode = this.head;
    while (currentNode.value != newVal) {
      currentNode = currentNode.next;
    }

    node.next = currentNode.next;
    currentNode.next = node;
    return this;
  }
}

module.exports.Node = Node;
module.exports.LinkedList = LinkedList;
