/*: Numbers from 0 to 20
Create the same functionality but this time use Do-while loop*/

    //Create iterator variable
    let i = 0;
    do {
    
        //print given names
        process.stdout.write(i.toString() + " ");
        //increment iterator variable
        i++;
        
    } while(i <= 20) {
    //end program
    process.exit();
}


/**
Certainly! This code does the same thing as the previous one (printing numbers from 0 to 20), but this time it uses a "do-while loop." Let me explain it in simple terms:

Initialization: The code starts by creating a variable i and setting it to 0. This is the starting point for counting.

Do Something: Inside the do { ... } block, it does two things:

It prints the current value of i as a string, followed by a space.
It increments (increases) the value of i by 1.
Condition Check: After the do { ... } block, there's a while(i <= 20) condition. This means it will keep doing the things inside the do { ... } block as long as i is less than or equal to 20.

Ending the Program: At the end of the code, there's process.exit(); which is used to end the program.

So, when you run this code, it will start with i as 0 and keep adding 1 to i and printing the numbers until i becomes greater than 20. After that, it will end the program. The result will be the same as the previous code, printing numbers from 0 to 20 with spaces in between: 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
 */