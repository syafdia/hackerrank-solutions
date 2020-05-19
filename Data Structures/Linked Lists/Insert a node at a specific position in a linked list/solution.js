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

function insertNodeAtPosition(node, data, position) {
  let i = 0;
  const llist = new SinglyLinkedList();
  while (node != null) {
    if (i === position) {
      llist.insertNode(data);
    }

    llist.insertNode(node.data);
    node = node.next
    i++;
  }

  return llist.head;
}

(function () {
  const llist = new SinglyLinkedList();
  llist.insertNode(16);
  llist.insertNode(13);
  llist.insertNode(7);
  console.log(insertNodeAtPosition(llist.head, 1, 2)); // 16 13 1 7
})();