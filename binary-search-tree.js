class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if(this.root == null) {
      const newNode = new Node(val); 
      this.root = newNode; 
      return;
    }

    let current = this.root;
    let prev = null; 

    while(current != null) {
      if(val < current.val) {
        prev = current; 
        current = current.left; 
      }
      else {
        prev = current;
        current = current.right;
      }
    }

    if(val < prev.val) {
      let newNode = new Node(val);
      prev.left = newNode; 
    }
    else{
      let newNode = new Node(val);
      prev.right = newNode; 
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {

    function insertHelper(pointer, val) {
      if(pointer == null) {
        let newNode = new Node(val); 
        pointer = newNode; 
        return pointer; 
      }

      if(val < pointer.val) {
        pointer.left = insertHelper(pointer.left, val);
      }
      else{
        pointer.right = insertHelper(pointer.right, val); 
      }

      return pointer; 
    }

    this.root = insertHelper(this.root, val);

  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if(this.root == null) {
      return undefined;
    }

    let current = this.root;
   
    while(current != null && current.val != val) {
      if(val < current.val) {
        current = current.left; 
      }
      else {
        current = current.right;
      }
    }

    if(current == null) {
      return undefined;
    }
    
    return current;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if(this.root == null) {
      return undefined;
    }

    function insertHelper(pointer, val) {
      if(pointer == null) {
        return undefined;
      }

      if(pointer.val == val) {
       return pointer
      }

      if(val < pointer.val) {
         return insertHelper(pointer.left, val);
      }
      else{
         return insertHelper(pointer.right, val); 
      }

    }

    const pointer = insertHelper(this.root, val);
    return pointer; 
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let arr = [];
    
    function preOrder(node) {
      if(node == null){
        return;
      }

      arr.push(node.val); 
      preOrder(node.left);
      preOrder(node.right);
    }

    preOrder(this.root); 
    return arr; 
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let arr = [];
    
    function inOrder(node) {
      if(node == null){
        return;
      }
 
      inOrder(node.left);
      arr.push(node.val); 
      inOrder(node.right);
    }

    inOrder(this.root); 
    return arr; 
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let arr = [];
    
    function postOrder(node) {
      if(node == null){
        return;
      }
 
      postOrder(node.left);
      postOrder(node.right);
      arr.push(node.val);
    }

    postOrder(this.root); 
    return arr; 
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let pointer = this.root; 
    let out = [];
    let queue = []; 

    queue.push(pointer); 

    while(queue.length != 0) {
      pointer = queue.shift(); 
      out.push(pointer.val); 

      if(pointer.left != null) {
        queue.push(pointer.left);
      }

      if(pointer.right != null) {
        queue.push(pointer.right);
      }
    }

    return out; 
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
