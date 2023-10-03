/*Extend the program from previous task to ask for three numbers.*/

/*Create a simple program in which the user is asked to give two numbers and then
your program prints out which one of them is largest.*/

//user inputs two numbers
process.stdout.write("Please enter three numbers seprated with single space characters:\n");

//Read users input
process.stdin.on("data", function( inputFromUser ){
   
    // toString() converts input to string, split splits the string in to parts divided by space
    let numbersInString = inputFromUser.toString().split(" ");

    // user sets input into variable
    let firstnum = Number(numbersInString[0])
    let secondnum = Number(numbersInString[1])
    let thirdnum = Number(numbersInString[2])
   
    //setting the bigger number to a variable
    let biggernum ;

    //compare the numbers
    if (firstnum > secondnum ) {
        biggernum = firstnum;
    
        //print out "The largest number"
    process.stdout.write("The largest number is" + firstnum );
    }else {
        biggernum = secondnum;
            //print out the result
        //process.stdout.write("The largest number is " + secondnum );  

    } if (thirdnum > biggernum) {
        //Third number is the bigger number
        biggernum = thirdnum;
        
        //print out the third number
        process.stdout.write("The largest number is " + biggernum );
    };
    process.exit();
});