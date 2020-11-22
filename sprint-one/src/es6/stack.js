class Stack {
  constructor() {
    this.storage = {};
    this.storage.start = 0;
    this.storage.end = 0;
  }

  push(value) {
    this.storage[this.storage.end] = value;
    this.storage.end++;
  }

  pop() {
    if (this.storage.end >= 1) {
      this.storage.end--;
      return this.storage[this.storage.end];
    }
  }

  size() {
    return this.storage.end - this.storage.start;
  }


}

new Stack();