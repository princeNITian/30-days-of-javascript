/*
Everything
Analogous to the some method, arrays also have an every method. This one
returns true when the given function returns true for every element in the array.
In a way, some is a version of the || operator that acts on arrays, and every is
like the && operator.

Implement every as a function that takes an array and a predicate function
as parameters. Write two versions, one using a loop and one using the some
method.

*/

function repeat(n, action) {
    for (let i = 0; i < n; i++) {
      action(i);
    }
}
  

let labels = [];
repeat(5, i => {
  labels.push(`Unit ${i + 1}`);
});
console.log(labels);
repeat(5,console.log);

function noisy(f) {
    return (...args) => {
      console.log("calling with", args);
      let result = f(...args);
      console.log("called with", args, ", returned", result);
      return result;
    };
  }
  noisy(Math.min)(3, 2, 1);

  function unless(test, then) {
    if (!test) then();
  }
  
  repeat(3, n => {
    unless(n % 2 == 1, () => {
      console.log(n, "is even");
    });
  });

  ["A","B","C"].forEach(l => console.log(l));
  let arr = ['A','B','C'];
  for(let a of arr)
  {
      console.log(a);
  }

  require('./scripts');

  function filter(array, test) {
    let passed = [];
    for (let element of array) {
      if (test(element)) {
        passed.push(element);
      }
    }
    return passed;
  }
  
  console.log(filter(SCRIPTS, script => script.living));

  console.log(SCRIPTS.filter(s => s.direction == "ttb"));

  function map(array, transform) {
    let mapped = [];
    for (let element of array) {
      mapped.push(transform(element));
      
    }
    return mapped;
  }
  
  let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
  console.log(rtlScripts);
  console.log(map(rtlScripts, s => s.name));

  function reduce(array,combine,start){
      let current = start;
      for(let arr of array){
          current = combine(arr,current);
      }
      return current;
  }

  console.log(reduce([1,2,3,4,5],((a,b) => a+b), 0));
  console.log([1,2,3,4,5].reduce((a,b)=>a*b));

  // Two emoji characters, horse and shoe
let horseShoe = "🐴👟";
console.log(horseShoe.length);
// → 4
console.log(horseShoe[0]);
// → (Invalid half-character)
console.log(horseShoe.charCodeAt(0));
// → 55357 (Code of the half-character)
console.log(horseShoe.codePointAt(0));
// → 128052 (Actual code for horse emoji)

let roseDragon = "🌹🐉";
for (let char of roseDragon) {
  console.log(char);
}