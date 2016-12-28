// declare variables
let tempIn = document.getElementById('tempIn').value;
let tempOut = document.getElementById('tempOut');
let button = document.getElementById('converter');
let forFaren = document.getElementById('far');
let forCels = document.getElementById('cel');


function toCelsius (tempIn) {
   tempOut.innerHTML = ((tempIn - 32) * (5 / 9))
   // color the temp output, based on range
   if (tempOut )
}

function toFahrenheit (tempIn) {
   tempOut.innerHTML = (tempIn * (9 / 5) + 32)
   // color the temp output, based on range
   if (tempOut )
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
