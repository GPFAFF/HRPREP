// Hoist Function Example

funcOne("Pars");

function funcOne(prop) {
  console.log(prop);
}

// This will not work because its a function definition
// console.log(funcTwo("Birdie"));

var funcTwo = function(prop) {
  console.log(prop);
}

// Hoist Variable Example
// Returns undefined because in creation phase it scans for variable declarations 
// and sets them to undefined. Will only throw an error if a definition isn't present whatsoever. 

console.log(clubs);
var clubs = "Callaway";
console.log(clubs);

function funcThree() {
  var clubs = "Callaway Big Bertha";
  console.log(clubs);
}
// Different execution and creation contexts.  This is why it returns two different values
// When they are assigned to the same variable. 
funcThree();
console.log(clubs)


