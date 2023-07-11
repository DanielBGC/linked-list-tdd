import LinkedListNode from './LinkedListNode';

class LinkedList {
  head: LinkedListNode | null;
  length: number;

  constructor() {
    this.head = null;
    this.length = 0;
  };

  insertAtHead(data: number) {
    const newNode = new LinkedListNode(data, <LinkedListNode>this.head);
    this.head = newNode;
    this.length++;
  };

  getByIndex(index: number) {
    if (index < 0 || index >= this.length) {
      return null
    };

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current!.next;
    }
    return current;
  };

  removeHead() {
    this.head = this.head!.next;
    this.length--;
  }

  insertAtIndex(index: number, value: number) {
    if (index === 0) {
      return this.insertAtHead(value);
    }

    const prev = this.getByIndex(index - 1);
    if (prev == null) return null;

    prev.next = new LinkedListNode(value, prev.next!);
    this.length++;
  };

  removeAtIndex(index: number) {
    if (index === 0) {
      return this.removeHead();
    }

    const prev = this.getByIndex(index - 1);
    if (prev == null) {
      return null
    }

    prev.next = prev.next!.next;
    this.length--;
  };

  print() {
    let output = '[head] ';
    let current = this.head;
    while (current) {
      if(current == this.head) {
        output = `${output}${current.value} -> `;
      } else {
        output = `${output}${current.value} -> `;
      }
      current = current.next;
    }
    output = `${output}null`;
    console.log(output);
    return output;
  }

  static createListFromArray = function(values: Array<number>) {
    const ll = new LinkedList();
    // insert into the list in reverse order
    for (let i = values.length - 1; i >= 0; i--) {
      ll.insertAtHead(values[i]);
    }
    return ll;
  }
}

export default LinkedList;