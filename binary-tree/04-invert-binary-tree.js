class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
// implement post order and the swap left and right pointer
function invertTree(root) {
  const dfs = (node) => {
    if (!node) return;
    dfs(node.left);
    dfs(node.right);
    let temp = node.left;
    node.left = node.right;
    node.right = temp;
  };
  dfs(root);
  return root;
}
