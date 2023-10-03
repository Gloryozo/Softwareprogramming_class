/**4.6 Task 6: Battleship
Create a 5x5 Battleship game using a multidimensional array. Use asterisks to mark the ships. Ask the user
for coordinates to shoot and give feedback to the user whether they hit a ship or not. Keep asking for as
long as there are ships left. Keep count of how many shots the player needed. */

// Create an empty 2D array named battleship
const board_size = 5
let battleship = new Array();
// Use a loop to initialize the rows of the 2D array
for(let i = 0; i < board_size; i++) {
   for (let j = 0; j < board_size; j++){
    // For each row, create a new array and initialize it with 'x' values
    battleship[i] = new Array('x\n', 'x\n', "x\n", "*\n", "x\n", "x\n");
    }
}
//let set the ships 
battleship[1][3] = "*";
battleship[3][0] = "*";
battleship[1][3] = "*";
battleship[3][1] = "*";
battleship[1][2] = "*";
battleship[1][1] = "*";
let numberOfShips = 6;
//variables of coordinates
let x,y; 
//Variable for sunken ship
let sunkShip = 0
let shots = 0

//user inputs two coordinates 
process.stdout.write("Enter x and y coordinates seprated by space: \n")
//Read users input
process.stdin.on("data", function( inputFromUser ){
   
    // toString() converts input to string, split splits the string in to parts divided by space
    let userInput = inputFromUser.toString().split(" ");
    let x = Number(userInput[0]);
    let y = Number(userInput[1]);

    // Check whether shot is within range
    if (x > board_size - 1 || y > board_size - 1 ) {
        process.stdout.write("Input out of range. Please enter valid coordinates.");
    } else {
        if( battleship[x][y] == '*' ) {
            process.stdout.write("You hit a ship!\n");
            battleship[x, y] = ' '; // Hit -> let's set this to empty
            sunkShip++; // Let's increase the number of ships hit
        } else {
            process.stdout.write("Miss!\n");
        }
        shots++; // Let's increase the number of shots
    }

    if (sunkShip < numberOfShips) { // Loop for as long as there are ships to sink
        process.stdout.write("Enter x and y coordinates separated by space: ");
    } else {
        process.stdout.write("All ships sunk! You needed " + shots + " shots.\n\n\n");
        process.exit();
    }
})
