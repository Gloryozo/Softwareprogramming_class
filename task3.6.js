/** 3.6 Task 6: Palindrome
Ask the user to give a string and then check if it’s a palindrome
(a word, phrase, or sequence that reads the same backwards
as forwards, e.g. madam or nurses run) or not. Use loops to
solve this.
Note: What happens if madam was spelt with a capital letter? */


//Ask user to enter their name
process.stdout.write("Enter a string:" + "\n");
//Read users input
process.stdin.on("data", function( inputFromUser ) {
    //convert users input from Buffer to String
    let userInput = inputFromUser.toString().trim();

     // Initialize a variable to check if it's a palindrome
     let isPalindrome = true;

    for(let i = 0; i < userInput.length; i++) {
        process.stdout.write("char in index " + i + " is " + userInput.charAt(i) + "\n" );
    }
    for(let i = userInput.length-1;  i >= 0; i--) {
        process.stdout.write("char in index " + i + " is " + userInput.charAt(i) + "\n" );
    }
    // Loop to check if it's a palindrome
    for (let i = 0; i < userInput.length / 2; i++) {
        if (userInput.charAt(i) !== userInput.charAt(userInput.length - 1 - i)) {
            isPalindrome = false;
            break;

        }
    }

    if (isPalindrome) {
        process.stdout.write("It's a palindrome!\n");
    } else {
        process.stdout.write("It's not a palindrome.\n");
    }
    process.exit();
});







/**Certainly! This code does the following:

Asking for User Input: It starts by asking the user to enter a string with the message "Enter a string:".

Reading User Input: When the user enters a string and presses Enter, the code reads the user's input and stores it in a variable called userInput. It also converts the user's input from a "Buffer" (a type of data) to a regular string and removes any extra spaces or newlines with toString().trim().

Loop for Forward Check: It enters a loop that goes through each character of the user's input string from the beginning to the end (from index 0 to the length of the string). Inside this loop, it does the following for each character:

It prints a message indicating the character's position (index) and the character itself. This is done with process.stdout.write("char in index " + i + " is " + userInput.charAt(i) + "\n" ).
Loop for Backward Check: After checking the string forwards, it enters another loop that goes through each character of the user's input string in reverse order (from the end of the string to the beginning). Inside this loop, it also prints a message indicating the character's position and the character itself.

Exiting the Program: Finally, it uses process.exit() to exit the program. */


