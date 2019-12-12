function Node(data, next) {
  this.data = data;
  this.next = next;
}
function mergeLists(link1, link2) {
  let L3 = new Node(null, null);
  let prev = L3;

  while(link1 !== null && link2 !== null) {
    if(L1.data <= link2.data) {
      prev.next = L1;
      link1 = link1.next;
    } else {
      prev.next = link2;
      link2 = link2.next;
    }
    prev = prev.next;
  }
  if(link1 === null) { prev.next = link2; }
  if(link2 === null) { prev.next = link1; }
  return L3.next;
}

let node3 = new Node(10, null);
let node2 = new Node(3, node3);
let node1 = new Node(1, node2);
let link1 = node1;

let node6 = new Node(9, null);
let node5 = new Node(4, node6);
let node4 = new Node(5, node5);
let link2 = node4;

module.exports = mergeLists(link1, link2); 


