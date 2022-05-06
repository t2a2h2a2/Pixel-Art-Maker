const sizePicker = document.querySelector('#sizePicker');
const pixelCanvas = document.querySelector('#pixelCanvas');


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

