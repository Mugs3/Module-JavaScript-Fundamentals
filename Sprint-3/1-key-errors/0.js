// Predict and explain first...
//  It would fail at line 2 with either syntax or reference errors =============> write your prediction here

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring.

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
console.log(capitalise("beautiful"));

// function is assigned 2 arguments/values=============> write your explanation here
// =============> write your new code here

function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
console.log(capitalise("beautiful"));
