/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if(this.root === null) return 0;
    let count = 1;
    const queue = [this.root];
    while(queue.length){
      const current = queue.shift();
      if(!current.left || !current.right) return count;
      queue.push(current.left);
      queue.push(current.right);
      count++;
    }
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if(this.root === null) return 0;
    let leftCount = 1;
    let rightCount = 1;
    const stack = [this.root];
    while(stack.length){
      const current = stack.pop();
      if(current.left){ stack.push(current.left); leftCount++ }
      if(current.right){ stack.push(current.right); rightCount++ }
    }
    return leftCount || rightCount;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let val = 0;
    const stack = this.root;
    function getMax(node){
      if(node === null) return 0;

      // recursively get/compare in-depth values of left / right branches
      let left = getMax(node.left);
      let right = getMax(node.right);

      // get max val between node value & children values 
      // and node value
      let nodeMax = Math.max(
        (Math.max(left, right) + node.val), node.val)
      
      // get max val between ancestor root value & children values
      // and node values & children values 
      let rootMax = Math.max(
        (node.val + left + right), nodeMax);

      // compare root val & global val for
      // returning value
      if(rootMax > val) val = rootMax;

      return nodeMax;
    }
    getMax(stack);
    return val;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    let val = null;
    const stack = this.root;
    function compareToBound(node){
      if(node === null) return null;
      let arr = [];

      // recursively get/compare in-depth values of left / right branches
      let left = compareToBound(node.left);
      let right = compareToBound(node.right);
      
      // compare node & children values to find min value closest to lowerbound
      for(let num of [node.val, left, right])
        if(num > lowerBound) arr.push(num);

      let min = arr.length ? Math.min(...arr) : null;

      // compare min val & global val for
      // returning value
      if(!val || min < val) val = min;
      return min;
    }
    compareToBound(stack);
    return val;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
    
  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
