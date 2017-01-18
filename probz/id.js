var array = [1999, 2005, 1982, 1984, 2008, 1955];

function printFullAge(years) {
  var newArray = [];
  var ages = [];

  for (var i = 0; i < array.length; i++) {
    console.log(array[i])

    ages[i] = 2017 - array[i]
  }
  for (var i = 0; i < ages.length; i++) {
    if (ages[i] >= 18) {
      console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old and is full age')
      newArray.push(true)
    } else {
      console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old and is NOT full age')
      newArray.push(false)
    }
  }
  console.log(newArray)
  return newArray;
}

printFullAge(array);

