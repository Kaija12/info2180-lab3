document.addEventListener("DOMContentLoaded", function () {
    // Get the board element (assuming it has id="board")
    const board = document.getElementById("board");
    
    // Get all the divs inside the board
    const squares = board.getElementsByTagName("div");

    // Loop through each square and add the "square" class
    for (let i = 0; i < squares.length; i++) {
        squares[i].classList.add("square");
    }
});
