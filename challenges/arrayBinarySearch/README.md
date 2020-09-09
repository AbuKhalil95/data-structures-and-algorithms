# Binary search
Done using a traditional for loop, if statements and a flag.

## Challenge Description
Binary search that has no built in functions, adheres to the expected outcome from 2 inputs, sorted array and a value to match.

## Approach & Efficiency
Knowing that each step halves the length of the array, the big O max time it would take to finish is a logarithm of base 2.
A flag is necessary to break the loop from going through unnecessary 1 steps up and down again since there is no match if that step 
has been taken before.

Return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.

## Solution
Three different if statements are used inside the loop for navigating up and down halves and confirming match, in addition to 
two more if statements to flag no match if step 1 has reached and the last index been stepped into.

a return statement of steps taken before reaching the match, or -1 to indicate no match.