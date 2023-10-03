//Ask user to enter their name
process.stdout.write("Enter your name:" + "\n");
//Read users input
process.stdin.on("data", function( inputFromUser ) {
    //convert users input from Buffer to String
    let name = inputFromUser.toString().trim();
    //Repeat five times
    //Create iterator variable
    let i = 0;
    do {
    
        //print given names
        process.stdout.write("\n" + name);
        //increment iterator variable
        i++;
        
    } while(i < 5)
    //end program
    process.exit();
})