const Vertex = require('../challenges/graph/graph').Vertex;
const Graph = require('../challenges/graph/graph').Graph;


const graph = new Graph();

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
graph.addDirectedEdge(three, eight);
graph.addDirectedEdge(six, seven);
graph.addDirectedEdge(six, eight);
graph.addDirectedEdge(ten, two);
graph.addDirectedEdge(ten, eight);
graph.addDirectedEdge(eight, seven);

graph.printAll();

describe('Graphs are functional and working!', ()=> {
  it('An empty graph properly returns null', ()=> {
    const graphTest = new Graph();

    expect(graphTest.size).toEqual(1);
  });

  it('Node can be successfully added to the graph', ()=> {

    expect(myHashA.entries[myHashA.hash('Data5')].size).toEqual(1);
  });

  it('A graph with only one node and edge can be properly returned', ()=> {

    expect(myHashA.entries[myHashA.hash('Data5')].size).toEqual(1);
  });

  it('An edge can be successfully added to the graph', ()=> {

    expect(myHashA.entries[myHashA.hash('Data5')].size).toEqual(1);
  });

  it('A collection of all nodes can be properly retrieved from the graph', ()=> {

    expect(myHashA.entries[myHashA.hash('Data5')].size).toEqual(1);
  });

  it('All appropriate neighbors can be retrieved from the graph', ()=> {

    expect(myHashA.entries[myHashA.hash('Data5')].size).toEqual(1);
  });

  it('Neighbors are returned with the weight between nodes included', ()=> {

    expect(myHashA.entries[myHashA.hash('Data5')].size).toEqual(1);
  });

  it('The proper size is returned, representing the number of nodes in the graph', ()=> {

    expect(myHashA.entries[myHashA.hash('Data5')].size).toEqual(1);
  });
});

