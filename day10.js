// function canYouSpotTheProblem() {
//     "use strict";
//     for (counter = 0; counter < 10; counter++) {
//       console.log("Happy happy");
//     }
//   }
  
// canYouSpotTheProblem();


// function Person(name) { this.name = name; }
// let ferdinand = Person("Ferdinand"); // oops
// console.log(name);

// "use strict";
// function Person(name) { this.name = name; }
// let ferdinand = Person("Ferdinand"); // forgot new
// // → TypeError: Cannot set property 'name' of undefined

function test(label, body) {
    if (!body()) console.log(`Failed: ${label}`);
  }
  
  test("convert Latin text to uppercase", () => {
    return "hello".toUpperCase() == "HELLO";
  });
  test("convert Greek text to uppercase", () => {
    return "Χαίρετε".toUpperCase() == "ΧΑΊΡΕΤΕ";
  });
  test("don't convert case-less characters", () => {
    return "مرحبا".toUpperCase() == "مرحبا";
  });

  function numberToString(n, base = 10) {
    let result = "", sign = "";
    if (n < 0) {
      sign = "-";
      n = -n;
    }
    do {
      result = String(n % base) + result;
      n /= base;
    } while (n > 0);
    return sign + result;
  }
  console.log(numberToString(13, 10));