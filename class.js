const { Console } = require("console");
// Ask user to imput a number
process.stdout.write("Please enter a number: \n");

//creat an event listener for user input
process.stdin.on("data", function( inputFromUser ) {
    //Read users input into a variable
    let number = inputFromUser;
    
    //print out the number
    console.log("You entered: " + number);

    //check if number is 0
    if (number == 0) {
    //print out "You entered zero"
    process.stdout.write("You entered zero");
} else {
    // if you have something eslse
    process.stdout.write("you entered something else");
}
//if its not zero
    //print out "You entered something else"
process.exit();
});