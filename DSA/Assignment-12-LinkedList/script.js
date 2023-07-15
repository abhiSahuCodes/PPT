// Q1.

class NodeFirst {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function deleteMiddleNode(head) {
    if (head === null || head.next === null) {
        return null; 
    }

    let slow = head;
    let fast = head;
    let prev = null;

    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        prev = slow;
        slow = slow.next;
    }
    prev.next = slow.next;

    return head;
}

function printLinkedListOne(head) {
    let current = head;
    let elements = [];
    while (current !== null) {
        elements.push(current.data);
        current = current.next;
    }
    return elements.join(" -> ");
}

// Testing
let head1 = new NodeFirst(1);
head1.next = new NodeFirst(2);
head1.next.next = new NodeFirst(3);
head1.next.next.next = new NodeFirst(4);
head1.next.next.next.next = new NodeFirst(5);

let result1 = deleteMiddleNode(head1);
console.log(printLinkedListOne(result1)); 

// ===============================================================================

// Q2.

class NodeSecond {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function hasLoop(head) {
    let tortoise = head;
    let hare = head;

    while (hare !== null && hare.next !== null) {
        tortoise = tortoise.next;
        hare = hare.next.next;

        if (tortoise === hare) {
            return true;
        }
    }

    return false; 
}

// Testing
let head2 = new NodeSecond(1);
head2.next = new NodeSecond(3);
head2.next.next = new NodeSecond(4);
head2.next.next.next = head2.next;

let result2 = hasLoop(head2);
console.log(result2);

// ===============================================================================

// Q4.

class NodeFour {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function isPalindrome(head) {
    let arr = [];
    let current = head;

    while (current !== null) {
        arr.push(current.data);
        current = current.next;
    }

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (arr[left] !== arr[right]) {
            return false; 
        }
        left++;
        right--;
    }

    return true; 
}

// Testing
let head4 = new NodeFour('R');
head4.next = new NodeFour('A');
head4.next.next = new NodeFour('D');
head4.next.next.next = new NodeFour('A');
head4.next.next.next.next = new NodeFour('R');

let result4 = isPalindrome(head4);
console.log(result4); 

// ===============================================================================

// Q6.

class NodeSix {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function retainMDeleteN(head, M, N) {
    if (M <= 0 || N <= 0) {
        return head; 
    }

    let current = head;
    let prev = null;

    while (current !== null) {
        for (let i = 0; i < M && current !== null; i++) {
            prev = current;
            current = current.next;
        }

        for (let i = 0; i < N && current !== null; i++) {
            current = current.next;
        }

        prev.next = current;
    }

    return head;
}

function printLinkedListSix(head) {
    let current = head;
    let elements = [];
    while (current !== null) {
        elements.push(current.data);
        current = current.next;
    }
    return elements.join(" -> ");
}

let head6 = new NodeSix(1);
head6.next = new NodeSix(2);
head6.next.next = new NodeSix(3);
head6.next.next.next = new NodeSix(4);
head6.next.next.next.next = new NodeSix(5);
head6.next.next.next.next.next = new NodeSix(6);
head6.next.next.next.next.next.next = new NodeSix(7);
head6.next.next.next.next.next.next.next = new NodeSix(8);

let result6 = retainMDeleteN(head6, 2, 2);
console.log(printLinkedListSix(result6)); 


