/*Create a simple program with the following functionality:
1. Ask for user to input a number.
2. Define a secret number.
3. Perform and print out basic calculations for that number with the secret
number.*/
//Ask for user to input a number.
process.stdout.write("Please enter a number:\n");
//Read users input
process.stdin.on("data", function( inputFromUser ){
//set users numbers as a variable
let x = inputFromUser
//Define a secret number(y)
let y = 12;

let addition = y + y;
let subtraction = y - y;
let multiplication = y * y;
let division = y / x;
let percentage = y % x;
let increase = y + 1;
let decrease = y - 1;
// Print out the secret number
process.stdout.write ("addition " + y.toString() + " + " + y.toString() + " = " + addition.toString() + "\n");
process.stdout.write ("subtraction " + y.toString() + " - " + y.toString() + " = " + subtraction.toString() + "\n" );
process.stdout.write ("multiplication " + y.toString() + " * " + y.toString() + " = " + multiplication.toString() + "\n" );
process.stdout.write ("division " + y.toString() + " / " + x.toString() + " = " + division.toString() + "\n" );
process.stdout.write ("percentage " + y.toString() + " % " + x.toString() + " = " + percentage.toString() + "\n" );
process.stdout.write ("increase " + y.toString() + " ++ " + " = " + increase.toString() + "\n" );
process.stdout.write ("decrease " + y.toString() + " -- " + " = " + decrease.toString() + "\n" );
process.exit();
} ) ;