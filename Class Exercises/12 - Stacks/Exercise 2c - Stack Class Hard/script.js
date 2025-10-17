// =============================
// Stack implemented with a class and nodes
// =============================

// --- Node class ---
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// --- Stack class setup ---
class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
    this.LIMIT = 10;
  }

  // --- Push operation ---
  push(value) {
    // TODO: Fill in all the blanks to write the push algorithm
    if (___________) {
      return ___________;
    } else {
      var newNode = new Node(___________);
      newNode.next = ___________;
      this.top = ___________;
      this.size = ___________;
      return ___________;
    }
  }

  // --- Pop operation ---
  pop() {
    // TODO: Fill in all the blanks to write the pop algorithm
    if (___________) {
      return ___________;
    } else {
      var popped = ___________;
      this.top = ___________;
      this.size = ___________;
      return ___________;
    }
  }

  // --- Peek operation ---
  peek() {
    if (this.size > 0) {
      return this.top.value;
    } else {
      return -1;
    }
  }

  // --- Clear operation ---
  clear() {
    while (this.size > 0) {
      this.pop();
    }
    this.top = null;
    this.size = 0;
  }

  // --- Convert stack to array for display ---
  toArray() {
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

// --- Display stack contents ---
function updateOutput() {
  var contents = stack.toArray();
  var out = "Stack contents (top at left): [" + contents.join(", ") + "]\n";
  document.getElementById("output").innerText = out;
}

// --- Push button handler ---
document.getElementById("btnPush").onclick = function() {
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

// --- Pop button handler ---
document.getElementById("btnPop").onclick = function() {
  var popped = stack.pop();
  updateOutput();
  if (popped === -1) {
    document.getElementById("output").innerText += "\nStack is empty. Cannot pop.";
  } else {
    document.getElementById("output").innerText += "\nPopped: " + popped;
  }
};

// --- Peek button handler ---
document.getElementById("btnPeek").onclick = function() {
  var topValue = stack.peek();
  updateOutput();
  if (topValue === -1) {
    document.getElementById("output").innerText += "\nStack is empty. Nothing to peek.";
  } else {
    document.getElementById("output").innerText += "\nTop: " + topValue;
  }
};

// --- Clear button handler ---
document.getElementById("btnClear").onclick = function() {
  stack.clear();
  updateOutput();
};

updateOutput();
