var readlineSync = require('readline-sync');
let a=readlineSync.question('Enter a number : ');
let square;
let sum=0;
function sumOfSquares(){
    for(i=1;i<=a;i++){
        square=i**2
        sum+=square
    }
    console.log("The sum of squares of the numbers =",sum);
}
sumOfSquares();