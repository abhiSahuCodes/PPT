// Q5.

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function deleteLastOccurrence(head, key) {
  let lastOccurrence = null;
  let lastOccurrencePrev = null;
  let current = head;
  let prev = null;

  while (current !== null) {
    if (current.val === key) {
      lastOccurrence = current;
      lastOccurrencePrev = prev;
    }
    prev = current;
    current = current.next;
  }

  if (lastOccurrence !== null) {
    if (lastOccurrencePrev === null) {
      head = head.next;
    } else {
      lastOccurrencePrev.next = lastOccurrence.next;
    }
  }

  return head;
}

function printLinkedList(head) {
  let current = head;
  const values = [];
  while (current !== null) {
    values.push(current.val);
    current = current.next;
  }
  return values.join("->");
}

// Testing
const list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(5, new ListNode(2, new ListNode(10))))));
const key = 2;
console.log("Input: list =", printLinkedList(list));
console.log("key =", key);
console.log("Output: Updated list =", printLinkedList(deleteLastOccurrence(list, key)));

// =========================================================================================

// Q6.

class ListNodeSixth {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeSortedLists(a, b) {
  let dummy = new ListNode();
  let current = dummy;

  while (a !== null && b !== null) {
    if (a.val <= b.val) {
      current.next = a;
      a = a.next;
    } else {
      current.next = b;
      b = b.next;
    }
    current = current.next;
  }

  if (a !== null) {
    current.next = a;
  }

  if (b !== null) {
    current.next = b;
  }

  return dummy.next;
}

function printLinkedListSixth(head) {
  let current = head;
  const values = [];
  while (current !== null) {
    values.push(current.val);
    current = current.next;
  }
  return values.join("->");
}

// Testing
const list1 = new ListNodeSixth(5, new ListNodeSixth(10, new ListNodeSixth(15)));
const list2 = new ListNodeSixth(2, new ListNodeSixth(3, new ListNodeSixth(20)));
console.log("Input: a =", printLinkedListSixth(list1));
console.log("       b =", printLinkedListSixth(list2));
console.log("Output: Merged list =", printLinkedListSixth(mergeSortedLists(list1, list2)));

// ==============================================================================================

// Q7.

class DoublyListNode {
  constructor(val, prev = null, next = null) {
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}

function reverseDoublyLinkedList(head) {
  let current = head;
  let prev = null;

  while (current !== null) {
    const temp = current.next;
    current.next = prev;
    current.prev = temp;

    prev = current;
    current = temp;
  }

  return prev;
}

function printDoublyLinkedList(head) {
  let current = head;
  const values = [];
  while (current !== null) {
    values.push(current.val);
    current = current.next;
  }
  return values.join(" <-> ");
}

// Testing 
const lists = new DoublyListNode(10, null, new DoublyListNode(8, null, new DoublyListNode(4, null, new DoublyListNode(2))));
console.log("Original Linked list:", printDoublyLinkedList(lists));
const reversedList = reverseDoublyLinkedList(lists);
console.log("Reversed Linked list:", printDoublyLinkedList(reversedList));


