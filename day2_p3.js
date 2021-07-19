/*
Write a program that creates a string that represents an 8×8 grid, using newline
characters to separate lines. At each position of the grid there is either a space
or a "#" character. The characters should form a chessboard.
Passing this string to console.log should show something like this:
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #
When you have a program that generates this pattern, define a binding size
= 8 and change the program so that it works for any size , outputting a grid
of the given width and height.

*/
// let $size = 8;
let $height = 10;
let $width = 7;
for(var i=0;i<$height;i++){
    let odd = "#";
    let even = " ";
    let row = "";
    if($width%2!=0){
        for(var j=0;j<$width/2;j++){
            row += odd + even;
        } 
    }else{
        for(var j=0;j<$width;j+=2){
            row += odd + even;
        }
    }
    
    console.log(row);
}