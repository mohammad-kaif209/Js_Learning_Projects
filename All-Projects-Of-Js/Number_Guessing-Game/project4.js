let randomNumber = parseInt(Math.random()*100 + 1);
const playGame = true;

const userInput = document.querySelector("#NumberField");
const onSubmit = document.querySelector("#submitBtn");
const prevGuesses = document.querySelector(".Guesses");
const remainingGuesses = document.querySelector(".result");
const range = document.querySelector(".lowOrHi");
const lastPara = document.querySelector(".resultpara");


const pEle = document.createElement('p');

let attemptsLeft = 1;
if(playGame){
    onSubmit.addEventListener('click',function(e){
        e.preventDefault();
        let yourGuess = parseInt(userInput.value);
        isValidInput(yourGuess);
    });
}

function isValidInput(yourGuess){
    if(isNaN(yourGuess)){
        alert("Please,Enter a Valid Number");
        userInput.innerHTML = '';
    }
    else if(yourGuess < 1){
        alert("Please, Enter a Number which is greater than 1 ");
    }
    else if(yourGuess > 100){
        alert("Please, Enter a Number which is less than 100 ");
    }
    else{
        if(attemptsLeft === 11){
            clearField(yourGuess);
            displayMessage(`Game Over, the random number was ${randomNumber}`);
            endGame();
        }
        else{
            clearField(yourGuess);
            checkGuess(yourGuess);
        }
    }

}
function checkGuess(yourGuess){
    if(randomNumber == yourGuess){
        displayMessage(`congratulations!!! you guessed it right..`);
        endGame();
    }
    else if(randomNumber < yourGuess){
        displayMessage(`your guess is too high`);
    }
    else if(randomNumber > yourGuess){
        displayMessage(`Your guess is too low`);
    }

}

function clearField(yourGuess){
    userInput.value = '';
    prevGuesses.innerHTML += `${yourGuess}   `;
    attemptsLeft++;
    remainingGuesses.innerHTML = `${11 - attemptsLeft}`;
    console.log(attemptsLeft);
}

function displayMessage(message){
    range.innerHTML = `<h2>${message}</h2>`
    range.style.color = 'green';
}


function endGame(message){
    userInput.value = '';
    userInput.setAttribute('disabled','');
    pEle.classList.add = 'button';
    pEle.innerHTML = `<button style="background-color : white;
                                     color:black ;
                                     padding:20px 40px;
                                     border-radius : 8px;
                                     "           
    " id="newgame">Start New Game</button>`
    lastPara.appendChild(pEle);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameBtn = document.querySelector('#newgame');
    newGameBtn.addEventListener('click',function(e){

        randomNumber = parseInt(Math.random()*100 + 1);
        attemptsLeft = 1;
        prevGuesses.innerHTML = '';
        remainingGuesses = `${11 - attemptsLeft}`;
        userInput.removeAttribute('disabled');
        lastPara.removeChild(pEle);
        playGame = true;
    });
}
