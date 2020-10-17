'use strict';

class HashTable {
  /**
   * A new hashtable is created with defined size input.
   * @param {number} size constructor value is used to make a new hashtable array with that value.
   */
  constructor(size) {
    this.size = size;
    this.entries = new Array(size); // bucket
  }
  /**
   * hash(key) returns a corresponding index to the key input.
   * @param {string} key is used to hash and return an index.
   */
  hash(key) {
    // return hash Index
    let charArr = key.split('');
    return charArr.reduce((p, n )=> {
      return p + n.charCodeAt(0);
    }, 0) * 599 % this.size;
  }
  /**
   * add(key, value) adds the value to the hashtable along with the key.
   * @param {string} key is used to hash and return an index.
   * @param {*} value is stored along the key in the hashtable.
   */
  add(key, value) {
    // Linked List to represent the value for each key in the bucket
    let hashIndex = this.hash(key);
    console.log("hashIndex: ",hashIndex)
    if(!this.entries[hashIndex]) {
      // create a new one
      this.entries[hashIndex] = new LinkedList();
    }

    let entry = { [key]: value };
    this.entries[hashIndex].append(entry); // LinkedList append method
  }
  /**
   * get(key) looks for the key/index and returns a string representing the linkedList at that index.
   * @param {string} key is used to hash and return an index.
   */
  get(key) {
    let hashIndex = this.hash(key);

    if(this.entries[hashIndex]) {
      return this.entries[hashIndex].print();
    } else {
      return null;
    }
  }
  /**
   * contains(key) returns boolean true if key exists and false otherwise.
   * @param {string} key is used to hash and return an index.
   */
  contains(key) {
    let hashIndex = this.hash(key);
    if(this.entries[hashIndex]) {
      return true;
    } else {
      return false;
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  
  print() {
    let currentNode = this.head;
    let output = '';

    while(currentNode) {
      output += `{ ${JSON.stringify(currentNode.value)} } -> `
      currentNode = currentNode.next;
    }
    output += 'NULL';
    return output;
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {   
      let current = this.head;
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
  } 
}

module.exports = HashTable;