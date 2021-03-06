'use strict';
const util = require('util');

const Hashtable = require('../challenges/hashtable/hashtable');
const leftJoin = require('../challenges/leftJoin/left-join');

// Testing example:

function initiate() {
  let myHashA = new Hashtable(1024);
  let myHashB = new Hashtable(1024);

  myHashA.add('Data', 123);
  myHashA.add('Data1', 321);
  myHashA.add('Data2', '45456');
  myHashA.add('Data2', 'Dtaum');
  myHashA.add('Data3', 'Rando');
  myHashA.add('Data4', 999);
  myHashA.add('Data5', 'whoseesdeadpeople');

  myHashB.add('Data', 123);
  myHashB.add('Data3', 'Rando');
  myHashB.add('Data4', 333);
  myHashB.add('Data6', 404);

  return [myHashA, myHashB];
}

describe('Left joins works as intended', ()=> {
  it('Successfully does a full left join, and Data5 to only have 1 entry', ()=> {
    let [myHashA, myHashB] = initiate();
    leftJoin(myHashA, myHashB);
    console.log(util.inspect(myHashA.entries[myHashA.hash('Data5')], false, null, true /* enable colors */))
    expect(myHashA.entries[myHashA.hash('Data5')].size).toEqual(1);
  });

  it('Successfully does a full left join, and Data5 to have a correct entry value', ()=> {
    let [myHashA, myHashB] = initiate();
    leftJoin(myHashA, myHashB);

    expect(myHashA.entries[myHashA.hash('Data5')].head.value['Data5']).toEqual('whoseesdeadpeople');
  });

  it('Successfully does a full left join, and appends what exists in B to A', ()=> {
    let [myHashA, myHashB] = initiate();
    leftJoin(myHashA, myHashB);

    expect(myHashA.entries[myHashA.hash('Data')].size).toEqual(2);
  });

  it('Successfully does a full left join, leaves unique B outside of A', ()=> {
    let [myHashA, myHashB] = initiate();
    leftJoin(myHashA, myHashB);

    expect(myHashA.entries[myHashA.hash('Data6')]).toBeFalsy;
  });

});
