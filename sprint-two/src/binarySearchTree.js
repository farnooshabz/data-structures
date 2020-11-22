var BinarySearchTree = function (value) {
  var instance = {};
  //instance.root = {};
  instance.children = [];
  instance.left = 0;
  instance.right = 0;

  _.extend(instance, methods);

  return instance;
};

var methods = {
  addChild: function (value) {
    //return "test";
  },

  contains: function (value) {
    //return "test2";
  }

};


/* Complexity: What is the time complexity of the above functions?
 //Logarithmic
 */