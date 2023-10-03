/* Write a simple program to figure out whether a given number is
even or odd.
Hint! You can use modulo (%) to achieve this. */

//user inputs two numbers
process.stdout.write("Please enter a numbers :\n");

//Read users input
process.stdin.on("data", function( inputFromUser ){
  let userinput = inputFromUser;

  if (userinput.charAt(i) % 2 === 0) {
    process.stdout.write(userinput.charAt(i) + " is even");
} else {
    process.stdout.write(userinput.charAt(i) + " is odd");
    };  
    console.log('Modified string:', modifiedString);
    process.exit();
});  