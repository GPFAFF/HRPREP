var a = "Golf";
first();

function first() {
  var b = "FORE!";

  second();

  function second() {
    var c = "NAILED IT";
    third();
  }
}
function third() {
  var d = "lip out";
  // Doesn't have access to the c variable.  console.log(a + ' ' + b + ' ' + c + ' ' + d);

  console.log(a + ' ' + d);
}
