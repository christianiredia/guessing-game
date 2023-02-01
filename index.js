let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
  maximum = parseInt(prompt("Enter a Valid Number"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1;

while (guess !== targetNum) {
  if ((guess = "q")) break;
  attempts++;
  if (guess > targetNum) {
    guess = parseInt(prompt("Too High!! Guess Again"));
  } else {
    guess = parseInt(prompt("To lowww! Enter another guess!"));
  }
}
console.log(`You got it! It took you ${attempts} guesses!`);
