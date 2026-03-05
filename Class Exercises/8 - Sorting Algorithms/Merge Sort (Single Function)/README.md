# Merge Sort (Single Function Version)

This set teaches merge sort where **all divide and merge logic is inside one function**: `mergeSort`.

## Key rule

- Students call `mergeSort(array)`.
- Any recursive call is also only `mergeSort(...)`.
- There is **no separate `merge()` helper function**.

## How the single-function version works

1. Base case: if the array length is 0 or 1, return it.
2. Split the array into `left` and `right` halves.
3. Recursively sort each half using `mergeSort(left)` and `mergeSort(right)`.
4. Merge inside the same function using pointers/indexes.
5. Return the merged array.

## Complexity

- Time complexity: **O(n log n)**
- Space complexity: **O(n)**

## Stages

- Merge Sort Single Function Example
- Merge Sort Single Function Example Easy
- Merge Sort Single Function Example Medium
- Merge Sort Single Function Example Hard
- Merge Sort Single Function Assess
