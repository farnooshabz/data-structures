var Graph = function() {
  this.edges = {};
  this.nodes = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
};
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.nodes.length > 0) {
    for (var i = 0; i < this.nodes.length; i++) {
      if (this.nodes[i] === node) {
        return true;
      }
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var key in this.edges) {
    if (key.includes(node.toString())) {
      delete this.edges[key];
    }
  }
  var index = this.nodes.indexOf(node);
  if (index > -1) {
    this.nodes.splice (index, 1);
  }

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var arr = [fromNode, toNode];
  var twoNodes = arr.join('');
  var reversedTwoNodes = arr.reverse().join('');
  //iterate over the edges
  for (var key in this.edges) {
    if (key === twoNodes || key === reversedTwoNodes) {
      return true;
    }
  }
  return false;

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var key = fromNode.toString() + toNode.toString();
  this.edges[key] = key;
  console.log('edge', this.edges);
};


// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var arr = [fromNode, toNode];
  var twoNodes = arr.join('');
  var reversedTwoNodes = arr.reverse().join('');
  //iterate over the edges
  for (var key in this.edges) {
    if (key === twoNodes || key === reversedTwoNodes) {
      delete this.edges[key];
    }
  }

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.nodes.length; i++) {
    cb(this.nodes[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 //
 */


