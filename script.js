// Global Var
var index;
    // refs the timer unit displayed on the screen 
var counter = document.querySelector("#countdown");
    // start button
    var startButton = document.querySelector("#start");
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

    //start button descriptors
startButton.addEventListener("click", function (event) {
    event.stopPropagation;
        // hide the button
    startButton.setAttribute('class', 'hidden');
        // starts the game
    console.log("started game");
    setTime();
        // hide the button
    startButton.getAttribute('class', 'hidden');
        // populate image
    populate();
    // layoutStartUp();
});

    // sets up image    
function populate() {

    index = Math.floor(Math.random() * animal.length);
    console.log("animal is " + animal[index].name);
    var imgElements = document.querySelector("img");
    imgElements.setAttribute("src", animal[index].image_url);
    imgElements.setAttribute("alt", animal[index].name);
    imgElements.removeAttribute("class");
}
