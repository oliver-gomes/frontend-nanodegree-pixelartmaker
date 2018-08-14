// Select color input
const color = document.querySelector('#colorPicker');

// Select size input
//const selectHeight = document.querySelector('#inputHeight').value;
//const selectWidth = document.querySelector('#inputWidth').value;

// When size is submitted by the user, call makeGrid()
const button = document.querySelector('.submitButton');

button.addEventListener('click', function(){

  const selectHeight = document.querySelector('#inputHeight').value;
  const selectWidth = document.querySelector('#inputWidth').value;

  //alert(`${selectHeight}`);
  const canvasElement = document.querySelector('#pixelCanvas');

  for (let i = 0; i <= selectHeight; i++){
    const newSpan = document.createElement('span');
    newSpan.textContent = "1";

    canvasElement.appendChild(newSpan);
  }

});



function makeGrid() {

// Your code goes here!


}

makeGrid();