class LinkedListNode {
  value: number;
  next: LinkedListNode | null;

  constructor(value: number, next: LinkedListNode) {
    this.value = value;
    this.next = next;
  }
};

export default LinkedListNode;