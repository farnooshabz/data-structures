var Graph = function() {
  this._nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this._nodes[node] = this._nodes[node] || {edges: {}};
};

Graph.prototype.contains = function (node) {
  return !!this._nodes[node];
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.contains(node)) {
    // Removes edges between node to be deleted and all other connected nodes.
    for (var targetNode in this._nodes[node].edges) {
      this.removeEdge(node, targetNode);
    }
    delete this._nodes[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var currentNode = this._nodes[fromNode];
  if (!currentNode) {
    return false;
  }
  return !!currentNode.edges[toNode];
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if ( !this._nodes[fromNode] || !this._nodes[toNode]) {
    return;
  }
  this._nodes[fromNode].edges[toNode] = toNode;
  this._nodes[toNode].edges[fromNode] = fromNode;
};


// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //check if the nodes and the edges are available
  if (!this.contains(fromNode) || !this.contains(toNode)) {
    return;
  }
  delete this._nodes[fromNode].edges[toNode];
  delete this._nodes[toNode].edges[fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var node in this._nodes) {
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 //
 */


