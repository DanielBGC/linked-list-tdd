import LinkedList from './SinglyLinkedList/LinkedList';

//# Singly Linked List
console.log('\n#### SINGLY LINKED LIST ####');
const ll = LinkedList.createListFromArray([1, 2, 3, 4]);
ll.print();

console.log('\nInserting 5 at index 2');
ll.insertAtIndex(2, 5)
ll.print();

console.log('\nRemoving at index 3');
ll.removeAtIndex(3);
ll.print();

console.log('\nRemoving the head');
ll.removeHead();
ll.print();