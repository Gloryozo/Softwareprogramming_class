/*Create a simple program in which the user is asked to give two numbers and then
your program prints out which one of them is largest.*/

//user inputs two numbers
process.stdout.write("Please enter two numbers seprated with single space characters:\n");

//Read users input
process.stdin.on("data", function( inputFromUser ){
   
    // toString() converts input to string, split splits the string in to parts divided by space
    let numbersInString = inputFromUser.toString().split(" ");

    // user sets input into variable
    let firstnum = Number(numbersInString[0])
    let secondnum = Number(numbersInString[1])
   //setting the bigger number to a variable
    let biggernum ;
    //compare the numbers
    if (firstnum > secondnum) {
        biggernum = firstnum
        //print out "The largest number"
    process.stdout.write("The largest number is" + firstnum );
    }else if (secondnum > firstnum) {
        biggernum = secondnum
        //print out the result
        process.stdout.write("The largest number is " + secondnum );  
    } else {
        process.stdout.write('Both numbers are equal.');
        process.exit();
    };
});












/* User Input Prompt:

The program starts by asking the user to input three numbers, and they should separate these numbers with spaces.
It displays the message: "Please enter three numbers separated with single space characters:"
Reading User Input:

When the user enters their numbers and presses Enter, the program reads what they typed.
It takes what the user typed and turns it into a "string" (like a piece of text).
Then, it splits this string into three parts, each part being one of the numbers the user typed.
Storing the Numbers:

The program takes these three parts (the numbers) and stores them in three separate variables named firstnum, secondnum, and thirdnum.
So, now we have the three numbers the user entered stored in these variables.
Finding the Largest Number:

Next, the program wants to figure out which of these three numbers is the largest.
It starts by creating a variable called biggernum to remember the largest number.
Comparing the Numbers:

The program compares the first two numbers, firstnum and secondnum.
If firstnum is greater (larger) than secondnum, it sets biggernum to be equal to firstnum.
If secondnum is greater, it sets biggernum to be equal to secondnum.
Printing the Largest Number:

After figuring out which of the first two numbers is the largest, it prints out a message telling the user that this is the largest number.
Comparing with the Third Number:

Then, the program compares biggernum (which is now the largest of the first two numbers) with the third number, thirdnum.
If thirdnum is greater than biggernum, it updates biggernum to be equal to thirdnum.
Printing the Largest Number (Again):

Finally, the program prints out a message telling the user that the largest number is now biggernum.
Exiting the Program:

The program ends by telling the computer to stop running it using process.exit().
So, in simple terms, this program takes three numbers from the user, compares them, and then tells the user which one is the largest.  */