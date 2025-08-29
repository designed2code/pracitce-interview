class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function sameBinaryTree(p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;

  if (p.val == q.val) {
    let left = sameBinaryTree(p.left, q.left);
    let right = sameBinaryTree(p.right, q.right);
    return left && right;
  } else {
    return false;
  }
}
