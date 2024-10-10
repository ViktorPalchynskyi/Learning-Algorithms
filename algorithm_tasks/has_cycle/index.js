class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const hasCycle = (head) => {
    if (head === null) return false;

    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        console.log('slow', slow.value);
        console.log('fast', fast.value);

        if (slow === fast) return true;
    }

    return false;
}

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = head.next;  

console.log(hasCycle(head));  