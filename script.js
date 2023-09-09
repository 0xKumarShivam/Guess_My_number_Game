'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 5; //state variable
let highScore = 0;

//refactoring (don't repeat yourself)
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click'
, function() {const guess = Number(document.querySelector('.guess').value);

//console.log(guess, typeof guess);

//no  guess
if (!guess) {document.querySelector('.message').textContent = ' No Guess! 🚫';

//equal guess
} else if (guess === secretNumber) {document.querySelector('.message').textContent = '🎉 Correct Number!'; document.querySelector('body').style.backgroundColor = '#60b347';
document.querySelector('.number').style.width = '30rem';
document.querySelector('.number').textContent= secretNumber;

if(score > highScore) {
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
}
//not equal guess
} else if (guess !== secretNumber) { if(score > 1){
    document.querySelector('.message').textContent = 
    guess > secretNumber ? 'Too high 📈' : 'Too low 📉';
    //decrease score
    score--
    document.querySelector('.score').textContent = score;
} else {document.querySelector('.message').textContent = 'You lost the game 😒'; 
document.querySelector('.score').textContent = score -1 ; document.querySelector('body').style.backgroundColor = 'red';}

}
});


//again button
document.querySelector('.again').addEventListener('click', function() {
    score = 5;
    secretNumber =  Math.trunc(Math.random() * 20) + 1;

    // document.querySelector('.message').textContent = 'Start guessing...';
    //or
    displayMessage('Start guessing...');

    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    
    document.querySelector('body').style.backgroundColor = '#f60';
    document.querySelector('.number').style.width = '15rem';

});
