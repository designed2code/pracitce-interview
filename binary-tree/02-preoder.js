class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// preorder => root => left => right

function preorder(root) {
  let res = [];
  const dfs = (node) => {
    if (!node) return;
    res.push(node.val);
    dfs(node.left);
    dfs(node.right);
  };
  dfs(root);
  return res;
}
