const Stack = function () {
  //const instance = {}
  this.storage = {};
  this.storage.start = 0;
  this.storage.end = 0;


};

Stack.prototype.push = function (value) {
  this.storage[this.storage.end] = value;
  this.storage.end++;
};

Stack.prototype.pop = function (value) {
  if (this.storage.end >= 1) {
    this.storage.end--;
    return this.storage[this.storage.end];
  }
};

Stack.prototype.size = function () {
  return this.storage.end - this.storage.start;
};

new Stack();



