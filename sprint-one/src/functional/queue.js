var Queue = function () {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  storage.start = 0;
  storage.end = 0;


  // Implement the methods below

  someInstance.enqueue = function (value) {
    storage[storage.end] = value;
    storage.end++;
  };

  someInstance.dequeue = function () {
    //To avoid having a negative count of items
    if (storage.end - storage.start >= 1) {
      //store the first item in var
      var deletedItem = storage[storage.start];
      //delete the first item
      delete storage[storage.start];
      //increase the start count to account for deleted
      storage.start++;
      //return the first item (which was deleted)
      return deletedItem;
    }
  };

  someInstance.size = function () {
    return storage.end - storage.start;
  };

  return someInstance;
};
