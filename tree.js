/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if(this.root === null) return 0;
    let total = 0;
    const stack = [this.root];
    while(stack.length) {
      let current = stack.shift();
      if(!isNaN(current.val)) total+=Number(current.val)
      if(current.children.length)
        for (let child of current.children) stack.push(child);
    }
    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if(this.root === null) return 0;
    let count = 0;
    const stack = [this.root];
    while(stack.length) {
      let current = stack.shift();
      if(!isNaN(current.val) && current.val % 2 === 0) count++
      if(current.children.length)
        for (let child of current.children) stack.push(child);
    }
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if(this.root === null) return 0;
    let count = 0;
    const stack = [this.root];
    while(stack.length) {
      let current = stack.shift();
      if(!isNaN(current.val) && current.val > lowerBound) count++
      if(current.children.length)
        for (let child of current.children) stack.push(child);
    }
    return count;
  }
}

module.exports = { Tree, TreeNode };
