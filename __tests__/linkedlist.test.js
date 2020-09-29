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

describe('Linked List Module class-05', ()=> {
    
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
        let fifth = list.insert(value5);
        console.log('fifth', fifth);
        expect(list.toString()).toEqual('{ First One } -> { Second One } -> { Third One } -> { Fourth One } -> { Fifth One } -> NULL');
    });
})


describe('Linked List Module class-06', ()=> {
    
    it('Can successfully add a node to the end of the linked list', ()=> {
        let list = new LL();
        let initialValue = 'Appended';
        list.append(initialValue);
        expect(list.tail.value).toEqual(initialValue);
    });

    it('Can successfully add multiple nodes to the end of a linked list', ()=> {
        let list = new LL();
        let initialValue = 'First One';
        list.append(initialValue);
        expect(list.head.value).toEqual(initialValue);

        let newValue = 'Second Value';
        list.append(newValue);
        expect(list.head.value).toEqual(initialValue);
        expect(list.head.next).not.toBeNull();
        expect(list.head.next.value).toEqual(newValue);
    });

    it('Can successfully insert a node before a node located i the middle of a linked list', ()=> {
        let list = new LL();
        let value1 = 'First One';
        let value2 = 'Second One';
        let value3 = 'Third One';

        list.append(value1);
        list.append(value2);
        list.append(value3);

        list.insertBefore(value2, value3);

        expect(list.head.next.next.value).toEqual(list.head.next.value);
        expect(list.head.next.next.next.value).toEqual(value3);
    });
})
    
describe('Linked List Module class-07', ()=> {

    it('kthFromEnd(k) returns value that is 6 from the end of a LL length 5', () => {
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
        expect(list.kthFromEnd(6)).toEqual('Length is too short');
    });

    it('kthFromEnd(k) returns value that is 5 from the end of a LL length 5', () => {
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
        expect(list.kthFromEnd(5)).toEqual('First One');
    });

    it('kthFromEnd(k) returns value that is -5 from the end of a LL length 5, flips to search from the beginning', () => {
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
        expect(list.kthFromEnd(-5)).toBeNull;
    });

    it('kthFromEnd(k) returns value that is 1 from the end of a LL length 1', () => {
        let list = new LL();
        let value1 = 'First One';

    
        list.insert(value1);
        expect(list.kthFromEnd(1)).toEqual('First One');
    });

    it('kthFromEnd(k) returns value that is 3 from the end of a LL length 5', () => {
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
        expect(list.kthFromEnd(3)).toEqual('Third One');
    });
})