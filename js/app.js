'use strict';

alert('Welcome to my page!');
console.log('Welcome to my page!');

let username = prompt('What is your name?');
console.log('What is your name?');
alert('Hello ' + username + ', thank you for stopping by!');
alert('Lets answer some quick questions! Type y for yes, or n for no!');

let age = prompt('Do you think I am younger than 35?').toLowerCase();

function howOld() {
  if (age === 'yes' || age === 'y') {
    console.log('Incorrect! I am actually 37!');
    alert('Incorrect! I am actually 37!');
  } else if (age === 'no' || age === 'n') {
    console.log('Great job, you are correct!');
    alert('Great job, you are correct!');
  } else {
    console.log('Sorry, that is not correct.');
    alert('Sorry, that is not correct.');
  }
}

howOld(age);

let tall = prompt('Am I very short?').toLowerCase();

function whatsMyHeight() {
  if (tall === 'yes' || tall === 'y') {
    console.log('False! At least I dont think I am short...');
    alert('False! At least I dont think I am short...');
  } else if (tall === 'no' || tall === 'n') {
    console.log('Correct! I am actually over six foot!');
    alert('Correct! I am actually over six foot!');
  } else {
    console.log('Sorry, that is not correct.');
    alert('Sorry, that is not correct.');
  }
}

whatsMyHeight(tall);

let live = prompt('Did I ever live in Korea?').toLowerCase();

function whereDoILive() {
  if (live === 'yes' || live === 'y') {
    console.log('Yes, I did! Big shout out to the Army! Haha');
    alert('Yes, I did! Big shout out to the Army! Haha');
  } else if (live === 'no' || live === 'n') {
    console.log('Sorry, that is wrong. I DID live in Korea!');
    alert('Sorry, that is wrong. I DID live in Korea!');
  } else {
    console.log('Sorry, that is not correct.');
    alert('Sorry, that is not correct.');
  }
}

whereDoILive(live);

let pets = prompt('Do I own any pets?')
  .toLowerCase();

function doIHavePets() {
  if (pets === 'yes' || pets === 'y') {
    console.log('That is wrong. Unfortunately, I dont own any pets.');
    alert('That is wrong. Unfortunately, I dont own any pets.');
  } else if (pets === 'no' || pets === 'n') {
    console.log('Correct! I do not have any pets currently. Sad day.');
    alert('Correct! I do not have any pets currently. Sad day.');
  } else {
    console.log('Sorry, that is not correct.');
    alert('Sorry, that is not correct.');
  }
}

doIHavePets(pets);

let color = prompt('Do I like the color green?')
  .toLowerCase();

function doIlikeGreen() {
  if (color === 'yes' || color === 'y') {
    console.log('Yes, I LOVE the color green!');
    alert('Yes, I LOVE the color green!');
  } else if (color === 'no' || color === 'n') {
    console.log('That is wrong. Green is one of my favorite colors!');
    alert('That is wrong. Green is one of my favorite colors!');
  } else {
    console.log('Sorry, that is not correct.');
    alert('Sorry, that is not correct.');
  }
}

doIlikeGreen(color);

function numberGuess() {
  let numberinput = parseInt(prompt('Guess my favorite number! It is a number between 1 - 20! '));
  let x = 19;
  let i = 4;
  while (i > 0) {
    if (numberinput === x) {
      alert('Bingo, Good guess! You are good at this!');
      break;
    }
    else if (numberinput < x) {
      i--;
      numberinput = parseInt(prompt(`Too low! Try guessing higher. You only have ${i} guesses left!`));
    }
    else if (numberinput > x) {
      i--;
      numberinput = parseInt(prompt(`Too high! try guessing lower. You only have ${i} guesses left!`));
    }
    else {
      i--;
      numberinput = parseInt(prompt(`Only a number between 1-20, please! You have ${i} guesses left!`));
    }
    if (i === 0) {
      alert('You are all out of guesses! The correct answer was 19!');
    }
  }
}
numberGuess();

function foodGuess() {
  let possibleAnswers = ['pizza', 'sushi', 'cheeseburgers', 'salads', 'cookies', 'kale'];
  let userAttempts = 6;

  alert(`Guess my favorite food! You only have ${userAttempts} guesses left!`);

  for (let i = 0; i < userAttempts; i++) {
    let userGuess = prompt(`Guess my favorite food! You have ${userAttempts - i} guesses left!`);
    if (possibleAnswers.includes(userGuess)) {
      alert(`Great job! You guessed one of my favorite foods! Some of my favorite foods are: ${possibleAnswers.join(', ')}`);
      break;
    }
    if (i === userAttempts - 1) {
      alert(`Sorry, you are all out of guesses!! Some of my favorite foods are: ${possibleAnswers.join(', ')}`);
    }
  }
}
foodGuess();
