/**Create a program that finds specific items in an array.
1. Create an array with the following items: 55, 23,
6456, 324, 21, 234, 72, 21
2. Ask the user what they want to search for in the
integer array.
3. Loop through the array and compare the values with the input given by the user.
4. If the item is found, print out in which index the value was found.
5. If the item is not found, print out a message saying item was not found. */

//items in an array
let list = [55, 23, 6456, 324, 21, 234, 72, 21];

//to ask user what whey will like to search for
process.stdout.write("The number you'd like to search: ");

//user inputs value to be searched
process.stdin.on("data", function (inputFromUser) {
    //Save user input into a variable
    let userInput = Number(inputFromUser);

//to loop through the array
    for(let i = 0; i < list.length; i++){
 //to compare the values of the array and users input
  
 if (userInput === list[i]) {
    //print out when the item is found, and the index the value was found. 
        process.stdout.write(userInput + " was found in indeX " + [i] + "\n");
        process.exit()
 }
    }
        //printout If the item is not found
        process.stdout.write(userInput + " was not found\n"); 
        //Terminate program
        process.exit()
   
});