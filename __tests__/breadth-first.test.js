const Vertex = require('../challenges/graph/graph').Vertex;
const GraphBreadth = require('../challenges/breadthFirst/breadth-first');

const graph = new GraphBreadth();

const two = new Vertex(2);
const three = new Vertex(3);
const six = new Vertex(6);
const seven = new Vertex(7);
const eight = new Vertex(8);
const ten = new Vertex(10);

graph.addVertex(two);
graph.addVertex(three);
graph.addVertex(six);
graph.addVertex(seven);
graph.addVertex(eight);
graph.addVertex(ten);

graph.addDirectedEdge(two, seven);
graph.addDirectedEdge(three, eight, 7);
graph.addDirectedEdge(six, seven);
graph.addDirectedEdge(six, eight, 2);
graph.addDirectedEdge(eight, seven);
graph.addDirectedEdge(ten, two);
graph.addDirectedEdge(ten, eight, 5);

describe('BFT is functional and working!', ()=> {
  it('The correct traversal array for 2 is returned ', ()=> {
    expect(graph.traversal(two)).toEqual([ 2, 7 ]);
  });

  it('The correct traversal array for 3 is returned ', ()=> {
    expect(graph.traversal(three)).toEqual([ 3, 8, 7 ]);
  });

  it('The correct traversal array for 6 is returned ', ()=> {
    expect(graph.traversal(six)).toEqual([ 6, 7, 8 ]);
  });

  it('The correct traversal array for 7 with no next neighbors is returned ', ()=> {
    expect(graph.traversal(seven)).toEqual([ 7 ]);
  });

  it('The correct traversal array for 8 is returned ', ()=> {
    expect(graph.traversal(eight)).toEqual([ 8, 7 ]);
  });

  it('The correct traversal array for 10 is returned ', ()=> {
    expect(graph.traversal(ten)).toEqual([ 10, 2, 8, 7 ]);
  });
});

