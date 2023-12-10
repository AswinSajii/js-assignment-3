var readlineSync = require('readline-sync');
let number=readlineSync.question('Enter the last number(n) : ');
 function printNumber(){
    for(i=1;i<=number;i++){
      console.log(i);
    }
}
printNumber();
