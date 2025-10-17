// =============================
// Stack implemented with a class and nodes
// =============================
class Node {
// --- Node class ---
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
// --- Stack class setup ---
  constructor() {
    this.top = null;
    this.size = 0;
    this.LIMIT = 10;
  }

  push(value) {
  // --- Push operation ---
    if (this.size < this.LIMIT) {
      var newNode = new Node(value);
      newNode.next = this.top;
      this.top = newNode;
      this.size = this.size + 1;
      return this.size;
    } else {
      // Stack is full
      return -1;
    }
  }

  pop() {
  // --- Pop operation ---
    if (this.size === 0) {
      // Stack is empty
      return -1;
    } else {
      var popped = this.top.value;
      this.top = this.top.next;
      this.size = this.size - 1;
      return popped;
    }
  }

  peek() {
  // --- Peek operation ---
    if (this.size > 0) {
      return this.top.value;
    } else {
      return -1;
    }
  }

  clear() {
  // --- Clear operation ---
    while (this.size > 0) {
      this.pop();
    }
    this.top = null;
    this.size = 0;
  }

  toArray() {
  // --- Convert stack to array for display ---
    var arr = [];
    var current = this.top;
    while (current !== null) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }
}

const stack = new Stack();

function updateOutput() {
// --- Display stack contents ---

  var contents = stack.toArray();
  var out = "Stack contents (top at left): [" + contents.join(", ") + "]\n";
  document.getElementById("output").innerText = out;
}

document.getElementById("btnPush").onclick = function() {
// --- Push button handler ---
  var value = document.getElementById("value").value;
  if (value === "") {
    return;
  }
  var result = stack.push(value);
  updateOutput();
  if (result === -1) {
    document.getElementById("output").innerText += "\nStack is full. Cannot push.";
  }
};

document.getElementById("btnPop").onclick = function() {
// --- Pop button handler ---
  var popped = stack.pop();
  updateOutput();
  if (popped === -1) {
    document.getElementById("output").innerText += "\nStack is empty. Cannot pop.";
  } else {
    document.getElementById("output").innerText += "\nPopped: " + popped;
  }
};

document.getElementById("btnPeek").onclick = function() {
// --- Peek button handler ---
  var topValue = stack.peek();
  updateOutput();
  if (topValue === -1) {
    document.getElementById("output").innerText += "\nStack is empty. Nothing to peek.";
  } else {
    document.getElementById("output").innerText += "\nTop: " + topValue;
  }
};

document.getElementById("btnClear").onclick = function() {
// --- Clear button handler ---
  stack.clear();
  updateOutput();
};

updateOutput();
