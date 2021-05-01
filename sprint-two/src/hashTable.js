

var HashTable = function() {
  this._limit = 8;
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
    this._storage.set(idx, bucket);
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
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = this.hashFunction(k, this._limit);
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = this.hashFunction(k, this._limit);
  this._storage.storage.splice(index, 1);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


