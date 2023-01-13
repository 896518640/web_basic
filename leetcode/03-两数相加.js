/**
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
console.log(l1)
console.log(l2)
 var addTwoNumbers = function(l1, l2) {
    const toNum = (head) => {
        if(head.next !==null) {
            // console.log(toNum(head.next))
            const {base,num} = toNum(head.next)
            // console.log(toNum(head.next),base, num)
            return { num: head.val * base + num, base: base * 10 }
        } else {
            return { num: head.val,base: 10 }
        }
    }
    return toNum(l1).num + toNum(l2).num
};

const result = addTwoNumbers(l1, l2)
console.log(result)