var Queue = function() {
  this.storage = {};
  this.start = 0;
  this.end = 0;
};

Queue.prototype.enqueue = function(value) {
  this.end ++;
  this.storage[this.end] = value;
};
Queue.prototype.dequeue = function () {
  if (this.size()) {
    this.start ++;
    var poped = this.storage[this.start];
    delete this.storage[this.start];
    return poped;
  }
};
Queue.prototype.size = function() {
  return this.end - this.start;
};