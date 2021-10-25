
//--Jeopardy Round 1 timer variable--//
// --
let timerId = null
//--Round Timer Function--//
function countDownFrom(count) {
    // --
    timerId = setTimeout(tick, 1000);

    function tick() {
        let numberOfMinutes = (Math.floor(count / 60))
        let numberOfSeconds = (count % 60)
        let timer = document.getElementById('roundTimer')
        timer.textContent = ("Round Time: " + numberOfMinutes + ":" + numberOfSeconds)
        if (numberOfSeconds < 10) {
            timer.textContent = ("Round Time: " + numberOfMinutes + ":0" + numberOfSeconds)
        }
        count = count - 1;
        if (count <= 1) {
            console.log('The Round is Over!');
        } else {
            timerId = setTimeout(tick, 1000);
        }
    }
}
// Sets amount of time for the round timer
let initialCount = 300
// Assigns questionSelection Id to initiate multiple events when 'click' occurs
let questionSelection = document.getElementById("questionSelection")

// function to begin the round timer
function startTimer(event) {
    countDownFrom(initialCount)
}
//Event Listener for Round Timer. Timer begins at First category selection
questionSelection.addEventListener('click', startTimer)


// questionSelection.addEventListener('Click', evt => {
//     playerGuess.disabled = true
// })
//---Question Timer-----//
//--questionSelection


let questionTimer = null;
//---Timer begins when player 1 clicks on a category
questionSelection.addEventListener('click', () => {
    function tenSecondCount(count) {
        let questionTimer = setTimeout(questionCountDown, 1000)
    }
    function questionCountDown() {
        let numberOfSeconds = startingCount;
        let qTimeStatus = document.getElementById("qTimeStatus");
        qTimeStatus.textContent = "Seconds left to answer, " + numberOfSeconds;

        startingCount = startingCount - 1;
        if (startingCount === 0) {
            qTimeStatus.textContent = "Times Up!"
            clearTimeout()
        } else {
            questionTimer = setTimeout(questionCountDown, 1000)
        }
    }
    let startingCount = 10

    tenSecondCount(startingCount)
    
});
// This array has the Questions and answers to all categories. //
Questions = [
{Question: "You deserve a big bear hug if you know that UMa is an abbreviation for this constellation", Answer: "Ursa Major"},
{Question: "Question Example", Answer: "Answer Example"},
{Question: "Question Example", Answer: "Answer Example"},
{Question: "Question Example", Answer: "Answer Example"},
{Question: "Question Example", Answer: "Answer Example"},
{Question: "Question Example", Answer: "Answer Example"},
{Question: "Question Example", Answer: "Answer Example"},
{Question: "Question Example", Answer: "Answer Example"},
{Question: "Question Example", Answer: "Answer Example"},
{Question: "Question Example", Answer: "Answer Example"},
{Question: "Question Example", Answer: "Answer Example"},
{Question: "Question Example", Answer: "Answer Example"},
{Question: "Question Example", Answer: "Answer Example"},
{Question: "Question Example", Answer: "Answer Example"},
{Question: "Question Example", Answer: "Answer Example"},
{Question: "Question Example", Answer: "Answer Example"},
{Question: "Question Example", Answer: "Answer Example"},
{Question: "Question Example", Answer: "Answer Example"},
{Question: "Question Example", Answer: "Answer Example"},
{Question: "Question Example", Answer: "Answer Example"},
{Question: "Question Example", Answer: "Answer Example"},
{Question: "Question Example", Answer: "Answer Example"},
{Question: "Question Example", Answer: "Answer Example"},
{Question: "Question Example", Answer: "Answer Example"},
{Question: "Question Example", Answer: "Answer Example"},
{Question: "Question Example", Answer: "Answer Example"},
{Question: "Question Example", Answer: "Answer Example"},
{Question: "Question Example", Answer: "Answer Example"},
{Question: "Question Example", Answer: "Answer Example"},
{Question: "Question Example", Answer: "Answer Example"}
];

// console.log(Questions.length)
// Questions[0].Question
// console.log(Questions[0].Question)

// Questions[0].Answer
// console.log(Questions[0].Answer)

let playerAnswer = document.getElementById("player-answer")
let playerPass = document.getElementById("player-pass")
let playerGuess = document.getElementById("player-guess")

//Guss and Pass Button disabled
questionSelection.addEventListener('click', evt => {
    playerPass.disabled = true
    playerGuess.disabled = true
    
})
//player turns and instructions updated in the turnButton
let turnButton = document.getElementById("playerTurn");
turnButton.textContent = "Player One, it is your turn"

turnButton.addEventListener('submit', (playerAnswer) => {
    if (playerAnswer === true) {
        turnButton.textContent = "Player One, Choose another category!"
    } else if (playerAnswer === false) {
        turnButton.textContent = "Player Two, Do you know the answer?"
    } else if (playerPass === true) {
        turnButton.textContent = "Player Two, Do you know the answer?"
    }

})


