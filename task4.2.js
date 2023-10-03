/*Create a program that prints a triangle. Program asks the
user for the height of the triangle and then prints out a
triangle. */

// Let's get utilities for string formatting purposes
const UTIL = require('util');
//1. Ask the user to enter a string.
process.stdout.write("Please enter height of triangle:" + "\n");

// Read user's input into a variable§
process.stdin.on("data", function(inputFromUser) {
    let height = Number(inputFromUser);
     
    for (let i = 1; i <= height; i++){
        let row = " ";
        
        // Add spaces to align the asterisks properly
        for (let j = 1; j <= height ; j++) {
        row += " ";
        
        // Add asterisks for this row
      for (let k = 1; k <= 2 * i - 1; k++) {
        row += '*';
        process.stdout.write(row + "\n");
      }
    }
    process.exit();
}
});








/**Certainly! This code creates a program that prints a triangle based on the user's input for the height of the triangle. Let's break it down in simple terms:

Asking for User Input: The code begins by asking the user to enter the height of the triangle with the message "Please enter height of triangle:".

Reading User Input: When the user enters a number (the height) and presses Enter, the program reads this input and stores it in a variable called height. This input is converted to a number using Number(inputFromUser).

Creating the Triangle: The code then enters a loop that runs from i = 1 to i equal to the user's specified height (for (let i = 1; i <= height; i++)). This loop is responsible for creating each row of the triangle.

Creating Each Row: Inside the loop, there is a variable called row initially set to an empty space. This variable represents the current row of the triangle.

Adding Spaces: Within the row, it enters another loop (with j) that adds spaces before the asterisks. This is done to align the asterisks correctly in each row of the triangle.

Adding Asterisks: Inside the spaces loop, there's another loop (with k) that adds asterisks (*) to the row. The number of asterisks added depends on the value of i, which corresponds to the current row's position in the triangle. The formula 2 * i - 1 determines the number of asterisks in each row.

Printing Each Row: After constructing the row with the correct number of spaces and asterisks, it prints the row to the screen using process.stdout.write(row + "\n"). This effectively prints each row of the triangle.

Exiting the Program: After the entire triangle is printed, the program exits using process.exit(). */