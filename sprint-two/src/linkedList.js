var LinkedList = function () {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function (value) {
    var newNode = Node(value)
    if (list.head === null && list.tail === null) {
      list.tail = newNode;
      list.head = newNode;
    }
    //work on syntax, the following lines will always execute after the if statement
    var currentNode = list.tail;
    currentNode.next = newNode;
    list.tail = newNode;

    //list.tail.next = newNode
    //list.tail = list.tail.next
  };

  list.removeHead = function () {
    console.log("list.head", list.head)
    var firstNode = list.head;
    delete list.head
    //delete removes key value pair
    list.head = firstNode.next
    return firstNode.value;
  };

  list.contains = function (target) {

    console.log("target", target)
    //define a current var assigned to head
    var element = list.head;
    //while current in not null
    //if (element !== null) {

    //if(element) -Checks if its truthy or falsy, stick to strict comparisons for now
    while (element !== null) {
      console.log("element", element)
      //if current is equal to target
      if (element.value === target) {
        return true;
      }
      element = element.next;
      //return true
    }
    //if not found outside the while loop return false
    return false;

  };

  return list;
};

var Node = function (value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 //Constant
 */
