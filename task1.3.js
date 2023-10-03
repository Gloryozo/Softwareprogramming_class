/*Extend the functionality from the previous task to:
1. Ask for the distance in meters.
2. Also convert the distance to following units:
o kilometers
o miles
o yards
o feet
o inches
o light years*/


// ask user to put in distance in miles
process.stdout.write("Please enter a distance in meters:\n");
//Read users input
process.stdin.on("data", function( inputFromUser ){
//set users distance in miles as a variable
// use parsefloat to assign number of decimals needed
let givenInput = parseFloat(inputFromUser)
//multiply users value by the constant for converting from miles to km ()
// used padstart to convert values to have at least three decimal places and will be padded with spaces to align them properly in the output.
let km = Number(givenInput / 1000).toFixed(3).padStart(8, ' ');
let miles = Number(givenInput / 1609.34).toFixed(3).padStart(8, ' ');
let yards = Number(givenInput * 1.09361).toFixed(3).padStart(8, ' ');
let feet = Number(givenInput * 3.28084).toFixed(3).padStart(8, ' ');
let inches = Number(givenInput * 39.3701).toFixed(3).padStart(8, ' ');
let lightyears = Number(givenInput / 9.461e+15).toFixed(3).padStart(8, ' ');

//Print out the distance in meters
process.stdout.write("The distance of " + givenInput + "meters is equivalent to " + km + "km" + "\n")
process.stdout.write("The distance of " + givenInput + "meters is equivalent to " + miles + "miles" + "\n")
process.stdout.write("The distance of " + givenInput + "meters is equivalent to " + yards + "yards" + "\n")
process.stdout.write("The distance of " + givenInput + "meters is equivalent to " + feet + "feet" + "\n")
process.stdout.write("The distance of " + givenInput + "meters is equivalent to " + inches + "inches" + "\n")
process.stdout.write("The distance of " + givenInput + "meters is equivalent to " + lightyears + "lightyears" + "\n")
// to exit the process
process.exit()
});
