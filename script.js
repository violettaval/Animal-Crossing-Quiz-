// Global Var

    // refs the timer unit displayed on the screen 
var counter = document.querySelector("#countdown");

    // function set the time at launch of game
function setTime() {
    // set the timer to full
    var secondsLeft = 180;
    var timerInterval = setInterval(function () {
        secondsLeft--;
        counter.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            console.log("Timer has ended");
        }

    }, 1000);
}

    // start button
var startButton = document.querySelector("#start");
startButton.addEventListener("click", function (event) {
    event.stopPropagation;
        // hide the button
        startButton.setAttribute('class', 'hidden');
    
    // starts the game
    console.log("started game");
    setTime();
        // hide the button
    startButton.getAttribute('class', 'hidden');

    // layoutStartUp();
});