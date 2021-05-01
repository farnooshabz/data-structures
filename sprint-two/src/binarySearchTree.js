var BinarySearchTree = function (value) {
  var binaryTree = Object.create(binaryTreePrototype);
  binaryTree.value = value;
  binaryTree.right = null;
  binaryTree.left = null;
  return binaryTree;
};


var binaryTreePrototype = {};
binaryTreePrototype.insert = function(value) {
  if (value < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else if (value > this.value) {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  } else {
    // do nothing: The tree already contains this value
  }
};
binaryTreePrototype.contains = function (value) {
  //base case:
  if (this.value === value) {
    return true;
  } else if (value < this.value) {
    return !!(this.left && this.left.contains(value));
  } else if (value > this.value) {
    return !!(this.right && this.right.contains(value));
  }

};
binaryTreePrototype.depthFirstLog = function(callback) {
  callback(this.value);
  if (this.left) {
    this.left.depthFirstLog(callback);
  }
  if (this.right) {
    this.right.depthFirstLog(callback);
  }
};

/* Complexity: What is the time complexity of the above functions?
 //Logarithmic
 */