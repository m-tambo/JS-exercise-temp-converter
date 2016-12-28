// declare variables
let tempIn = document.getElementById('tempIn');
let tempOut = document.getElementById('tempOut');
let button = document.getElementById('converter');
let forFaren = document.getElementById('far');
let forCels = document.getElementById('cel');


function toCelsius (tempIn) {
   tempOut.innerHTML = ((tempIn.value - 32) * (5 / 9))
   // color the temp output, based on range
   if (tempOut > 32) {
      tempOut.className += " .red"
   } else if (tempOut < 0) {
      tempOut.className += " .blue"
   } else {
      tempout.className += " .green"
   }
}

function toFahrenheit (tempIn) {
   tempOut.innerHTML = (tempIn.value * (9 / 5) + 32)
   // color the temp output, based on range
   if (tempOut > 90) {
      tempOut.className += " .red"
   } else if (tempOut < 32) {
      tempOut.className += " .blue"
   } else {
      tempout.className += " .green"
   }
}



// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (e) {
  console.log("event", e);
  if ( ) {
   toCelcius();
  } else
  if (  ) {
   toFahrenheit();
  }
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);
