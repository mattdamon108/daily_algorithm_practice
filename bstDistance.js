/*
 * BST (Binary Search Tree)
 * Most common used methods here
 * insert, find, inOrder, remove, distanceFromRoot, distanceBetween2
 *
 * Beauty of recursion
 */
function bstDistance(num, values, node1, node2) {
  if (!values.includes(node1) || !values.includes(node2)) {
    return -1;
  }

  const bst = new BST();
  values.forEach((item) => bst.insert(item));

  const root = bst.getRoot();
  const distance = bst.distanceBetween2(root, node1, node2);

  return distance;
}

class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  show() {
    return this.data;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  getRoot() {
    return this.root;
  }

  insert(data) {
    let n = new Node(data, null, null);

    if (this.root === null) {
      this.root = n;
    } else {
      let current = this.root;
      let parent;
      while (true) {
        parent = current;
        if (data < current.data) {
          current = current.left;
          if (current === null) {
            parent.left = n;
            break;
          }
        } else {
          current = current.right;
          if (current === null) {
            parent.right = n;
            break;
          }
        }
      }
    }
  }

  inOrder(node) {
    if (!(node === null)) {
      this.inOrder(node.left);
      console.log(node.show());
      this.inOrder(node.right);
    }
  }

  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }

  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  removeNode(node, data) {
    if (node === null) {
      return null;
    }
    if (data === node.data) {
      if (node.left === null && node.right === null) {
        return null;
      }

      if (node.left === null) {
        return node.right;
      }

      if (node.right === null) {
        return node.left;
      }

      let tempNode = this.getSmallest(node.right);
      node.data = tempNode.data;
      node.right = this.removeNode(node.right, tempNode.data);
      return node;
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else {
      node.right = this.removeNode(node.right, data);
      return node;
    }
  }

  getSmallest(node) {
    let current = node;
    while (!(current.left == null)) {
      current = current.left;
    }
    return current;
  }

  distanceFromRoot(root, x) {
    if (root.data === x) {
      return 0;
    } else if (root.data > x) {
      return 1 + this.distanceFromRoot(root.left, x);
    } else {
      return 1 + this.distanceFromRoot(root.right, x);
    }
  }

  distanceBetween2(root, a, b) {
    if (root === null) {
      return 0;
    }

    if (root.data > a && root.data > b) {
      return this.distanceBetween2(root.left, a, b);
    }

    if (root.data < a && root.data < b) {
      return distanceBetween2(root.right, a, b);
    }

    if (root.data >= a && root.data <= b) {
      return this.distanceFromRoot(root, a) + this.distanceFromRoot(root, b);
    }
  }
}

module.exports = bstDistance;
