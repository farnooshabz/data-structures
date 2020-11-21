var Tree = function (value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  //newTree.children = null;  // fix me

  newTree.children = [];

  _.extend(newTree, treeMethods);
  //console.log("newTree.children", newTree.children);
  return newTree;


};

var treeMethods = {};

treeMethods.addChild = function (value) {

  var newNode = Tree(value);
  //console.log('newNode', newNode)
  this.children.push(newNode);
  // var newNode = {};
  // newNode.value = value;

};

treeMethods.contains = function (target) {
  //   var isFound = false;

  //   var findTargetInNested = function () {
  //     if (this.children.length === undefined) {
  //       return;
  //     }
  //   }


  // }
  // if (this.children.length === 0) {
  //   return isFound;
  // }
  // for (var i = 0; i < this.children.length; i++) {
  //   var current = this.children[i];
  //   findTargetInNested(current);
  // }

  // return isFound;


  //OLD FUNCTION
  //console.log("target", target)
  if (this.children.length === 0) {
    return false;
  }
  var isFound = false;
  //console.log("this.children", this.children.flat())
  for (var i = 0; i < this.children.length; i++) {

    var current = this.children[i];
    //console.log("current.children", current.children)
    if (current.children.length >= 1) {
      //console.log("current.children cond", current.children)
      current.children.forEach((element) => {
        if (element.value === target) {
          isFound = true;
        }
        // return isFound
      });
    }
    //return treeMethods.contains(target);

    if (current.value === target) {
      return true;
    }

  }
  return false;
};




//i: number from target, newTree.children array
//o: boolean
//c: N/A
//e: some nodes have multiple objects, if newtree.children is empty, return false

//if newtree.children is empty, return false
//loop over the newTree.children array
//if current is not an object,
//if current.value === target//return true
//if is an object
//run recusive function for each element.






/*
 * Complexity: What is the time complexity of the above functions?
 */



// for (var i = 0; i < this.children.length; i++) {
//   var current = this.children[i];
//   if (current.value === target) {
//     return true;
//   }

// }
// return false;
