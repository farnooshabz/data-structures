var Tree = function (value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function (value) {

  var newNode = Tree(value);
  this.children.push(newNode);
};

treeMethods.contains = function (target) {
  var isFound = false;
  var eachNode = this.children;
  if (this.value === target) {
    return true;
  }
  var findTargetInNested = function (item) {
    if (item.value === target) {
      isFound = true;
      return;
    }
    if (item.children.length >= 1) {
      console.log('item children', item.children);
      item.children.forEach(function(element) {
        findTargetInNested(element);
      });
    }
  };


  console.log('eachNode', eachNode);

  if (eachNode.length >= 1) {
    for (var i = 0; i < eachNode.length; i++) {
      var current = eachNode[i];
      if (isFound === true) {
        break;
      }
      findTargetInNested(current);
    }
  }

  return isFound;
};

