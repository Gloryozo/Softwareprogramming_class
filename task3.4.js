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
    let number = Number(inputFromUser)
    let i = 1;

    process.stdout.write(UTIL.format("Multiplication table for %s\n", number));
    //prints a line of asterisks (*) as a separator to make the table look nice. 
    process.stdout.write(UTIL.format("%s", "".padStart(25, "*")) + "\n");
    // Loop from 1 to 10
    while (i <= 10) {
        process.stdout.write(UTIL.format('*%s * %s = %s', i.toString().padStart(7, " "), number, (i * number)).padEnd(24, " ") + "*\n");
        // Let's increment the iterator
        i++;
      
      process.stdout.write(UTIL.format("%s", "".padStart(25, "*") + "\n"));
    }
  //print out new line 
    process.exit();
     
});













/**Certainly! This code is designed to take a number as input from the user and then print a multiplication table for that number. Let me explain it in simple terms:

Listening for User Input: The code is waiting for the user to input something using process.stdin.on("data", function(inputFromUser) { ... }). This means it's expecting the user to type something and press Enter.

Converting User Input: Once the user enters something, it's stored in a variable called inputFromUser. This variable initially contains the user's input as a "Buffer" (a type of data), so it converts it into a regular number and stores it in a variable called number using let number = Number(inputFromUser).

Printing a Header: It prints a header message to the screen using process.stdout.write(UTIL.format("Multiplication table for %s\n", number)). This header is something like "Multiplication table for [user's number]".

Printing a Separator: It prints a line of asterisks (*) as a separator to make the table look nice. This line is created using process.stdout.write(UTIL.format("%s", "".padStart(25, "*")) + "\n"). It's just a row of 25 asterisks.

Loop for Multiplication Table: It enters a loop that runs 10 times (from i = 1 to i <= 10). Inside this loop, it does the following for each iteration:

Prints a line showing a multiplication calculation using process.stdout.write(...). This line includes:
The value of i, which represents the current row in the table.
The user's input number.
The result of multiplying i and the user's number.
The line is formatted to look neat.
Increments the iterator i to move to the next row.
Printing a Separator (Again): After printing all the rows in the multiplication table, it prints another line of asterisks as a separator.

Exiting the Program: Finally, it uses process.exit() to exit the program. However, it's worth noting that this line appears inside the loop, so the program will exit after printing just one row of the multiplication table. This is likely not the intended behavior, and the process.exit() line should be outside the loop to print the full table.

So, when you run this code, it will:

Wait for you to enter a number.
Once you enter a number, it will print a multiplication table for that number from 1 to 10, and then it will exit the program. However, as mentioned, it should print the full table, and you may need to move the process.exit() line outside the loop to achieve that. */