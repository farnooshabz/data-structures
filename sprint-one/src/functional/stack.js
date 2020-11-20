var Stack = function (start, end) {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  storage.start = 0;
  storage.end = 0;





  // Implement the methods below
  someInstance.push = function (value) {
    storage[storage.end] = value;
    storage.end++;
    //console.log("storage after push", storage)
  };

  someInstance.pop = function () {
    if (storage.end >= 1) {
      storage.end--;
      return storage[storage.end];
    }
  };

  someInstance.size = function () {
    return storage.end - storage.start;
  };

  return someInstance;
};
