// =============================
// Stack implemented with an array (manual push/pop)
// =============================

// --- Stack setup ---
const STACK_LIMIT = 10; // Maximum stack size
const stack = [];
let top = -1; // Index of the top element

// --- Push operation ---
function push(value) {
  // TODO: Write the push algorithm for the stack from scratch
}

// --- Pop operation ---
function pop() {
  // TODO: Write the pop algorithm for the stack from scratch
}

// --- Peek operation ---
function peek() {
  if (top >= 0) {
    return stack[top];
  } else {
    return -1;
  }
}

// --- Clear operation ---
function clear() {
  var i = 0;
  while (i <= top) {
    stack[i] = undefined;
    i = i + 1;
  }
  top = -1;
}

// --- Display stack contents ---
function updateOutput() {
  var contents = [];
  var i = 0;
  while (i <= top) {
    contents.push(stack[i]);
    i = i + 1;
  }
  var out = "Stack contents (top at right): [" + contents.join(", ") + "]\n";
  document.getElementById("output").innerText = out;
}

// --- Push button handler ---
document.getElementById("btnPush").onclick = function() {
  var value = document.getElementById("value").value;
  if (value === "") {
    return;
  }
  var result = push(value);
  updateOutput();
  if (result === -1) {
    document.getElementById("output").innerText += "\nStack is full. Cannot push.";
  }
};

// --- Pop button handler ---
document.getElementById("btnPop").onclick = function() {
  var popped = pop();
  updateOutput();
  if (popped === -1) {
    document.getElementById("output").innerText += "\nStack is empty. Cannot pop.";
  } else {
    document.getElementById("output").innerText += "\nPopped: " + popped;
  }
};

// --- Peek button handler ---
document.getElementById("btnPeek").onclick = function() {
  var topValue = peek();
  updateOutput();
  if (topValue === -1) {
    document.getElementById("output").innerText += "\nStack is empty. Nothing to peek.";
  } else {
    document.getElementById("output").innerText += "\nTop: " + topValue;
  }
};

// --- Clear button handler ---
document.getElementById("btnClear").onclick = function() {
  clear();
  updateOutput();
};

updateOutput();
