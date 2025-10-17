document.addEventListener("DOMContentLoaded", function () {
    // Get the game board element
    const board = document.getElementById("board");

    // Get all the divs inside the board
    const squares = board.getElementsByTagName("div");

    // Add the "square" class to each square
    for (let i = 0; i < squares.length; i++) {
        squares[i].classList.add("square");
    }

    // Track the current player: "X" starts first
    let currentPlayer = "X";

    // Initialize a simple array to track the board state
    let gameState = Array(9).fill(null);

    // Define all winning combinations
    const winningCombinations = [
        [0, 1, 2], // Top row
        [3, 4, 5], // Middle row
        [6, 7, 8], // Bottom row
        [0, 3, 6], // Left column
        [1, 4, 7], // Middle column
        [2, 5, 8], // Right column
        [0, 4, 8], // Diagonal top-left to bottom-right
        [2, 4, 6]  // Diagonal top-right to bottom-left
    ];

    // Function to check if there's a winner
    function checkWinner() {
        for (let combination of winningCombinations) {
            const [a, b, c] = combination;
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                return gameState[a]; // Return "X" or "O"
            }
        }
        return null; // No winner yet
    }

    // Add a click event to each square
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function () {
            // Only allow marking empty squares
            if (gameState[i] === null) {
                // Set the content and update state
                squares[i].textContent = currentPlayer;
                squares[i].classList.add(currentPlayer);
                gameState[i] = currentPlayer;

                // Check for a winner
                const winner = checkWinner();
                if (winner) {
                    const statusDiv = document.getElementById("status");
                    statusDiv.textContent = `Congratulations! ${winner} is the Winner!`;
                    statusDiv.classList.add("you-won");
                    return; // Stop the game
                }

                // Alternate between X and O
                currentPlayer = (currentPlayer === "X") ? "O" : "X";
            }
        });

        // When the mouse enters the square
        squares[i].addEventListener("mouseenter", function () {
            // Only add hover effect if the square is empty
            if (gameState[i] === null) {
                squares[i].classList.add("hover");
            }
        });

        // When the mouse leaves the square
        squares[i].addEventListener("mouseleave", function () {
            squares[i].classList.remove("hover");
        });
    }
});