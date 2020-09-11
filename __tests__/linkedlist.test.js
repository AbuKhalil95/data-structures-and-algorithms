'use strict';

const Node = require('../challenges/linkedList/linked-list').Node;
const LL = require('../challenges/linkedList/linked-list').LinkedList;

describe('Node Module', ()=> {
    it('constructor() works properly', ()=> {
        let value = 'Test Value';
        let node = new Node(value);
        expect(node.value).toEqual(value);
        expect(node.next).toBeNull();
    });
});

describe('Linked List Module', ()=> {
    
    it('constructor() initializes empty linkedList', ()=> {
        let list = new LL();
        expect(list.head).toBeNull();
    });

    it('insert() works as intended', ()=> {
        let list = new LL();
        let initialValue = 'First One';
        list.insert(initialValue);
        expect(list.head.value).toEqual(initialValue);
    });

    it('insert() points to the first node', ()=> {
        let list = new LL();
        let initialValue = 'First One';
        list.insert(initialValue);
        expect(list.head.next).toBeNull;
    });

    it('insert() works with multiple values', ()=> {
        let list = new LL();
        let initialValue = 'First One';
        list.insert(initialValue);
        expect(list.head.value).toEqual(initialValue);

        let newValue = 'Second Value';
        list.insert(newValue);
        expect(list.head.value).toEqual(initialValue);
        expect(list.head.next).not.toBeNull();
        expect(list.head.next.value).toEqual(newValue);
       
        console.log("list of two values -----> ", list);
    });

    it('includes() works with true and false matches', () => {
        let list = new LL();
        let value1 = 'First One';
        let value2 = 'Second One';
        let value3 = 'Third One';
        let value4 = 'Fourth One';
        let value5 = 'Fifth One';

        list.insert(value1);
        list.insert(value2);
        list.insert(value3);
        list.insert(value4);
        list.insert(value5);

        expect(list.includes('Fourth One')).toBeTruthy;
        expect(list.includes('No One')).toBeFalsy;
    });

    it('toString() returns the full list', () => {
        let list = new LL();
        let value1 = 'First One';
        let value2 = 'Second One';
        let value3 = 'Third One';
        let value4 = 'Fourth One';
        let value5 = 'Fifth One';

        list.insert(value1);
        list.insert(value2);
        list.insert(value3);
        list.insert(value4);
        list.insert(value5);

        expect(list.toString()).toEqual('{ First One } -> { Second One } -> { Third One } -> { Fourth One } ->  NULL');
        console.log("list of 5 values -----> ", list);
    });
})