const board = document.querySelector('.tic-tac-toe');
let squares;
const button = document.querySelector('button');


function makeBoard () {
    for (let i = 0; i < 9; i++) {
        const square = document.createElement('div');
        square.setAttribute('class', 'empty square');
        board.append(square);
    }

    squares = document.querySelectorAll('.square');
}

makeBoard()

function makeMove() {   
    let xTurn = true;
    
    for (let square of squares) {
        square.addEventListener('click', () => {
            if (square.textContent === "") {
                if (xTurn) {                            // will run true because X is first
                    square.textContent = 'X';
                    xTurn = false;
                } else {
                    square.textContent = 'O';
                    xTurn = true;
                }
            }
            if (square.classList.contains('empty')) {
                square.classList.remove('empty')
            }
        })
    }
}


makeMove()

function resetBoard () {

    button.addEventListener('click', () => {
    location.reload()
    })
}

resetBoard()
