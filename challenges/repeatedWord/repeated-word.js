'use strict';
const HashTable = require("../hashtable/hashtable");

class Repeats {
  constructor() {

  }

  firstRepeated(str) {
    let hashTable = new HashTable(1024);
    let charArr = str.split(/\W+/);
    
    for (let i = 0; i < charArr.length; i++) {
      if (hashTable.contains(charArr[i].toLowerCase())) {
        return charArr[i];
      }
      hashTable.add(charArr[i].toLowerCase());
    }

    return null;
  }

  AllRepeated(str) {
    let hashTable = new HashTable(1024);
    let charArr = str.split(/\W+/);
    let repeatedArr = [];
    for (let i = 0; i < charArr.length; i++) {
      // else add it to the hashtable
      hashTable.add(charArr[i].toLowerCase());
    }

    for (let i = 0; i < charArr.length; i++) {
      let target = charArr[i].toLowerCase();
      let output = hashTable.get(target); 
      if(output) {
        if(output[1] > 0 && !repeatedArr.some(x => 
          Object.keys(x)[0] === Object.keys(output[2].head.value)[0])) {
          repeatedArr.push({[target]: output[1]})
        }
      }
    }
    return repeatedArr;
  }
}

module.exports = Repeats;