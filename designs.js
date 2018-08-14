// Select color input
const color = document.querySelector('#colorPicker');
const canvasElement = document.querySelector('#pixelCanvas');

// Select size input
//const selectHeight = document.querySelector('#inputHeight').value;
//const selectWidth = document.querySelector('#inputWidth').value;

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
    const spanH = document.createElement('span');
    spanH.innerHTML = "0";
    canvasElement.appendChild(spanH);
    for (let i = 1; i < selectWidth; i++){
      const spanW = document.createElement('span');
      spanW.innerHTML = "0";
      canvasElement.appendChild(spanW);
    }
    const breakIn = document.createElement('span');
    breakIn.innerHTML = "<br>"
    canvasElement.appendChild(breakIn)
  }

}
