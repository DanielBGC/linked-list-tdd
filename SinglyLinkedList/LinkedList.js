const LinkedListNode = require('./LinkedListNode');

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  };

  insertAtHead(data) {
    const newNode = new LinkedListNode(data, this.head);
    this.head = newNode;
    this.length++;
  };

  getByIndex(index) {
    if (index < 0 || index >= this.length) {
      return null
    };

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  };

  removeHead() {
    this.head = this.head.next;
    this.length--;
  }

  insertAtIndex(index, value) {
    if (index === 0) {
      return this.insertAtHead(value);
    }

    const prev = this.getByIndex(index - 1);
    if (prev == null) return null;

    prev.next = new LinkedListNode(value, prev.next);
    this.length++;
  };

  removeAtIndex(index) {
    if (index === 0) {
      return this.removeHead();
    }

    const prev = this.getByIndex(index - 1);
    if (prev == null) {
      return null
    }

    prev.next = prev.next.next;
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

  static createListFromArray = function(values) {
    const ll = new LinkedList();
    // insert into the list in reverse order
    for (let i = values.length - 1; i >= 0; i--) {
      ll.insertAtHead(values[i]);
    }
    return ll;
  }
}

module.exports = LinkedList;