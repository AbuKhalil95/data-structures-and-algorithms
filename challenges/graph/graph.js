class Vertex {
  constructor(value) {
      this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 0) {
      this.vertex = vertex;
      this.weight = weight;
  }
}

class Graph {
  constructor() {
    this._adjacencyList = new Map();
    this.size;
  }


  addVertex(vertex) {
      this._adjacencyList.set(vertex, []);
      this.size++;
  }

  addDirectedEdge(startVertex, endVertex, weight) {
      if (!this._adjacencyList.has(startVertex) || !this._adjacencyList.has(endVertex)) {
      } else {
          const adjacencies = this._adjacencyList.get(startVertex);
          adjacencies.push(new Edge(endVertex, weight));
      }

  }

  getNeighbors(vertex) {
      if (!this._adjacencyList.has(vertex) ) {
      } else {
          return this._adjacencyList.get(vertex);
      }
  }

  getNodes() {
      for (const [vertex, edge] of this._adjacencyList.entries()) {
          console.log("V ====> ", vertex);
          console.log("E ====> ", edge);
      }
  }

  getSize() {
    return this.size;
  }

  bfs() {
      
  }

  dfs() {

  }

  pathTo() {

  }
}

module.exports.Vertex = Vertex;
module.exports.Graph = Graph;
