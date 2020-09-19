# Stacks and Queues data structure classes
Linked lists are implemented into two different data structures which are the stack and queues.

# Class-010
# Stacks and Queues
Implementing stack and queue classes to use in the future, all functionalities must adhere to the correct intended use.

## Challenge
Stack and queue would both need to have a method to add by value input, and remove nodes once the method called, how depends on which class since they behave differently AS FILO, LIFO / FIFO, LILO respectively.

## Approach & Efficiency
Since stacks act as first in, last out each input node has its top replaced as the new input, and has a next pointed to the old using a temporary variable to hold this.top value with O(1) time and space complexity. Removing the top value is trivial by simply moving the top to the top.next with also a O(1) time and space complexity.

Queues are less trivial at first, both front and back is initialized with the first value. New values become the new back and points to the old back value using a temporary variable with O(1) time and space complexity. 

The non triviality comes from removing the front value, configuring the front as null, then if we had a back.next we move until a new front is found just before the end, if no back.next is found it returns null. O(n) time and O(n) space since new variables are declared to traverse the queue.

## API
Stack {
  push(); // pushes new input into the bottom
  pop();  // removes the very top input
  peek(); // gets the very top value
  isEmpty();  // returns boolean if empty true/false
}

Queue {
  enqueue(); // adds new back input into the tunnel
  dequeue(); // removes front input from the tunnel
    peek(); // gets the very front value
  isEmpty();  // returns boolean if empty true/false
}