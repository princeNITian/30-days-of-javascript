console.log(/cat/.test("concatenate"));
// → true
console.log(/\bcat\b/.test("concatenate"));
// → false

console.log("Choice pattern!");
let animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
console.log(animalCount.test("15 pigs"));
// → true
console.log(animalCount.test("15 pigchickens"));
// → false

console.log("papa".replace("p", "m"));
// → mapa

console.log("Borobudur".replace(/[ou]/, "a"));
// → Barobudur
console.log("Borobudur".replace(/[ou]/g, "a"));
// → Barabadar

console.log(
    "Liskov, Barbara\nMcCarthy, John\nWadler, Philip"
      .replace(/(\w+), (\w+)/g, "$2 $1"));
  // → Barbara Liskov
  //   John McCarthy
  //   Philip Wadler
let s = "the cia and fbi";
console.log(s.replace(/\b(fbi|cia)\b/g,
            str => str.toUpperCase()));
// → the CIA and FBI

let stock = "1 lemon, 2 cabbages, and 101 eggs";
function minusOne(match, amount, unit) {
  amount = Number(amount) - 1;
  if (amount == 1) { // only one left, remove the 's'
    unit = unit.slice(0, unit.length - 1);
  } else if (amount == 0) {
    amount = "no";
  }
  return amount + " " + unit;
}
console.log(stock.replace(/(\d+) (\w+)/g, minusOne));
// → no lemon, 1 cabbage, and 100 eggs

console.log("-----------");
function stripComments(code) {
    return code.replace(/\/\/.*|\/\*[^]*\*\//g, "");
  }
  console.log(stripComments("1 + /* 2 */3"));
  // → 1 + 3
  console.log(stripComments("x = 10;// ten!"));
  // → x = 10;
  console.log(stripComments("1 /* a */+/* b */ 1"));
  // → 1  1

  function stripComments(code) {
    return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
  }
  console.log(stripComments("1 /* a */+/* b */ 1"));
  // → 1 + 1

// let name = "harry";
// let text = "Harry is a suspicious character.";
// let regexp = new RegExp("\\b(" + name + ")\\b", "gi");
// console.log(text.replace(regexp, "_$1_"));
// → _Harry_ is a suspicious character.

let name = "dea+hl[]rd";
let text = "This dea+hl[]rd guy is super annoying.";
let escaped = name.replace(/[\\[.+*?(){|^$]/g, "\\$&");
let regexp = new RegExp("\\b" + escaped + "\\b", "gi");
console.log(text.replace(regexp, "_$&_"));
// → This _dea+hl[]rd_ guy is super annoying.

console.log("  word".search(/\S/));
// → 2
console.log("    ".search(/\S/));
// → -1

let pattern = /y/g;
pattern.lastIndex = 3;
let match = pattern.exec("xyzzy");
console.log(match.index);
// → 4
console.log(pattern.lastIndex);
// → 5

let global = /abc/g;
console.log(global.exec("xyz abc"));
// → ["abc"]
let sticky = /abc/y;
console.log(sticky.exec("xyz abc"));
// → null

let digit = /\d/g;
console.log(digit.exec("here it is: 1"));
// → ["1"]
console.log(digit.exec("and now: 1"));
// → null

console.log("Banana".match(/an/g));
// → ["an", "an"]

let input = "A string with 3 numbers in it... 42 and 88.";
let number = /\b\d+\b/g;
// let match;
while (match = number.exec(input)) {
  console.log("Found", match[0], "at", match.index);
}
// → Found 3 at 14
//   Found 42 at 33
//   Found 88 at 40

function parseINI(string) {
    // Start with an object to hold the top-level fields
    let result = {};
    let section = result;
    string.split(/\r?\n/).forEach(line => {
      let match;
      if (match = line.match(/^(\w+)=(.*)$/)) {
        section[match[1]] = match[2];
      } else if (match = line.match(/^\[(.*)\]$/)) {
        section = result[match[1]] = {};
      } else if (!/^\s*(;.*)?$/.test(line)) {
        throw new Error("Line '" + line + "' is not valid.");
      }
    });
    return result;
  }
  
console.log(parseINI(`name=Vasilis[address]city=Tessaloniki`));
// → {name: "Vasilis", address: {city: "Tessaloniki"}}
console.log(/🍎{3}/.test("🍎🍎🍎"));
// → false
console.log(/<.>/.test("<🌹>"));
// → false
console.log(/<.>/u.test("<🌹>"));
// → true