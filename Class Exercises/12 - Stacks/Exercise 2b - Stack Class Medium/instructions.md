# Exercise 2b — Stack Class (Medium)

Goal: Fill in the blanks in `script.js` to handle creating nodes, updating `top`, and maintaining `size`.

What to edit:
- `script.js` — several `___________` blanks.

Hints:
- When pushing, create a `new Node(value)`, point its `next` to the current `top`, then update `top` and `size`.
- When popping, return `-1` if empty, otherwise get the top value, set `top` to `top.next`, and decrement `size`.
