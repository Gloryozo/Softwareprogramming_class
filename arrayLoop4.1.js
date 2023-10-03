/*Create a program with the following arrays:
1. an integer array with five items: 5, 7, 32, 31 and 8.
2. a double array with three items: 12.4, -13.55 and 67.44,
3. a string array with four items: “Helsinki”, “Lissabon”,
“New York” and “Shanghai”.
Then print out the following:
- “The value in the index number 3 is: “ and the value from the string array.
- “The fourth item in the int array is: “ and the value from the int array.
- “In the double array there are xx items” where xx is the size of the array.
- The whole content of the integer array with a loop.
- The whole content of the double array from the last item to the first.
- Lastly, in a loop go through the string array and set all the values to be “empty” and print it out as a
comma separated string.
*/

let integerArray = [5, 7, 32, 31, 8];
let doubleArray = [12.4, -13.55, 67.44];
let countryArray = ["Helsinki", "Lissabon", "New York", "Shanghai"];

// Print the value in the index number 3 from the string array
process.stdout.write("The value in the index number 3 is: " + countryArray[3] + "\n");

// Print the fourth item in the integer array
process.stdout.write("The fourth item in the int array is: " + integerArray[3] + "\n");

// Print the number of items in the double array
process.stdout.write("In the double array, there are " + doubleArray.length + " items\n");

// Print the whole content of the integer array using a loop
process.stdout.write("The whole content of the integer array:\n");
for (let i = 0; i < integerArray.length; i++) {
    process.stdout.write(integerArray[i] + "\n");
}

// Print the content of the double array from the last item to the first
process.stdout.write("Content of the double array from the last item to the first:\n");
for (let i = doubleArray.length - 1; i >= 0; i--) {
    process.stdout.write(doubleArray[i] + "\n");
}

// Set all values in the string array to "empty"
for (let i = 0; i < countryArray.length; i++) {
    countryArray[i] = "empty";
}

// Print the string array with values set to 'empty' as a comma-separated string
process.stdout.write("String array with values set to 'empty': " + countryArray.join(", ") + "\n");

