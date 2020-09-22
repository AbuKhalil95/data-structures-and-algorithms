# Multi-bracket Validation
This algorithm would deal with checking if a string contains balanced parenthesis

# Class-013
# Balanced Parentheses
The challenge involves an algorithm that would check for any parenthesis and match it with its closing bracket `()`, `[]`, `{}`.

## Challenge
The match would need to happen right after the first closing bracket is declared, where it should match the last opening bracket.

## Approach & Efficiency
The first thing that comes in mind is to setup a second array to store all opening brackets. 

Each string containing brackets would be traversed once until a closing parenthesis happens, and the search match is done with the last opening parenthesis, then pops it out and continues into the string.

So worst case scenario would involve O(n) time complexity due to the traversal and O(n) space complexity due to the storage assuming all string is parentheses.

## Solution
![whiteboard](../../resources/whiteboard-class-13.png)
