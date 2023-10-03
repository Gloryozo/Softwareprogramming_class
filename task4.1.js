/*4.1 Task 1: Multiplication Tables 2
Print out multiplication tables for numbers 1-10 using a loop. Use nested for loops.
*/
const UTIL = require('util');
// Lets's loop numbers 1-10
for (let i = 1; i <= 10; i++) {
    // Let's print out a heading for the table
    process.stdout.write(UTIL.format("Multiplication table for %s\n", i));
    process.stdout.write(UTIL.format("%s", "".padStart(25, "*")) + "\n");
    // inner loop to create the tables for each number
    for (let j = 1; j <=10; j++ ) {
        process.stdout.write(UTIL.format('*%s * %s = %s', j.toString().padStart(7, " "), i, (j * i)).padEnd(24, " ") + "*\n");
    }
    // Footer for the table and next line
    process.stdout.write(UTIL.format("%s\n", "".padStart(25, "*") + "\n"));

}
// Terminate program
process.exit();





/**Certainly! This code is designed to print multiplication tables for numbers 1 to 10 using nested for loops. Let me explain it in simple terms:

Loop for Numbers 1 to 10 (Outer Loop): The code starts by using a loop with the variable i to iterate from 1 to 10 (for (let i = 1; i <= 10; i++)). This outer loop is responsible for generating multiplication tables for numbers from 1 to 10.

Printing Table Heading: Inside the outer loop, it prints a heading for the multiplication table for the current number i. For example, if i is 2, it will print "Multiplication table for 2".

Printing a Separator Line: It prints a line of asterisks (*) as a separator to make the table look nice. This line is created with process.stdout.write(UTIL.format("%s", "".padStart(25, "*")) + "\n").

Loop for Multiplication (Inner Loop): After printing the heading and separator, it enters another loop with the variable j to iterate from 1 to 10 (for (let j = 1; j <= 10; j++)). This inner loop is responsible for generating the multiplication table for the current number i.

Printing Multiplication Entries: Inside the inner loop, it calculates the multiplication of i and j and formats it into a nice-looking entry, such as "2 * 3 = 6". It uses process.stdout.write to print these entries in a specific format.

Printing a Separator Line (Footer): After printing all multiplication entries for the current number i, it prints another line of asterisks as a footer for the table to make it visually complete.

Terminating the Program: Once the outer loop finishes running for all numbers from 1 to 10, it uses process.exit() to end the program. */