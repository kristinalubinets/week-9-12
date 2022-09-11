//2. Add Two Numbers Linked List

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
 var addTwoNumbers = function(l1, l2) {
    
    let carry = 0;
    
    let List = new ListNode(-1);
    let head = List;
    
    while(l1 || l2 ) {
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;
        
        let sum = val1 + val2 + carry;
        
        carry = Math.floor(sum/10);
        
        if(sum > 9) {
            carry = 1;
            sum -= 10; 
        } 
        
        head.next = new ListNode(sum);
        head = head.next;
        
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;       
    }
    
    if(carry > 0) head.next = new ListNode(carry);
    return List.next;
};

/******************************************************************************* slower ->>> */
var addTwoNumbers = function(l1, l2) {
    
    let carry = 0;
    let sum = 0;
    
    let List = new ListNode();
    let head = List;
    
    while(l1 || l2 || sum > 0) {
        if(l1) {
            sum += l1.val;
            l1 =l1.next;
        }
        if(l2) {
            sum += l2.val;
            l2 =l2.next;
        }    
        if(sum > 9){
            carry = 1;
            sum -= 10;
        }
        
        head.next = new ListNode(sum);
        head = head.next;
        
        sum = carry;
        carry = 0
    }
    
    return List.next;
};