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

    // Add a click event to each square
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function () {
            // Only allow marking empty squares
            if (gameState[i] === null) {
                // Set the content and update state
                squares[i].textContent = currentPlayer;
                squares[i].classList.add(currentPlayer);
                gameState[i] = currentPlayer;

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
