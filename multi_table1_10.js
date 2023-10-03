/*Ask the user to enter a number and then print out corresponding multiplication
table using a loop.
Optional: Try to make printing according to screenshot on the right. You might use
util.format, padStart() and padEnd() to achieve this. */

// Let's get utilities for string formatting purposes
const UTIL = require('util');
// Ask the user to enter a number.
process.stdout.write("Enter a number:" + "\n");
//Read users input
process.stdin.on("data", function( inputFromUser ) {
    //convert users input from Buffer to String
    let number = parseFloat(inputFromUser)
    

    // Check if the ; i <= 10; i++) 
    for (let i = 0; i <= 10; i++){
    //create a loop to create columns(0-9)
    process.stdout.write(UTIL.format("Multiplication table for %s\n", number));
    process.stdout.write(UTIL.format("%s", "".padStart(25, "*")) + "\n");
    for (let j = 1; j <= 12; j++) {
    
    process.stdout.write(UTIL.format('*%s * %s = %s', j.toString().padStart(7, " "), number, (j * number)).padEnd(24, " ") + "*\n");
  }
    process.stdout.write(UTIL.format("%s", "".padStart(25, "*")) + "\n");
  //print out new line 
    process.exit();
}
});