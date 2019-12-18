function PsuedoQueue() {
  this.data = [];
}
PsuedoQueue.prototype.add = function (record) {
  this.data.unshift(record);
}PsuedoQueue.prototype.remove = function () {
  this.data.pop();
}
PsuedoQueue.prototype.first = function () {
  return this.data[0];
}PsuedoQueue.prototype.last = function () {
  return this.data[this.data.length - 1];
}PsuedoQueue.prototype.size = function () {
  return this.data.length;
}
