const { NotImplementedError } = require('../extensions/index.js');

 const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.length = 0
    this.head = null
  }

  getUnderlyingList() {
    //throw new NotImplementedError('Not implemented');
    if(!this.length) {
      return null
    }
    return this.head
  }

  enqueue( value ) {
    //throw new NotImplementedError('Not implemented');
   const newNode = new ListNode(value)
   if (this.length === 0) {
     this.head = newNode
     this.length++
     return
   } 
   let current = this.head
   while (current.next) {
    current = current.next
   }

   current.next = newNode
   this.length++
   return
  }

  dequeue() {
    //throw new NotImplementedError('Not implemented');
    if(!this.length) {
      return null
    }
    
    let nodeToRemove = this.head
    this.head = this.head.next
    this.length--
    return nodeToRemove.value
   
  }
}

module.exports = {
  Queue
};
