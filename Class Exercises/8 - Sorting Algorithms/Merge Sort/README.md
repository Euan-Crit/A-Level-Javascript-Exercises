# Merge Sort

Merge sort is a **divide and conquer** sorting algorithm.

## How it works

1. If the array has 0 or 1 item, it is already sorted.
2. Split the array into two halves.
3. Recursively apply merge sort to each half.
4. Merge the two sorted halves into one sorted array.

The key idea is that merging two sorted arrays is fast and simple.

## Merge step

During the merge step:

- Compare the first unmerged item in each half.
- Move the smaller item into the output array.
- Repeat until one half is empty.
- Append all remaining items from the other half.

## Why teach merge sort?

- It introduces recursion clearly.
- It demonstrates divide-and-conquer design.
- It has reliable performance on large datasets.

## Complexity

- Time complexity: **O(n log n)** in best, average, and worst cases.
- Space complexity: **O(n)** extra space (for merged arrays).

## Stages in this section

- Merge Sort Example
- Merge Sort Example Easy
- Merge Sort Example Medium
- Merge Sort Example Hard
- Merge Sort Assess

Only the **Example** is fully implemented at this stage. The other stages are scaffolded and ready for fill-in-the-blank versions.
