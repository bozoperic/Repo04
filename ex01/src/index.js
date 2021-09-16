function main(numOne,numTwo) {
    var quotient;
    var numOne=numOne;
var numTwo=numTwo;
    if (numTwo===0) {
        quotient='Divide by 0! Cannot divide by zero';
    }
    else{
        //only change code bellow this line


quotient=numOne/numTwo;
        //only change code above this line

    }
    return quotient;
}
console.log (main(15,3));   // change this line
console.log (main(25,5));
console.log (main(420,10));
console.log (main(55,0));
module.export=main;