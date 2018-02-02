// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Plank', year: 1858, passed: 1947 },
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick',
  'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire',
  'Bellow, Saul', 'Benchley, Robert', 'Benson, Peter', 'Ben-Gurion, David',
  'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana',
  'Bent, Silas', 'Bensten, Lloyd', 'Berger, Ric', 'Berne, Eric', 'Berio, Luciano',
  'Berle, Milton', 'Berlin, Irving', 'Bernie, Eric', 'Bernhard, Sandra', 'Berra, Yogi',
  'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken',
  'Biden, Joshep', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank',
  'Birrel, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'
];


// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
/* You pass filter a function and that function loops over the entire array
and we can decide if keep it (return true) or not (return false) */
const fifteen = inventors.filter(function(inventor) {
  if(inventor.year >= 1500 && inventor.year < 1600) {
    return true; // keep it
  }
});

const fifteenShort = inventors.filter(inventor =>
  (inventor.year >= 1500 && inventor.year < 1600));
console.log("fifteenShort");
console.table(fifteenShort);
console.log("---------------");

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
/* Map takes and array, does something with it and returns another array of
the same lenght */
const fullNames = inventors.map(inventor =>
  //inventor.first + " " + inventor.last);
  `${inventor.first} ${inventor.last}`);
console.log("fullNames");
console.table(fullNames);
console.log("---------------");

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
/* Sort loops the array comparing two items with a function given that
returns one or minus one depending on the comparation output and then reorders
the two items*/
const ordered = inventors.sort(function(a, b) {
  if(a.year > b.year) {
    return 1;
  } else {
    return -1;
  }
});

const orderedShort = inventors.sort((a, b) =>
  a.yar > b.year ? 1 : -1);
console.log("orderedShort");
console.table(orderedShort);
console.log("---------------");

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
/* Reduces allows you to build something from the iterantion
of the array */
const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);
console.log("totalYears");
console.log(totalYears);
console.log("---------------");

// 5. Sort the inventors by years lived
const oldest = inventors.sort(function(a, b) {
  const lastGuy = a.passed - a.year;
  const nextGuy = b.passed - b.year;

  return lastGuy > nextGuy ? -1 : 1;
});
console.log("oldest");
console.log(oldest);
console.log("---------------");

// 6. Create a list of Boulevards in Paris that contain 'de' anywhere in the names

// 7. Sort exercise
// Sort the people alphabetically by last names

// 8. Reduce exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike',
  'walk', 'car', 'van', 'car', 'truck'
];
