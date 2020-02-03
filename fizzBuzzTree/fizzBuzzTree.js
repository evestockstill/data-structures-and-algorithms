static fizzbuzztree(tree) {
    if (tree.head === null) {
        return tree;
    }
function _fizzbuzztree(node) {
  let val = node.data;

  if (node.left) _fizzbuzztree(node.left);
  if (node.right) _fizzbuzztree(node.right);

  if (val % 15 === 0) {
    node.data = 'fizzbuzz';
    return;
  }

  if (val % 5 === 0) {
    node.data = 'buzz';
    return;
  }

  if (val % 3 === 0) {
    node.data = 'fizz';
    return;
  }
}
_fizzbuzztree(tree.head);
return tree;
