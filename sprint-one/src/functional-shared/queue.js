var Queue = function (start, end) {

  var instance = {};
  instance.storage = {};
  instance.storage.start = 0;
  instance.storage.end = 0;


  _.extend(instance, queueMethods);

  return instance;

};

var extend = function (obj, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var queueMethods = {

  enqueue: function (value) {
    this.storage[this.storage.end] = value;
    this.storage.end++;
    console.log("this.storage after push", this.storage);
    console.log("this.storage.end", this.storage.end);
  },

  dequeue: function (value) {
    if (this.storage.end - this.storage.start >= 1) {
      //store the first item in var
      var deletedItem = this.storage[this.storage.start];
      //delete the first item
      delete this.storage[this.storage.start];
      //increase the start count to account for deleted
      this.storage.start++;
      //return the first item (which was deleted)
      return deletedItem;
    }
  },

  size: function (value) {
    return this.storage.end - this.storage.start;

  }
  // push: function (value) {

  //   this.storage[this.storage.end] = value;
  //   this.storage.end++
  //   //console.log("this.storage after push", this.storage)
  //   console.log("this.storage.end", this.storage.end)
  // },


};


// var queueMethods = {
//   enqueue: function (value) {
//     obj[obj.end] = value;
//     obj.end++;
//   }
//    size: function () {
//     obj.end - obj.start;
//   }

// };


