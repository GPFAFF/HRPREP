var person = {
  age: 32,
  name: "Greg",
  drunk: false
}

var canDrive = "Yes you can drive!";
var canDriveButCantDrink = "Come back when your 21 and we will serve you";
var whatDoYouWantToDrink = "Welcome to the bar, what are you having?";

function isPersonOldEnoughToDrinkAndDrive(person) {
  if (person.age > 16 && person.age <= 21) {
      return canDrive;
  } else if (person.age >= 21 && person.drunk !== true) {
      return whatDoYouWantToDrink;
  } else if (person.drunk === true) {
    return false;
  }
}

console.log(isPersonOldEnoughToDrinkAndDrive(person));
