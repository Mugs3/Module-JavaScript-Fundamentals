// Predict and explain first...

// Why will an error occur when this program runs?
// decimalNumber is called twice=============> write your prediction here

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// decimalNumber has been declared as a function and a variable within function scope=============> write your explanation here
//Removing const decimalNumber still returns Syntax error if still within the function scope so it's not restricted to the function

// Finally, correct the code to fix the problem.
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}
const decimalNumber = 0.5;

console.log(decimalNumber);
