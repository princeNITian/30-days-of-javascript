/*
Minimum
The previous chapter introduced the standard function Math.min that returns
its smallest argument. We can build something like that now. Write a function
min that takes two arguments and returns their minimum.
*/

function customMin(a,b){
    return a>b ? b:a;
}

console.log(customMin(5,4));