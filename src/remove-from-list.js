const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList( l, k ) {
  //throw new NotImplementedError('Not implemented');
 let node = l
 let prevNode = l
 if (!node) {
   return null
 }
 if (node.value == k) {
  node = node.next
  prevNode.next = null
  l = node
} 
 while (node) {
  if (node.value !== k) {
    prevNode = node
    node = node.next
  } else {
    node = node.next
    prevNode.next = node
  }
 }
 return l
}
// function convertArrayToList(arr) {
//   return arr.reverse().reduce((acc, cur) => {
//     if (acc) {
//       const node = new ListNode(cur);
//       node.next = acc;
//       return node;
//     }

//     return new ListNode(cur);
//   }, null);
// }
//  let list = convertArrayToList([1,2,3,4,5,6])
//  console.log(removeKFromList(list, 6))
module.exports = {
  removeKFromList
};
