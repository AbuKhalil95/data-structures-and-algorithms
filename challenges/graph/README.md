# Graph Methods
Graphs are the way to map non linear data, they represent the connectivity of seemingly isolated but related data points.

# Class-35
# Graph
To start graphing, you would add a node called vertex, the vertex, similar to node has only one property which is the value. The connection between vertices however is done by a separate edge class, which takes in the vertex its connected to, and an optional weight value (0 default) for a weighted edge result.


## Challenge
The challenge involve defining the classes correctly, and applying the methods to return the desired values, the graph would then be further used long the week to represent what could be built on the class further along the way.

These API's that is needed to be implemented:
- AddNode():
  - Adds a new node to the graph, takes in the value of that node and returns the added node
- AddEdge():
  - Adds a new edge between two nodes in the graph, include the ability to have a “weight”, takes in the two nodes to be connected by the edge and finally both nodes should already be in the Graph.
- GetNodes():
  - returns all of the nodes in the graph as a collection (set, list, or similar).
- GetNeighbors():
  - Returns a collection of edges connected to the given node, takes in a given node and include the weight of the connection in the returned collection.
- Size() 
  - Returns the total number of nodes in the graph.

## Approach & Efficiency
Starting the table by implementing 3 classes:
- A `Vertex` with `this.value {*}`.
- An `Edge` with `this.vertex {Vertex}` and `this.weight {Integer}`.
- A `Graph` with `this.adjacencyList = new Map() {Array}` and `this.size {Integer}`

First two classes are requirements to implement the third main class.
Graph methods of getting neighbors involves using has() and get() map object method, which returns the existence and corresponding vertex immediately as a key value in an object. Time complexity is reduced to O(1) due to the key-value nature and space complexity is O(n) if we considered all inputted data is stored once.

## API
```
Graph {
  addVertex(value); // creates a new vertex in the graph.

  addDirectedEdge(startVertex, endVertex, weight); // connects two vertices with an edge along with its weight.

  getNeighbors(vertex);   // gets an array of vertices and edges of the input vertex.

  getNodes();  // returns an adjacency list style array.

  getSize();   // returns the amount of vertices in graph.
}
```