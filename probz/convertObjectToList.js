var obj = {
  name: "Cooper",
  age: 1,
  breed: "Pyrenees"
}

function convertObjectToList(obj) {
  var results = [];
  var finalResult = [];
  for (var val in obj) {
    results.push(val, obj[val]);
  } 
  while(results.length > 0) {
    finalResult.push(results.splice(0, 2));
  }
  return finalResult;
}

console.log(convertObjectToList(obj));
