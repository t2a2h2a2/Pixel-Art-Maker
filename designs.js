const sizePicker = document.querySelector('#sizePicker');
const pixelCanvas = document.querySelector('#pixelCanvas');

//This function creates a grid with the height and width from the users input.
//Once we have the grid we will listen for a mousedown and color the cells.

function makeGrid() {
  let gridHeight = document.querySelector('#inputHeight').value;
  let gridWidth = document.querySelector('#inputWidth').value;

  while (pixelCanvas.firstChild) {
    pixelCanvas.removeChild(pixelCanvas.firstChild);
    }

  for (let i = 1; i <= gridHeight; i++) {
    let gridRow = document.createElement('tr');
    pixelCanvas.appendChild(gridRow);
    for (let t = 1; t <= gridWidth; t++) {
      let gridCell = document.createElement('td');
      gridRow.appendChild(gridCell);
      gridCell.addEventListener('mousedown', function() {
        const color = document.querySelector('#colorPicker').value;
        this.style.backgroundColor = color;
      })
     }
  }
}

sizePicker.addEventListener('submit', function(event) {
  event.preventDefault();
  makeGrid();
});

