/* Write a simple program that asks user a simple yes or no question and prints out a
corresponding message. Remember to also handle invalid input.  */

// Print the question to be answered by yes or no
process.stdout.write("Are you older than 18?" + "\n" + "Yes/No: ");
 
//Read users input
process.stdin.on("data", function( inputFromUser ){
    // user sets input into variable
    let response = inputFromUser.toString().trim();
//We use response.toLowerCase() to convert the user's input to lowercase before comparing it with "yes" or "no." This makes the comparison case-insensitive, so it will work for "Yes," "yes," "YES," etc.
if (response.toLowerCase() === "yes") {
    process.stdout.write("You have been given access to the application");
    // if input by user is No
} else if (response.toLowerCase() === "no"){
    process.stdout.write("You do not have access to this application");
    // if user types an invalid input
    } else {
    process.stdout.write(response + " is not a valid input")
    };  
process.exit();
});