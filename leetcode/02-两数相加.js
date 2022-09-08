/**
 * 
给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
const l1 = new ListNode(2, new ListNode(4, new ListNode(3, null)))
const l2 = new ListNode(5, new ListNode(6, new ListNode(4, null)))
// console.log(l1)
// console.log(l2)
var addTwoNumbers = function (l1, l2) {
    let a1 = '',
        a2 = '';
    while (l1 || l2) {
        a1 += l1 !==null ? l1.val : 0
        a2 += l2 !==null ? l2.val : 0
        l1 = l1.next
        l2 = l2.next
    }
    a1 = a1.split('').reverse().join('') - 0
    a2 = a2.split('').reverse().join('') - 0
    let sum = ((a1 + a2) + '').split('').reverse()
    const list = new ListNode
    for (let i = 0; i < sum.length; i++) {
        while(!list){
            list.next = new ListNode(sum[i],null)
        }
        console.log(list)
    }
    // while (cur < sum.length) {
    //     const Node = new ListNode(sum[cur])
    //     list.next = Node
    //     cur++
    // }
    console.log(a1, a2, sum, list)
};
addTwoNumbers(l1, l2)