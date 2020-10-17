'use strict';

const Hashtable = require('../challenges/hashtable/hashtable');

// Testing example:
let myHash = new Hashtable(1024);
myHash.add('Data', 123);
myHash.add('Data1', 321);
myHash.add('Data2', '45456');
myHash.add('Data2', 'Yahya is me');

describe('Hashtable API\'s work ', ()=> {
  it('Successfully hash a 123 to an in-range value', ()=> {
    expect(myHash.hash('123')).toEqual(762);
  });

  it('Successfully hash a 123456789wida to an in-range value', ()=> {
    expect(myHash.hash('123456789wida')).toEqual(302);
  });

  it('Adding a key/value such as myHash.add(\'Data\', 123); with hash index 118 to your hashtable results in the value being in the data structure', ()=> {
    expect(myHash.entries[118].head.value).toEqual({'Data': 123});
  });

  it('Retrieving based on a key returns the value stored', ()=> {
    expect(myHash.get('Data1')).toBeTruthy;
  });

  it('Successfully returns null for a key that does not exist in the hashtable', ()=> {
    expect(myHash.get('nonexistent')).toBeNull;
  });

  it('Successfully handle a collision within the hashtable', () => {
    myHash.add('Data2', 'I am Yahya');
    expect(myHash.get('Data2')).toEqual('{ {"Data2":"45456"} } -> { {"Data2":"Yahya is me"} } -> { {"Data2":"I am Yahya"} } -> NULL');
  });

  it('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    myHash.add('Data2', 'DataVerify');
    console.log(myHash.get('Data2'));
    expect(myHash.entries[myHash.hash('Data2')].head.next.next.next.value).toEqual({'Data2': 'DataVerify'});
  });

  it('Successfully run contains true for an existing value', () => {
    expect(myHash.contains('Data2')).toBeTruthy();
  });

  it('Successfully run contains false for an non-existing value', () => {
    expect(myHash.contains('Data3')).toBeFalsy();
  });
});
