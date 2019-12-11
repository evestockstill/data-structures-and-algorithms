// Specifications
// Read all of these instructions carefully.Name things exactly as described.
// Do all your work in a public repository called data - structures - and - algorithms, with a well - formatted, detailed top - level README.md.
// Create a new branch in your repo called linked - list.
// Your top - level readme should contain a “Table of Contents” navigation to all of your challenges and implementations so far. (Don’t forget to update it!)
// Place this implementation in your Data - Structures folder within your repository.
// On your branch, create…
// C#: a new console.NET core project named LinkedList.cs.
//   JavaScript: a folder named linkedList which contains a file called linked - list.js
// Python: a folder named linked_list which contains a file called linked_list.py
// Java: a package named linkedList which contains a file called LinkedList.java
// Include any language - specific configuration files required for this challenge to become an individual component, module, library, etc.
//   NOTE: You can find an example of this configuration for your course in your class lecture repository.
//     Features
// Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
// Within your LinkedList class, include a head property.Upon instantiation, an empty Linked List should be created.

// Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.

// Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
// Define a method called toString(or __str__ in Python) which takes in no arguments and returns a string representing all the values in the Linked List.
// Any exceptions or errors that come from your code should be semantic, capturable errors.For example, rather than a default error thrown by your language, your code should raise /throw a custom, semantic error that describes what went wrong in calling the methods you wrote for this lab.
// Be sure to follow your language / frameworks standard naming conventions(e.g.C# uses PascalCasing for all method and class names).
// Structure and Testing
// Utilize the Single - responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge.You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.

// Write tests to prove the following functionality:

// Can successfully instantiate an empty linked list
// Can properly insert into the linked list
// The head property will properly point to the first node in the linked list
// Can properly insert multiple nodes into the linked list
// Will return true when finding a value within the linked list that exists
// Will return false when searching for a value in the linked list that does not exist
// Can properly return a collection of all the values that exist in the linked list
// Ensure your tests are passing before you submit your solution.


class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head;
  }
  insert(val) {
    const node = new Node(val, this.head);
    this.head = node;
  }
  includes(val) {
    let searchNode = this.head;
    while(searchNode); {
      if(val === searchNode.value) return true;
      searchNode = searchNode.next;
    }
    return false;
  } 
  toString() {
    if(!this.head) return '';
    const nodes = {};
    let node = this.head;
    while(node) {
      nodes.push(node.value);
      node = node.next;
    }
    return nodes.join(' ->');
  }

  append(value) {
    const node = new Node(value);
    let current = this.head;
    while(current.next !== null) {
      current = current.next;
    }
    current.next = node;
  }
  insertBefore(value, newValue) {
    const node = new Node(newValue);
    let current = this.head;
    while(current.next.value !== value) {
      current = current.next;
    }
    node.next = current.next;
    current.next = node;
  }
  insertAfter(value, newValue) {
    const node = new Node(newValue);
    let current = this.head;
    while(current.value !== value) {
      current = current.next;
    }
    node.next = current.next;
    current.next = node;
  }
}

module.exports = { LinkedList, Node };