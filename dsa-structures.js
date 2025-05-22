// Data Structures and Algorithms in JavaScript

// 1. Arrays
console.log("=== 1. Arrays ===");
const arrayExample = [1, 2, 3, 4, 5];
console.log("Basic array:", arrayExample);
console.log("Access element at index 2:", arrayExample[2]);
console.log("Array length:", arrayExample.length);

// Array operations
arrayExample.push(6); // Add to end
console.log("After push:", arrayExample);
arrayExample.pop(); // Remove from end
console.log("After pop:", arrayExample);
arrayExample.unshift(0); // Add to beginning
console.log("After unshift:", arrayExample);
arrayExample.shift(); // Remove from beginning
console.log("After shift:", arrayExample);

// 2. Linked Lists
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    print() {
        let current = this.head;
        const values = [];
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        return values;
    }
}

console.log("\n=== 2. Linked Lists ===");
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
console.log("Linked List:", linkedList.print());

// 3. Stacks
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) return "Underflow";
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

console.log("\n=== 3. Stacks ===");
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log("Stack peek:", stack.peek());
console.log("Stack pop:", stack.pop());
console.log("Stack after pop:", stack.peek());

// 4. Queues
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) return "Underflow";
        return this.items.shift();
    }

    front() {
        if (this.isEmpty()) return "No elements in Queue";
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

console.log("\n=== 4. Queues ===");
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log("Queue front:", queue.front());
console.log("Queue dequeue:", queue.dequeue());
console.log("Queue after dequeue:", queue.front());

// 5. Binary Search Tree
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (true) {
            if (value === current.value) return undefined;
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    contains(value) {
        if (!this.root) return false;
        let current = this.root;
        while (current) {
            if (value === current.value) return true;
            if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }
}

console.log("\n=== 5. Binary Search Tree ===");
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
console.log("BST contains 5:", bst.contains(5));
console.log("BST contains 7:", bst.contains(7));

// 6. Graph
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
}

console.log("\n=== 5. Graph ===");
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
console.log("Graph adjacency list:", graph.adjacencyList);

// 7. Hash Table
class HashTable {
    constructor(size = 10) {
        this.size = size;
        this.table = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i)) % this.size;
        }
        return hash;
    }

    set(key, value) {
        const index = this._hash(key);
        if (!this.table[index]) {
            this.table[index] = [];
        }
        this.table[index].push([key, value]);
    }

    get(key) {
        const index = this._hash(key);
        if (!this.table[index]) return undefined;
        for (let item of this.table[index]) {
            if (item[0] === key) return item[1];
        }
        return undefined;
    }
}

console.log("\n=== 6. Hash Table ===");
const hashTable = new HashTable();
hashTable.set('name', 'John');
hashTable.set('age', 30);
console.log("Hash Table get 'name':", hashTable.get('name'));
console.log("Hash Table get 'age':", hashTable.get('age'));

// 8. Min Heap
class MinHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftChildIndex(index) {
        return 2 * index + 1;
    }

    getRightChildIndex(index) {
        return 2 * index + 2;
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = this.getParentIndex(index);
            if (this.heap[parentIndex] <= this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    extractMin() {
        if (this.heap.length === 0) return null;
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return min;
    }

    heapifyDown() {
        let index = 0;
        while (this.getLeftChildIndex(index) < this.heap.length) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            const rightChildIndex = this.getRightChildIndex(index);
            if (rightChildIndex < this.heap.length && 
                this.heap[rightChildIndex] < this.heap[smallerChildIndex]) {
                smallerChildIndex = rightChildIndex;
            }
            if (this.heap[index] <= this.heap[smallerChildIndex]) break;
            [this.heap[index], this.heap[smallerChildIndex]] = 
                [this.heap[smallerChildIndex], this.heap[index]];
            index = smallerChildIndex;
        }
    }
}

console.log("\n=== 7. Min Heap ===");
const minHeap = new MinHeap();
minHeap.insert(5);
minHeap.insert(3);
minHeap.insert(8);
minHeap.insert(1);
console.log("Min Heap extract min:", minHeap.extractMin());
console.log("Min Heap extract min:", minHeap.extractMin()); 