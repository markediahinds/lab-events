const colors = document.querySelectorAll('.color');
const canvas = document.querySelector('#canvas');
const currColor = document.querySelector('#current-color');
let cells;

console.log(cells, 'hello')

for (let color of colors) {
    color.addEventListener('click', () => {
        currColor.style.background = color.style.background;
    })
}

function addCell () {
    for (let i = 0; i < 80; i++) {
        const cell = document.createElement('div');
        cell.setAttribute('class', 'cell'); 
        canvas.append(cell);
    }
    cells = document.querySelectorAll('.cell');
}

addCell()


for (let cell of cells) {
    cell.addEventListener('click', () => {
        cell.style.background = currColor.style.background;
    })
}

for (let cell of cells) {
currColor.addEventListener('dblclick', () => {
    cell.style.background = "white";
    })
}

       


// Working on one color to ensure I could make it work 
// const color = document.querySelector('.color');
//     color.addEventListener('click', () => {
//         const currColor = document.querySelector('#current-color');
//         currColor.style.background = color.style.background;
// })

// CSS styling for DOM
// cell.style.cssText = "border: 1px solid #393e41; box-sizing: border-box; display: inline-block; height: 50px; width: 50px;";

