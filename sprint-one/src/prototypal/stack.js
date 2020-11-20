var Stack = function () {
  //var instance = Object.create
  instance.storage = {};

  instance.storage.start = 0;
  instance.storage.end = 0;


  return instance;
};

var stackMethods = {
  push: function (value) {

    this.storage[this.storage.end] = value;
    this.storage.end++;
    // console.log("this.storage after push", this.storage)
    // console.log("this.storage.end", this.storage.end)
  },
  pop: function () {
    if (this.storage.end >= 1) {
      this.storage.end--;
      return this.storage[this.storage.end];
    }
  },
  size: function () {
    //Alternative working code
    // console.log("return object", Object.keys(this.storage))
    // return Object.keys(this.storage).length
    return this.storage.end - this.storage.start;
  }
};


