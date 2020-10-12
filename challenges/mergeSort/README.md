# Merge Sort 
Sorting algorithm that is much faster that insertion sort.

# Class-27
## Challenge Description
Merge sort, takes into account the special way binary search works, and recursively divides each half until individual elements in a similar way to how stacks work. This takes a time complexity of logn to do so, and then merging them together once a at a time taking into consideration which is larger at a time complexity of n. Thus making the whole algorithm a time complexity of O(nlogn) on all cases since it does not stop if array is already sorted. Space complexity is however is O(n) because we make a copy of the whole array to work on.

## Solution
![whiteboard](../../resources/whiteboard-class-26.png)