class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

const removeElement = (head, elem) => {
    if (head === null || elem === null) return head;

    if (head === elem) return head.next;

    let current = head;

    while (current !== null && current.next !== null) {
        if (current.next === elem) {
            current.next = current.next.next;

            return head;
        }

        current = current.next;
    }

    return head;
};

console.log(removeElement(head, head.next));
