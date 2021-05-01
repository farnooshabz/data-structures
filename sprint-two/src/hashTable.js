

var HashTable = function() {
  this._limit = 8;
  this._count = 0;
  this._storage = LimitedArray(this._limit);
  //console.log('storage', this._storage);

};
HashTable.prototype.hashFunction = getIndexBelowMaxForKey;

HashTable.prototype.insert = function(k, v) {

  var index = this.hashFunction(k, this._limit);
  //retrieve a bucket
  var bucket = this._storage.get(index);
  //if it doesnot exist create a bucket
  if (!bucket) {
    bucket = [];
    this._storage.set(index, bucket);
  }
  //  if the key was stored before:
  //  iterate over the bucket
  var found = false;
  for (let i = 0; i < bucket.length; i++) {
    //    key exists? update it
    var tuple = bucket[i];
    if (tuple[0] === k) {
      tuple[1] = v;
      found = true;
      break;
    }
  }
  if (!found) {
    //  key doesn't exist
    //    insert a new tuple
    bucket.push([k, v]);
    this._count++;
    if (this._count > this._limit * 0.75) {
      var newLimit = this._limit * 2;
      this.resize(newLimit);
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = this.hashFunction(k, this._limit);
  var bucket = this._storage.get(index);
  if (!bucket) {
    return undefined;
  }
  //iterate over bucket
  for (let i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      //found it
      return tuple[1];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = this.hashFunction(k, this._limit);
  var bucket = this._storage.get(index);
  if (!bucket) {
    return undefined;
  }
  //iterate over bucket
  for (let i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      //found it remove it
      bucket.splice(i, 1);
      this._count--;
      if (this._count < this._limit * 0.25) {
        var newLimit = this._limit / 2;
        this.resize(newLimit);
      }
      return tuple[1];
    }
  }
  return undefined;
};

HashTable.prototype.resize = function(newLimit) {
  var oldStorage = this._storage;

  this._limit = newLimit;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
  var context = this;
  //now insert the oldStroage again
  oldStorage.each(function(bucket) {
    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        var tuple = bucket[i];
        context.insert(tuple[0], tuple[1]);
      }
    }
  });
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


