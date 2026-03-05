document.addEventListener("DOMContentLoaded", function() {
    const arrayDisplay = document.getElementById("array-display");
    const sortedArrayDisplay = document.getElementById("sorted-array");
    const generateButton = document.getElementById("generate-btn");
    const sortButton = document.getElementById("sort-btn");

    function generateRandomArray() {
        const array = [];
        const size = Math.floor(Math.random() * 5) + 5;
        for (let i = 0; i < size; i++) {
            array.push(Math.floor(Math.random() * 100) + 1);
        }
        return array;
    }

    function displayArray(array) {
        arrayDisplay.textContent = JSON.stringify(array);
        sortedArrayDisplay.textContent = JSON.stringify(array);
    }

    function sortArray() {
        const array = JSON.parse(arrayDisplay.textContent);
        const sortedArray = mergeSort(array);
        sortedArrayDisplay.textContent = JSON.stringify(sortedArray);
    }

    function mergeSort(array) {
        if (array.length <= 1) {
            return _______;
        }

        const middle = Math.floor(array.length / 2);
        const left = array.slice(0, middle);
        const right = array.slice(middle);

        return merge(mergeSort(left), _______(right));
    }

    function merge(left, right) {
        const merged = [];
        let leftIndex = 0;
        let rightIndex = 0;

        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] <= right[rightIndex]) {
                merged.push(left[leftIndex]);
                leftIndex++;
            } else {
                merged.push(right[_______]);
                rightIndex++;
            }
        }

        return merged.concat(left.slice(leftIndex)).concat(right.slice(_______));
    }

    generateButton.addEventListener("click", function() {
        const newArray = generateRandomArray();
        displayArray(newArray);
    });

    sortButton.addEventListener("click", sortArray);

    const initialArray = generateRandomArray();
    displayArray(initialArray);
});
