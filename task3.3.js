/*Create a program with the following functionality:
1. Ask the user to enter a string.
2. Loop through the string and print out the string letter by letter saying “1.
character is [first letter of given string.]”
Hint! You might need the following String methods: charAt() and trim() and
property length. Check them out in documentation. */

    // The string iterator that is used here iterates over characters,
    // not mere code units
//1. Ask the user to enter a string.
process.stdout.write("Enter a string:" + "\n");

// Read user's input into a variable§
process.stdin.on("data", function(inputFromUser) {
    // Convert user's input from Buffer to String
    let string = inputFromUser.toString().trim();

    const anyString = string;

    // Print the character at index 0
   
    for(let i = 0; i < string.length; i++){
        // Print characters from the string
        process.stdout.write((i + 1) + ". character is " + anyString.charAt(i) + "\n");
        // Increment iterator variable
        
        // End the program
    process.exit();
    }
});






/**ChatGPT
Certainly! This code does the following:

It asks the user to enter a string by displaying the message "Enter a string:".

It listens for user input, and when the user enters a string and presses Enter, it reads that input.

It converts the user's input, which is initially in a format called "Buffer," into a regular string and stores it in the string variable. The trim() function is used to remove any extra spaces or newlines that might be at the beginning or end of the user's input.

It then defines a variable anyString and sets it equal to the user's input string.

Next, it enters a loop that iterates through each character of the input string. The loop runs from i = 0 (the first character) to i < string.length (the end of the string).

Inside the loop, it prints the character at the current position in the string, along with a message like "1. character is [first letter of given string]." The charAt(0) function is used to get the first character of the string, and (i + 1) is used to display the position of the character.

After printing the character and its position, it increments the iterator variable i.

Finally, it ends the program using process.exit();.

So, when you run this code, it will:

Ask you to enter a string.
Once you enter a string, it will print each character of the string along with its position, starting from 1 and going to the end of the string.
After printing all characters, it will end the program.
For example, if you entered "Hello," it would output: */