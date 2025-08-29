class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function balancedBinaryTree(root) {
  if (!root) return true;
  let left = height(root.left);
  let right = height(root.right);
  if (Math.abs(right - left) > 1) return false;
  return balancedBinaryTree(root.left) && balancedBinaryTree(root.right);
}

function height(node) {
  if (!node) return 0;
  let left = height(node.left);
  let right = height(node.right);
  return 1 + Math.max(left, right);
}
