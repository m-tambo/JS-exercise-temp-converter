// collect and declare variables
let tempIn = document.getElementById('tempIn');
let tempOut = document.getElementById('tempOut');
let button = document.getElementById('converter');
let forFaren = document.getElementById('far');
let forCels = document.getElementById('cel');
let clear = document.getElementById('clear');


function toCelsius () {
   x = Math.floor((tempIn.value - 32) * (5 / 9))
   // color the temp output, based on temp range
   if (x > 32) {
      tempOut.className = "red"
   } else if (x < 0) {
      tempOut.className = "blue"
   } else {
      tempOut.className = "green"
   }
   // output converted temp
   tempOut.innerHTML = x + " C";
}

function toFahrenheit () {
   x = Math.floor(tempIn.value * (9 / 5) + 32)
   // color the temp output, based on temp range
   if (x > 90) {
      tempOut.className = "red"
   } else if (x < 32) {
      tempOut.className = "blue"
   } else {
      tempOut.className = "green"
   }
   // output converted temp
   tempOut.innerHTML = x + " F";
}


// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter () {
  if (forCels.checked === true) {
   toCelsius();
  } else if (forFaren.checked === true) {
   toFahrenheit();
  }
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);


// clear form when button is clicked
clear.addEventListener('click', function() {
   tempIn.value = "";
   tempOut.innerHTML = "";
})
