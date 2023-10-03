/* Create a simple program that converts distance given in miles to
kilometers. Print out the output with basic write() and also with
util.format().*/

// Import the util module
const util = require('util'); 
//opening statement
process.stdout.write("This is a distance converter, that converts from miles to km.\n");
// ask user to put in distance in miles
process.stdout.write("Please input your distance(miles):\n");
//Read users input
process.stdin.on("data", function( inputFromUser ){
//set users distance in miles as a variable
let givenInput = inputFromUser
//multiply users value by the constant for converting from miles to km ()
let converterconst = Number(givenInput) * 1.60934;
//Print out the distance in Km using the "write" method
process.stdout.write("The distance of " + givenInput + "miles is equivalent to " + converterconst + "km" +"\n")
//Print out the distance in Km using the "util.format" method 
process.stdout.write(util.format("The distance of %d miles is equivalent to %d km.\n", givenInput.toString(), converterconst.toString()));

// to exit the process
process.exit()
});

// Print the output using util.format()
//const util = require('util');
//const converterconst = util.format('Distance in miles: %d\nDistance in kilometers: %.2f', miles, kilometers);
//console.log(converterconst);




