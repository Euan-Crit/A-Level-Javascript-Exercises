document.addEventListener("DOMContentLoaded", function () {
    const arrayDisplay = document.getElementById("array-display");
    const generateButton = document.getElementById("generate-btn");
    const searchButton = document.getElementById("search-btn");
    const searchInput = document.getElementById("search-input");
    const searchResult = document.getElementById("search-result");

    let currentBoard = [];

    function generateBoard() {
        const symbols = [".", ".", ".", ".", "P", "N", "B", "R", "Q", "K"];
        const board = [];
        for (let row = 0; row < 5; row++) {
            const rowData = [];
            for (let col = 0; col < 5; col++) {
                rowData.push(symbols[Math.floor(Math.random() * symbols.length)]);
            }
            board.push(rowData);
        }
        return board;
    }

    function displayBoard(board) {
        arrayDisplay.textContent = JSON.stringify(board);
    }

    function studentSearch(board, targetPiece) {
        let ________ = null;
        let _________ = 0;

        while (_________ < board.length && ________ === null) {
            let col = 0;
            while (col < board[_________].length && ________ === null) {
                if (board[_________][col] === _______) {
                    ________ = [_________, col];
                } else {
                    _______;
                }
            }
            _________++;
        }

        return ________;
    }

    generateButton.addEventListener("click", function () {
        currentBoard = generateBoard();
        displayBoard(currentBoard);
        searchResult.textContent = "Result will appear here";
        searchInput.value = "";
    });

    searchButton.addEventListener("click", function () {
        const targetPiece = searchInput.value.trim().toUpperCase();
        if (targetPiece === "") {
            searchResult.textContent = "Please enter a piece symbol.";
            return;
        }

        const location = studentSearch(currentBoard, targetPiece);

        if (location !== null) {
            searchResult.textContent = `Found ${targetPiece} at row ${location[0]}, column ${location[1]}`;
        } else {
            searchResult.textContent = "Piece not found";
        }
    });

    currentBoard = generateBoard();
    displayBoard(currentBoard);
});
