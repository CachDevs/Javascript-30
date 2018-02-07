const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

const p = document.querySelector('p');


// clearing
console.clear();

// Regular
console.log('Hello');

// Interpolated
console.log('Hello I am a %s string!', 'interpolated');

// Styled
console.log('%c I am some great text ', 'font-size:20px; text-shadow: 5px 5px 0 grey');

// warning!
console.warn('I am a warning');

// Error :|
console.error('I am an error');

// Info
console.info('I am an info message');

// Testing
console.assert(1 === 2, 'That is wrong');

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
})

// counting
console.count('One');
console.count('One');
console.count('One');
console.count('Another');
console.count('One');
console.count('Another');
console.count('One');
console.count('Another');
console.count('Another');
console.count('One');
console.count('Another');


// timing
console.time('Fetching data');
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(jsonData => {
    console.log(jsonData);
    console.timeEnd('Fetching data');
  });

// table
console.table(dogs);
