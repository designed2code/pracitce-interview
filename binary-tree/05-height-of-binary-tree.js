class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function heightOfBinaryTree(root) {
  if (!root) return 0;
  let leftHeight = heightOfBinaryTree(root.left);
  let rightHeight = heightOfBinaryTree(root.right);
  return 1 + Math.max(leftHeight, rightHeight);
}
