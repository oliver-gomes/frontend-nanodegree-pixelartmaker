// Select color input
const color = document.querySelector('#colorPicker');
const canvasElement = document.querySelector('#pixelCanvas');

// When size is submitted by the user, call makeGrid()
const button = document.querySelector('.submitButton');

button.addEventListener('click', function(e){

  e.preventDefault();

  const selectHeight = document.querySelector('#inputHeight').value;
  const selectWidth = document.querySelector('#inputWidth').value;

  makeGrid(selectHeight, selectWidth);

});



function makeGrid(selectHeight, selectWidth) {

// Your code goes here!

  for (let i = 0; i < selectHeight; i++){
    let row = canvasElement.insertRow(0);

    for (let i = 0; i < selectWidth; i++){
      let cell = row.insertCell(0);
    }
  }

  

}
