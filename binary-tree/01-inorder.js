class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
// inorder => left => root => right
function inorder(root) {
  let res = [];
  const dfs = (node) => {
    if (!node) return;

    dfs(node.left);
    res.push(node.val);
    dfs(node.right);
  };
  dfs(root);
  return res;
}
