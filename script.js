// Global Var
var index;
var qIndex;
var secondsLeft;
var answeredQuestions = 0;
var score = 0;
    // refs the timer unit displayed on the screen 
var counter = document.querySelector("#countdown");
    // start button
var startButton = document.querySelector("#start");
    // lets content be ref'd
var content = document.querySelector("#content"); // So far only used in testing 
 
    // store asset arrays
var animalNames = [];
for (i = 0; i < animal.length; i++) {
    animalNames[i] = animal[i].name;
}

var animalSpecies = [];
for (j = 0; j < animal.length; j++) {
    animalSpecies[j] = animal[j].species;
}

var animalBirthdays = [];
for (h = 0; h < animal.length; h++) {
    animalBirthdays[h] = animal[h].birthday;
}
    // Array holds all of the questions available
var questionList = [
    "What is this animal's birthday?",
    "What is this animal's name?",
    "What kind of animal is this?"
];

    // function set the time at launch of game
function setTime() {
    // set the timer to full
    secondsLeft = 180;
    var timerInterval = setInterval(function () {
        secondsLeft--;
        counter.textContent = secondsLeft;
            //make end of game happen
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            endGame();
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
        // h2 append current Question
    changeQuestion();
        // layout button options
    layoutStartUp();
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

    // populate question
function changeQuestion() {
    var h2 = document.getElementsByTagName("h2");
    currentQuestion = questionSelector(questionList);
    console.log(currentQuestion);
    h2[0].textContent = (currentQuestion.toString());
    console.log(h2);
}    

    // question rotator
function questionSelector() { 
    qIndex = Math.floor(Math.random() * 3);
    console.log(qIndex);
    console.log(questionList[qIndex]);
    return (questionList[qIndex].toString());
}

    //builds four question options with click eventlisteners 
function layoutStartUp() {
    //fill in four answers
    for (var k = 1; k < 5; k++) {
        var selectedSlot = "answerSlot" + k;
        console.log(selectedSlot);
        var holdingAnswer = document.getElementById(selectedSlot);
        //did it break here?
        console.log(holdingAnswer);
        //show options
        holdingAnswer.removeAttribute("class", "hidden");        
        // fills values based on the question asked
        holdingAnswer.textContent = quizMaster().toString();
        //gives questions click trigger
        holdingAnswer.addEventListener("click", function (event) {
            event.stopPropagation;
            // finds out if question is correct
            if ((qIndex === 0) && (this.value === animal[index].birthday)) {
                navigate();
            }
            else if ((qIndex === 1) && (this.value === animal[index].name)) {
                navigate();
            }
            else if ((qIndex === 2) && (this.value === animal[index].species)) {
                navigate();
            }
            else {
                // wrong answer removes time
                secondsLeft -=30;
                if(secondsLeft < 0) {
                    endGame();                    
                }
                navigate();
            }
        });
        $("#selectedSlot").prepend(holdingAnswer);
    }
        // populate correct question
    var l = Math.floor(Math.random() * 4) + 1;
    var rightSlot = "answerSlot" + l;
    var rightAnswer = document.getElementById(rightSlot);
    rightAnswer.textContent = rightMaster().toString();
    $("#rightSlot").prepend(rightAnswer);
    console.log("buttons are filled");
}

function rightMaster() {
    console.log(animal[index]);
    if (qIndex === 0) {
        console.log(animal[index].birthday);
        return animal[index].birthday.toString();
    }
    else if (qIndex === 1) {
        console.log(animal[index].name);
        return animal[index].name.toString();
    }
    else if (qIndex === 2) {
        console.log(animal[index].species);
        return animal[index].species.toString();
    }
}


    //Grab and sort question answers
function quizMaster() {
    console.log(qIndex);
    var aIndex = Math.floor(Math.random() * animal.length);
    if (qIndex === 0) {
        console.log(animal[aIndex].birthday);
        return animal[aIndex].birthday.toString();
    }
    else if (qIndex === 1) {
        console.log(animal[aIndex].name);
        return animal[aIndex].name.toString();
    }
    else if (qIndex === 2) {
        console.log(animal[aIndex].species);
        return animal[aIndex].species.toString();
    }
}

    //update cycle
function navigate() {
    answeredQuestions++;
    if (answeredQuestions === 5){
        endGame();
    }
    populate();
    // h2 append current Question
    changeQuestion();
    // layout button options
    layoutStartUp();
}

    //make end of game happen
function endGame() {
    alert("The game has ended");
    location.replace("https://violettaval.github.io/Animal-Crossing-Quiz-/localScores.html");
    if (secondsLeft >= 0) {
        score = secondsLeft;
    }
    var name = prompt("Enter Your Highscore Name");
    var timerLeft = 30;
    timer;
    function timer() {
      var timerInterval = setInterval(function() {
        timerLeft--;
        if(timerLeft === 0) {
          clearInterval(timerInterval);
          localStorage.setItem("userData", JSON.stringify(name + " : " + score));
        }
      }, 1000);
    }



}