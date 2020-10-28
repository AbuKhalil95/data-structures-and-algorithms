# Get Edges in Graphs
Check out neighbors for all input to see if a direct edge exists.

# Class-37
# Get Edges
## Challenge Description
Given that we have an array of city names, and a graph representing the cities and their direct path of flight (edge) along with the price (weight). Check all valid direct paths that exists between any input name array.

## Approach & Efficiency
The problem looks simple at first look, but there is hidden complexity as soon as there are more than two inputs, what is needed is to check if a flight connects from one node, all the way through the other nodes in the input array.

One way is to simply follow the directed edge path, and see if one of the cities left in the array exists there, and continue, if not check the other existing cities, and if all options are exhausted without traversing the next node then we know there is a disconnect.

The time complexity represents going through all of the available nodes, assuming the input is equal to the graph length, which is O(n), since in directed edge we don't revisit any node.

Space complexity is O(1) with no extra storage used, other than for the input.

The other undirected edge involves a hashtable to exclude the visited nodes, and make sure no circular pattern happens, thus increasing the space complexity to O(n) on the worst case scenario. 

## Solution
![whiteboard](../../resources/whiteboard-class-37.png)