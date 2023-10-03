/**4.3 Task 3: Other way around
Create a program that asks the user for a string and then
prints it out from the last letter to the first. Use a for loop.
 */

//1. Ask the user to enter a string.
process.stdout.write("Please enter a string:" + "\n");

// Read user's input into a variable§
process.stdin.on("data", function(inputFromUser) {
    let userInputs = inputFromUser.toString().trim();

    for(let i = 0; i < userInputs.length; i++) {
        process.stdout.write( userInputs.charAt(i) + "\n");
    }
    for (let i = userInputs.length-1;  i >= 0; i--) {
        process.stdout.write( " The backward is:  " + userInputs.charAt(i) );
    }
    process.exit();
});





/**Certainly! This code creates a program that takes a string input from the user and then prints the characters of that string in reverse order (from the last letter to the first letter) using a for loop. Here's a simple explanation:

Asking for User Input: The code begins by asking the user to enter a string with the message "Please enter a string:".

Reading User Input: When the user enters a string and presses Enter, the program reads this input and stores it in a variable called userInputs. It also converts the user's input from a "Buffer" (a type of data) to a regular string and removes any extra spaces or newlines with toString().trim().

Loop for Forward Check: The code enters a loop with the variable i to iterate through each character of the user's input string from the beginning to the end (from index 0 to the length of the string). Inside this loop:

It prints each character of the string on a new line using process.stdout.write(userInputs.charAt(i) + "\n"). This loop effectively prints the characters in their original order, from the first letter to the last.
Loop for Backward Check: After printing the string forwards, it enters another loop with the variable i to iterate through each character of the user's input string in reverse order (from the end of the string to the beginning). Inside this loop:

It prints each character of the string on the same line with the message "The backward is: " using process.stdout.write(" The backward is: " + userInputs.charAt(i)). This loop prints the characters in reverse order, from the last letter to the first.
Exiting the Program: Once both loops finish running, the program exits using process.exit().

So, when you run this code, it will:

Ask you to enter a string.
Once you enter a string, it will first print each character of the string forwards on separate lines.
Then, it will print the string in reverse order, also on a single line with the message "The backward is:".
After that, it will exit the program. */