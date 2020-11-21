// Instantiate a new graph
var Graph = function() {

  this.storageArr = [];
  this.edgesArr = [];
};

Graph.prototype.addNode = function(node) {


  this.storageArr.push(node);



};

Graph.prototype.contains = function(node) {
  var storageArr = this.storageArr;
  for (var i = 0; i < storageArr.length; i++) {
    if (storageArr[i] === node) {
      return true;
    }
  }
  return false;

};
Graph.prototype.removeNode = function(node) {
  this.storageArr.pop(node);
  this.removeEdge();

};

Graph.prototype.hasEdge = function(fromNode, toNode) {
  var edgesArr = this.edgesArr.flat().join('');
  var target = [fromNode, toNode].join('');
  var reverseTarget = [fromNode, toNode].reverse().join('');

  if (target === edgesArr || reverseTarget === edgesArr) {
    return true;
  } else {
    return false;
  }

};
Graph.prototype.addEdge = function(fromNode, toNode) {
  var edges = [fromNode, toNode];
  this.edgesArr.push(edges);
};

Graph.prototype.removeEdge = function(fromNode, toNode) {
  var deleteEdges = [fromNode, toNode];
  this.edgesArr.pop(deleteEdges);

};

Graph.prototype.forEachNode = function(cb) {
  if (this.storageArr.length !== 0) {
    for (var i = 0; i < this.storageArr.length; i++) {
      var test2 = cb(this.storageArr[i]);
    }
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */


