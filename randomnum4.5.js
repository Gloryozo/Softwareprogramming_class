/** 4.5 Task 5: Smallest and Largest with Random Numbers
1. Create a program with an 100 item array that is initialized with random numbers of range 0-1000.
• To create random numbers you can use Math.random () function.
2. Find the largest value in the array using a loop and print it out.
3. Find the smallest value in the array using a loop and print it out. */

//to create a blank array
let randomNumber = [];
//looping through a blank array
for (let i = 0; i < 100; i++){
    //to add a new item to thew array
    randomNumber.push(Math.floor(Math.random() * 1000));
}   
    //printing out random numbers using Math.random () function.
    process.stdout.write(randomNumber.toString());

    //printing the largest value in the array
    process.stdout.write("\nLargest number is "+  Math.max(...randomNumber));

    //printing the largest value in the array
    process.stdout.write("\nSmallest number is "+  Math.min(...randomNumber));


