var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  // your code here
  //newTree.childNode = {};
  newTree = _.extend (newTree, treeMethods);
  newTree.children = [];// fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree (value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  var isFound = false;
  if (this.value === target) {
    return true;
  }
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].value === target) {
      return true;
    }
    if (this.children[i].children.length > 0) {
      for (var j = 0; j < this.children[i].children.length; j++) {
        isFound = this.children[i].children[j].contains(target);
        if (isFound) {
          return true;
        }
      }
      //isFound = item.contains(target)

    }
  }
  return isFound;

};



/*
 * Complexity: What is the time complexity of the above functions?

 */
