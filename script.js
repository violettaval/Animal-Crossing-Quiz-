
// Global Var
var index;
    // refs the timer unit displayed on the screen 
var counter = document.querySelector("#countdown");
    // start button
var startButton = document.querySelector("#start");
    // lets content be ref'd
var content = document.querySelector("#content");
    // Array holds all of the questions available
var questionList = [
    "What is this animal's birthday?",
    "What is this animal's name?",
    "What kind of animal is this?"
];
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
    var h2 = document.getElementsByTagName("h2");
    currentQuestion = questionSelector(questionList);
    console.log(currentQuestion);
    h2[0].textContent = (currentQuestion.toString());
    console.log(h2);
    // h2.append(currentQuestion);

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


// question rotator
function questionSelector(questionList) {
    qIndex = Math.floor(Math.random() * 3);
    console.log(qIndex);
    console.log(questionList[qIndex]);
    return (questionList[qIndex].toString());
}
