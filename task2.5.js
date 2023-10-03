/* Write a simple program that asks user for three numbers and create
the following logic:
▪ If all three numbers are equal print out “You entered three matching numbers”.
▪ If all three numbers are different print out “You entered three different numbers”.
▪ If first two are the same, but the third one is different, print out “Third one doesn’t fit”.
▪ If any of the numbers is 2, enter “You entered the magic number 2!”. */

//user inputs two numbers
process.stdout.write("Please enter three numbers seprated with single space characters:\n");

//Read users input
process.stdin.on("data", function( inputFromUser ){
   
    // toString() converts input to string, split splits the string in to parts divided by space
    let numberinput = inputFromUser.toString().split(" ").map(Number);

   // Ensure there are exactly three numbers
   if (numberinput.length !== 3) {
       process.stdout.write("Please enter exactly three numbers.");
   } else {
    
    // user sets input into variable
    let firstnum = Number(numberinput[0])
    let secondnum = Number(numberinput[1])
    let thirdnum = Number(numberinput[2])

   // If all three numbers are equal print out “You entered three matching numbers
if (firstnum === secondnum && secondnum === thirdnum) {
    process.stdout.write("You entered three matching numbers");
   
    // If all three numbers are different print out “You entered three different numbers”.  
    } else if (firstnum !== secondnum && secondnum !== thirdnum && firstnum !== thirdnum){
    process.stdout.write("You entered three different numbers");
   
    //  If first two are the same, but the third one is different, print out “Third one doesn’t fit”.
    } else if (firstnum === secondnum && secondnum !== thirdnum){
    process.stdout.write("Third one doesn’t fit");
   
    // If any of the numbers is 2, enter “You entered the magic number 2!”.
    }else if(firstnum === 2 || secondnum === 2 || thirdnum === 2) { 
        process.stdout.write("You entered the magic number 2!");

    } else {
        process.stdout.write("Invalid input.");
        }
    }
    process.exit();
});

   