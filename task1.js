/*Create a simple game in which the user has to guess the secret number. Game has the following
functionality:
1. Program asks the user to enter a number.
2. Set secret number to be entered number plus one.
3. Print out whether the user won or not.*/

//ask for users number

console.log ("This is a computer guess game.\n")

process.stdout.write("Please type a number:\n");
//Read users input
process.stdin.on ("data", function( inputFromUser ){
//Save users input  to a variable
//trim() removes white spaces
    let givenInput = inputFromUser.toString().trim();
//Define a secret number(user's number +1)
    let secretNumber = Number(givenInput) + 1;
// Print out the given number
process.stdout.write("The given number is " + givenInput + "\n" );

// Print out the secret number
process.stdout.write("The secret number is " + secretNumber + "\n" );

// Print out whether the user won or lost
process.stdout.write("Sorry you lost!");
process.exit()

} ) ;







