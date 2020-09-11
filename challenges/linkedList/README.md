# Linked-list functions
Linked lists are such nested objects that points to each others, multiple implementations of such concept is done for a linear linked as a start is done in this challenge.

## Challenge Description
The challenge involves applying 3 methods, an insert() with O(1) time complexity, an includes() that checks for a value, and finally a toString() that prints out the whole linked list as values with arrows.

## Approach & Efficiency
First method initializes with head and tail properties, adding to tail directly and moving tail to that value allows for O(1) time complexity.

Second method would include if statement check with node loop.

Third method loops and concat.

## Solution
A starter approach is to define a class for each node wit properties of value and next, and a linked list class that has the properties of head and tail (for reduced time complexity when inserting).

First method implements a new linkedList, define first element as head, then work its way down by appending to tail with the latest input, and redefine tail as that input, this allows for O(1) time complexity.

Second method checks for the whole array using a while loop that checks for .next, then checks for its value and then move to the next node to do the same till the end, returns true for match or false for no match.

Third method concatenates the the output with a string as it loops through each node, and ends with a null concatenate, then outputs the string. 