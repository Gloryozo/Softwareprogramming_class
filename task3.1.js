/* 3.1 Task 1: Numbers from 0 to 20
Create a code that prints out numbers from 0 to 20. Use
while loop */

// print out numbers from 0 to 20
for (let i = 0; i <= 20; i++){
    //print out current number
    process.stdout.write( i.toString() + " " );
}    


/** Initialization: The loop starts with let i = 0, which means it begins at 0.

Condition: It will keep running as long as i is less than or equal to 20 (i <= 20).

Update: After each run of the loop, the value of i is increased by 1 (i++), so it goes from 0 to 1, 2, 3, and so on, until it reaches 20.

Printing: Inside the loop, there's a line of code that prints the current value of i. process.stdout.write(i.toString() + " ") does this. It converts i to a text (string) format using i.toString(), and then it adds a space after it and prints it to the screen.

So, when you run this code, it will print the numbers from 0 to 20, separated by spaces, like this: 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
 */