/**4.3 Task 3: Average
Create a program that asks user for number and
calculates the average for them. Numbers will be asked
till the user enters a letter.
Hint! You can check whether a value is numeric with
isNaN().
 */


let givenNumbers = [];
let sum = 0;

process.stdout.write("\nThis program calculates the mean value of the numbers you enter from the keyboard.\nThe program will stop when you enter a letter.\n\n");

// Function to calculate average and exit
function calculateAndExit() {
    if (givenNumbers.length > 0) {
        const average = sum / givenNumbers.length;
        process.stdout.write("\n\nThe average is: " + average.toFixed(2) + "\n");
    }
    process.exit();
}

process.stdout.write("Enter a number (or a letter to finish): ");

process.stdin.on("data", function (inputFromUser) {
    let input = inputFromUser.toString().trim();

    if (!isNaN(input)) {
        // Check if the input is a number
        const number = parseFloat(input);
        givenNumbers.push(number);
        sum += number;
        process.stdout.write("Enter another number (or a letter to finish): ");
    } else {
        // If the input is not a number (e.g., a letter), calculate the average and exit
        calculateAndExit();
    }
    
});

