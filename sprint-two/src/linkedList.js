var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.tail !== null) {
      var lastOne = list.tail;
      list.tail = Node(value);
      lastOne.next = list.tail;
    } else {
      list.tail = Node(value);
      list.head = list.tail;
    }

  };

  list.removeHead = function() {
    if (list.head !== null) {
      var removed = list.head;
      var nextOne = list.head.next;
      delete list.head;
      list.head = nextOne;
      return removed.value;
    }

  };

  list.contains = function(target) {
    for (var key in list) {
      if (list[key].value === target) {
        return true;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 linear
 */
