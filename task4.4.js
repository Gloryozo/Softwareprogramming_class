/*4.4 Task 4: toMixedCase()
Create a program that asks the user for a string and then
prints it out so that all odd characters are in uppercase
and all even characters are in lower case. Use a for loop.*/

//1. Ask the user to enter a string.
process.stdout.write("Please enter a string: ");

// Read user's input into a variable§
process.stdin.on("data", function(inputFromUser) {
    // Store user input in a variable
    let nameInput = inputFromUser.toString().trim();
    process.stdout.write("The word in mixed case is:");
  
    for (let i = 0; i < nameInput.length; i++) {
      if (i % 2) {
        // even
        process.stdout.write(nameInput.charAt(i).toLowerCase());
      } else {
        // odd
        process.stdout.write(nameInput.charAt(i).toUpperCase());
      }
    }
    process.stdout.write("\n\n");
    process.exit();
});  
