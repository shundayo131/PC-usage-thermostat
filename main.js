// This is js.file for pop-up html when a user clicks an extension button on browser 
document.addEventListener('DOMContentLoaded', function() {
  let whiteSpace = document.getElementById('white-space');
  const redBar = document.getElementById('red-bar');
  let submitButton = document.getElementById('countButton');

  submitButton.addEventListener('click', function() {
    let userInput = document.getElementById('userInput').value;
    let seconds = userInput * 60;
    startCountdown(seconds);
  })

  function startCountdown(seconds) {
    // this is javascript manipulating the css style transition 
    // which is a shorthand for transition-property, transition-duration, and transition-timing-function)
    // which in the line below are separated by spaces 
    redBar.style.transition = "height " + seconds + "s linear";
    redBar.style.height = whiteSpace.offsetHeight + "px";
  }
});



/*
previous attempt to alert 
    // pop up with an input box => instead of pop-up, used input box. 
    // const minutes = prompt("how many minutes do you want to spend on the computer", "50");
    // const seconds = minutes * 60;

*/


//time
const startTime = Date.now();
console.log('startTime :', startTime);
const endTime = Date.now() + minutes;
console.log('endTime :', endTime);

/*
//attempt # 2
   const redBar = document.getElementById('red-bar');
   redBar.style.animationName = "increaseHeight";
   redBar.style.animationDuration = (milliseconds / 1000) + "s";
   redBar.addEventListener('animationend', () => {
      redBar.style.height = "100%";
   })

   //put this inside the CSS
@keyframes increaseHeight {
  from {
    height: 0;
  }
  to {
    height: 334px;
  }
}


//attempt #1
let whiteSpace = document.getElementById('white-space');
let currentHeight = 0;
const minutes = prompt("how many minutes do you want to spend on the computer", "50");
const milliseconds = (minutes * 60 * 1000);
//60000 ms = one minute
const loopTime = 200;
//increment every 2 milli seconds
const loops = milliseconds / loopTime;
//need 30000 loops

//whiteSpace.offsetHeight
//element height = 360
const pxToIncrement = whiteSpace.offsetHeight / loops;
console.time("timer")
//height / 3000 = px need to increment each loop
let increasingRedBar = setInterval(() => {
  // console.log('counting')
  currentHeight += pxToIncrement;
  const redBar = document.getElementById('red-bar');
  redBar.style.transition = 'none';
  redBar.style.height = '1%';
}

function addMinutes(seconds) {
  if(seconds)
    return Date.now() + seconds*1000;
  else
    return Date.now() + 1000 // one minute;
}

//time
function calculateTimeRemaining(endTime){
  return endTime - Date.now();
}

/*
previous attempt to alert 
    // pop up with an input box => instead of pop-up, used input box. 
    // const minutes = prompt("how many minutes do you want to spend on the computer", "50");
    // const seconds = minutes * 60;

*/
