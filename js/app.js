'use strict';

let username = prompt("Hello, who are you?");
console.log("Hello, who are you?");
alert("Hello " + username + " thank you, for stopping by");

let age = prompt("Do you think I'm younger than 35?");

if (age.toUpperCase() === 'Yes' || age.toUpperCase() === 'Y') {
  console.log("What's my age again?");
  alert("Sorry, I am older than 35!")
} else if (age.toUpperCase() === 'No' || age.toUpperCase() === 'N') {
  console.log('That is right! I am almost 40! But I still feel young!')
  alert('That is right! I am almost 40! But I still feel young!')
} else {
  console.log('Is 40 still the new 30?')
  alert("Is 40 still the new 30?")
};

let height = prompt("Am I short?");

if (height.toUpperCase() === 'Yes' || height.toUpperCase() === 'Y') {
  console.log('What is my height?');
  alert("False! At least I dont think I am short")
} else if (height.toUpperCase() === 'No' || height.toUpperCase() === 'N') {
  console.log("What's my height?")
  alert("Correct! I am actually over six foot!")
};


let live = prompt("Did I ever live in Korea?");

if (live.toUpperCase() === 'Yes' || live.toUpperCase() === 'Y') {
  console.log('Did I live in Korea?');
  alert("Yes, I did! Big shout out to the Army! Haha")
} else if (live.toUpperCase() === 'No' || live.toUpperCase() === 'N') {
  console.log("Sorry, but I did live in Korea!")
  alert("Sorry, wrong answer! I live in Korea for three years!")
};

let pet = prompt("Do I own any pets?");

if (pet.toUpperCase() === 'Yes' || pet.toUpperCase() === 'Y') {
  console.log('Do I own any pets?')
  alert("That is wrong. Unfortunately, I dont own any pets.")
} else if (pet.toUpperCase() === 'No' || pet.toUpperCase() === 'N') {
  console.log("Do I own any pets?.")
  alert("Correct! I do not have any pets currently. Sad day.")
};

let color = prompt("Do I like the color green?");

if (color.toUpperCase() === 'Yes' || color.toUpperCase() === 'Y') {
  console.log('Do I like the color green??')
  alert("Correct! Green is one of my favorite colors!")
} else if (pet.toUpperCase() === 'No' || pet.toUpperCase() === 'N') {
  console.log("Do I own any pets?.")
  alert("Sorry, that is wrong. I LOVE green!")
} else {
  // console.log('Maybe I will wear green next week!')
  alert('Maybe I will wear green next week!')
};