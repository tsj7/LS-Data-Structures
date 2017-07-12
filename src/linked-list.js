 class LinkedList {
   constructor() {
     this.head = null;
     this.tail = null;
    // Do not modify anything inside of the constructor
   }

   addToTail(value) {
     const node = {
       value,
       next: null
     };
     if (!this.head) {
       this.head = node;
     } else {
       let currentNode = this.head;
       while (currentNode.next) {
         currentNode = currentNode.next;
       }
       currentNode.next = node;
     }
     this.tail = node;
   }

   removeHead() {
     const headRem = this.head.value;
     this.head = this.head.next;
     return headRem;
   }

   contains(value) {
     let currentNode = this.head;
     while (currentNode.next) {
       if (currentNode.value === value) {
         return true;
       }
       currentNode = currentNode.next;
     }
     return false;
   }
// console.log()
}
 module.exports = LinkedList;
