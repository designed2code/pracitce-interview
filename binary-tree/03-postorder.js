class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// postorder => left => right => root

function postorder(root) {
  let res = [];
  const dfs = (node) => {
    if (!node) return;
    dfs(node.left);
    dfs(node.right);
    res.push(node.val);
  };
  dfs(root);
  return res;
}
