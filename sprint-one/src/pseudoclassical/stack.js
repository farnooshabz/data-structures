var Stack = function() {

  this.storage = {};
  this.top = 0;



};
Stack.prototype.push = function(value) {
  this.top ++;
  this.storage[this.top] = value;
};
Stack.prototype.pop = function () {
  if (this.size()) {
    var poped = this.storage[this.top];
    delete this.storage[this.top];
    this.top --;
    return poped;
  }
};
Stack.prototype.size = function() {
  return this.top;
};

