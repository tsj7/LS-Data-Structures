  class Stack {
    constructor() {
      this.array = [];
    }

    add(value) {
      const newArray = this.array;
      this.array.push(value);
      return newArray;
    }

    remove() {
      const newArray = this.array;
      this.array.pop();
      return newArray;
    }
    get size() {
      return this.array.length;
    }
    }

  module.exports = Stack;
  // const newStack = new Stack ()
