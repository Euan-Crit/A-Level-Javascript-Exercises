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
        const sortedArray = _______(array);
        sortedArrayDisplay.textContent = JSON.stringify(sortedArray);
    }

    function mergeSort(array) {
        if (_______ <= 1) {
            return _______;
        }

        const middle = _______(array.length / 2);
        const left = array._______(0, middle);
        const right = array._______(middle);

        const sortedLeft = _______(left);
        const sortedRight = _______(right);

        return _______(sortedLeft, sortedRight);
    }

    function merge(left, right) {
        const merged = [];
        let leftIndex = 0;
        let rightIndex = 0;

        while (_______ < left.length && _______ < right.length) {
            if (left[leftIndex] <= right[rightIndex]) {
                merged._______(left[leftIndex]);
                _______++;
            } else {
                merged._______(right[rightIndex]);
                _______++;
            }
        }

        return merged
            .concat(left.slice(_______))
            .concat(right.slice(_______));
    }

    generateButton.addEventListener("click", function() {
        const newArray = generateRandomArray();
        displayArray(newArray);
    });

    sortButton.addEventListener("click", sortArray);

    const initialArray = generateRandomArray();
    displayArray(initialArray);
});
