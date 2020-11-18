var Queue = function () {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  storage.start = 0;
  storage.end = 0;
  console.log(storage);

  // Implement the methods below

  someInstance.enqueue = function (value) {
    storage[storage.end] = value;
    storage.end++;
  };

  someInstance.dequeue = function () {
    storage.end--;
  };

  someInstance.size = function () {

  };

  return someInstance;
};
