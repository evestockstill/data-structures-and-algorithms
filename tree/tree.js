function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}
const root = new Node('A');
const n1 = new Node('B');
const n2 = new Node('C');
const n3 = new Node('D');
const n4 = new Node('E');

root.left = n1;
root.right = n2;
n1.left = n3;
n1.right = n4;
function pre_order(root, nodes) {
  nodes.push(root.data);
  if (root && root.left) {
    pre_order(root.left, nodes);
  }
  if (root && root.right) {
    pre_order(root.right, nodes);
  }
  return nodes;
}

pre_order(root, []);
function in_order(root, nodes) {
  if (root && root.left) {
    in_order(root.left, nodes);
  }
  nodes.push(root.data);
  if (root && root.right) {
    in_order(root.right, nodes);
  }
  return nodes;
}

in_order(root, []);
function post_order(root, nodes) {
  if(root && root.left) {
    post_order(root.left, nodes);
  }
  if(root && root.right) {
    post_order(root.right, nodes);
  }
  nodes.push(root.data);
  return nodes;
}

post_order(root, []);
