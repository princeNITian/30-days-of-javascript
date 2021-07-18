## Values
> Number Values
> - JavaScript uses fixed no of bits i.e. 64 bits. 
> - 2^64 = 18 quintillion
> - Fractional Numbers - 5.3769
> - Exponential Numbers are represented as 2.945e9 = 2.945 * 10^9
> * There are three special numbers : Infinity, -Infinity, NaN
> - Arithmetic Operators: +, -, *, /, %
> - NaN stands for Not A Number. Its type is Number. e.g. 0/0 is NaN, Infinity - Infinity is NaN.


> String Values
> - Three ways to represent string: 
> 1. "Hi JavaScirpt Learner"
> 2. 'Hi JavaScirpt Learner'
> 3. `` `Hi JavaScript Learner` ``
> - Escape character is allowed as other language.
> - Backticks ``(`) ``are used when you evaluate the expression using template literal. e.g. `` `My age is ${age}.` ``
> - Not all the operators are symbol. Some are string as well. e.g. typeof 
`console.log(typeof "hello");`
> - The only operator that works as unary and binary is '-' . e.g. -(3.5-2.0)



> Boolean Values
> - To  check whether it is on or off , true or false.
> - Used when you have to compare `console.log(30>24);` -> true
> - NaN is not equal to itself.
`console.log(NaN==NaN);` -> false
> - Logical operators: and, or, not
`console.log(true && false);` -> false
`console.log(true || false);` -> true
`console.log(!true);` -> false
> - There is one operator which operates on three values. It is called ternary operator. 
`console.log(true ? 10:20);` -> 10
`console.log(2>3 ? "Yes":"No");` -> No

> Empty Values
> - There are two empty values that represent absence of meaningful value. They are: null and undefined
`console.log(null==undefined);` -> true

## Automatic Type Conversion
> - When an operator is applied to the “wrong” type of value, JavaScript will
quietly convert that value to the type it needs, using a set of rules that often
aren’t what you want or expect. This is called `type coercion`.
> - `console.log(8 * null);` -> 0
> - `console.log("5" - 1);` -> 4
> - `console.log("5" + 1);` -> 51
> - `console.log("five" * 2);` -> NaN
> - This behavior is often useful. When you want to test whether a value has a
real value instead of null or undefined , you can compare it to null with the
== (or != ) operator.
> - When you do not want any type conversions to happen, there are two additional operators: === and !== . The first tests whether a value is precisely equal to the other, and the second tests whether it is not precisely equal.

## Short-circuiting of logical operators
- The logical operators && and || handle values of different types in a peculiar
way. They will convert the value on their left side to Boolean type in order
to decide what to do, but depending on the operator and the result of that
conversion, they will return either the original left-hand value or the right-
hand value.
- The || operator, for example, will return the value to its left when that can
be converted to true and will return the value on its right otherwise. This has
the expected effect when the values are Boolean and does something analogous
for values of other types.
`console.log(null || "user");` -> user
`console.log("Agnes" || "user");` -> Agnes
- The rules for converting strings and numbers to Boolean values state
that 0 , NaN , and the empty string ( "" ) count as false , while all the other values
count as true . So 0 || -1 produces -1 , and "" || "!?" yields "!?" .
- In the case of true || X , no matter
what X is—even if it’s a piece of program that does something terrible—the
result will be true, and X is never evaluated. The same goes for false && X ,
which is false and will ignore X . This is called short-circuit evaluation.