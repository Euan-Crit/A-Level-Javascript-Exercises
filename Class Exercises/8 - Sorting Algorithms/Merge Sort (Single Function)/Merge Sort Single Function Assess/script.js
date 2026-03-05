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
        if (______________________________) {
            return ______________________________;
        }

        const middle = ______________________________;
        const left = ______________________________;
        const right = ______________________________;

        const merged = [];
        let leftIndex = 0;
        let rightIndex = 0;

        while (______________________________) {
            if (______________________________) {
                ______________________________;
                ______________________________;
            } else {
                ______________________________;
                ______________________________;
            }
        }

        return ______________________________;
    }

    generateButton.addEventListener("click", function() {
        const newArray = generateRandomArray();
        displayArray(newArray);
    });

    sortButton.addEventListener("click", sortArray);

    const initialArray = generateRandomArray();
    displayArray(initialArray);
});
