//Basic Reduce

var data = [15, 3, 20];

var reducer = function(accumulator, item) {
  return accumulator + item;
}

var initalValue = 0;

var total = data.reduce(reducer, initalValue);

console.log('The sum is ' + total);

// Reduce with objects

var votes = [
  "angular",
  "angular",
  "angular",
  "react",
  "react",
  "react",
  "ember",
  "vue",
  "vanilla"
];

var initalValue = {};

var reducer = function(tally, vote) {
  if (!tally[vote]) {
    tally[vote] = 1
  } else {
    tally[vote] = tally[vote] + 1
  }
return tally;
}

// MAP

var result = votes.reduce(reducer, initalValue);

console.log('The votes are ' + result);

var data = [4, 5, 6];

var doubled = data.reduce(function(acc, value) {
  acc.push(value * 2);
  return acc;
}, [])

console.log('my doubled data:', doubled)

var doubledMapped = data.map(function(item) {
  return item * 2;
})

console.log('my mapped data', doubledMapped);

// FILTER

var newArray = [4, 5, 6, 7, 8, 9];

var initalValue = 0;

var evens = newArray.reduce(function(acc, value) {
  if (value % 2 === 0) {
    acc.push(value);
  }
  return acc;
}, []);

console.log('reduce filter', evens);

var evenFiltered = newArray.filter(function(item) {
  return (item % 2 === 0);
});
console.log('even Filtered', evenFiltered);

var filterMap = newArray.filter(function(value) {
  return value % 2 === 0;
}).map(function(value) {
  return value * 2;
})

console.log("MAP/FILTER: ", filterMap);

var bigData = [];
for (var i = 0; i < 100000; i++) {
  bigData[i] = i;
}

console.time('bigData');
var filterMappedBigData = bigData.filter(function(value) {
  return value % 2 === 0
}).map(function(value) {
  return value * 2;
})
console.timeEnd('bigData');
console.time('bigDataReduce');
var reduceBigData = bigData.reduce(function(acc, value) {
  if (value % 2 === 0) {
    acc.push(value *2)
  }
  return acc;
}, []);
console.timeEnd('bigDataReduce');
