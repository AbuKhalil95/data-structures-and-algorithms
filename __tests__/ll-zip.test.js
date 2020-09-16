'use strict';

const zipLists = require('../challenges/llZip/ll-zip');
const LL = require('../challenges/linkedList/linked-list').LinkedList;

let value1 = 'First One';
let value2 = 'Second One';
let value3 = 'Third One';
let value4 = 'Fourth One';
let value5 = 'Fifth One';

describe('LL Zipped module', ()=> {
  it('function works happily', ()=> {

    let listA = new LL();
    listA.insert(value1);
    listA.insert(value2);
    listA.insert(value3);
    listA.insert(value4);
    listA.insert(value5);

    let listB = new LL();
    listB.insert('A');
    listB.insert('B');
    listB.insert('C');
    listB.insert('D');
    listB.insert('E');

    // console.log('listA.toString() ====>', listA.toString())
    // console.log('listB.toString() ====>', listB.toString());
    expect(zipLists(listA, listB)).toEqual('{ First One } -> { A } -> { Second One } -> { B } -> { Third One } -> { C } -> { Fourth One } -> { D } -> { Fifth One } -> { E } ->  NULL');
  });

  it('List B is shorter', ()=> {

    let listA = new LL();
    listA.insert(value1);
    listA.insert(value2);
    listA.insert(value3);
    listA.insert(value4);
    listA.insert(value5);

    let listB = new LL();
    listB.insert('A');
    listB.insert('B');
    listB.insert('C');

    expect(zipLists(listA, listB)).toEqual('{ First One } -> { A } -> { Second One } -> { B } -> { Third One } -> { C } -> { Fourth One } -> { Fifth One } ->  NULL');
  });

  it('List A is shorter', ()=> {

    let listA = new LL();
    listA.insert(value1);
    listA.insert(value2);
    listA.insert(value3);

    let listB = new LL();
    listB.insert('A');
    listB.insert('B');
    listB.insert('C');
    listB.insert('D');
    listB.insert('E');

    expect(zipLists(listA, listB)).toEqual('{ First One } -> { A } -> { Second One } -> { B } -> { Third One } -> { C } -> { D } -> { E } ->  NULL');
  });
});