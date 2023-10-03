/** 3.5 Task 5: Countdown
Print out numbers from 10 to 0 using a loop. */


// print out numbers from 10 to 0
// Initialize the countdown string
let countdownString = "Ten minutes to ignition... Starting countdown\n";

// Build the countdown numbers with proper padding and align in a column
for (let i = 10; i >= 0; i--) {
    countdownString += i.toString().padStart(6, '-----').padEnd(12, '-----') + "\n"; // Pad with leading dashes and add a newline
    
}

// Append "IGNITION!!" with padding at the end to align it in a column
countdownString += "IGNITION!!\n".padStart(4);

// Print the formatted countdown using process.stdout.write
process.stdout.write(countdownString);
  
    //end program
    process.exit();







    /**Of course! This code is designed to create a countdown, starting from 10 and ending at 0, and then saying "IGNITION!!" in a formatted way. Let me explain it in simple terms:

Countdown Initialization: The code starts by creating a variable called countdownString and sets it to an initial message: "Ten minutes to ignition... Starting countdown\n". This is the starting point of the countdown.

Building the Countdown: It then enters a loop that counts down from 10 to 0 using for (let i = 10; i >= 0; i--). Inside this loop:

It creates a string for each number in the countdown (from 10 to 0).
The string includes:
The current countdown number (i), converted to a string.
Properly formatted padding with dashes to align the numbers in a column.
A newline character \n to move to the next line.
Appending "IGNITION!!": After the countdown is complete, it appends "IGNITION!!" to the countdownString variable with the appropriate padding to align it in the same column as the countdown numbers.

Printing the Countdown: It uses process.stdout.write(countdownString) to print the entire formatted countdown to the screen.

Ending the Program: Finally, it uses process.exit() to exit the program. */