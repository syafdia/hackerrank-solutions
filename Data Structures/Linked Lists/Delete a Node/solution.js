const SinglyLinkedListNode = class {
  constructor(nodeData) {
      this.data = nodeData;
      this.next = null;
  }
};

const SinglyLinkedList = class {
  constructor() {
      this.head = null;
      this.tail = null;
  }

  insertNode(nodeData) {
      const node = new SinglyLinkedListNode(nodeData);

      if (this.head == null) {
          this.head = node;
      } else {
          this.tail.next = node;
      }

      this.tail = node;
  }
};

function printSinglyLinkedList(node, sep, ws) {
  while (node != null) {
      ws.write(String(node.data));

      node = node.next;

      if (node != null) {
          ws.write(sep);
      }
  }
}

function deleteNode(node, position) {
  let i = 0;
  const llist = new SinglyLinkedList();
  while (node != null) {
    if (i !== position) {
      llist.insertNode(node.data);
    }

    node = node.next
    i++;
  }

  return llist.head;
}

(function () {
  const llist = new SinglyLinkedList();
  llist.insertNode(20);
  llist.insertNode(6);
  llist.insertNode(2);
  llist.insertNode(19);
  llist.insertNode(7);
  llist.insertNode(4);
  llist.insertNode(15);
  llist.insertNode(9);

  console.log(deleteNode(llist.head, 3)); // 20 6 2 7 4 15 9
})();