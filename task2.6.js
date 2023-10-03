/*Create a program with a simple menu and following
functionality:
1. Print hello
2. Print current date
3. End program
Remember to check invalid input, too.
Hint! Use switch for this. */

//To print out hello
process.stdout.write("Please print out what you want to do: \n" + "1. Print hello \n" + "2. Print current date \n" + " 3. End program \n" );

//Read users input
process.stdin.on("data", function( inputFromUser ){
   
    // toString() converts input to string, split splits the string in to parts divided by space
    let numberinput = inputFromUser.toString().trim();

    // user sets input into variable
    let chosennum = Number(numberinput);
    
  // Print Hello
  switch (chosennum) {
    case 1:
    // Print Hello
    process.stdout.write("Hello");
   break;

    // Print current date  
    case 2:
    let currentDate = new Date();    
    process.stdout.write(currentDate.toString());
    break;
    //  End program
    
    case 3:
    process.stdout.write("End program");
    process.exit();
    break;
    
    // when the input is invalid    
    default:
        process.stdout.write("Invalid input.");
        break;
        };
    
    
});
    
