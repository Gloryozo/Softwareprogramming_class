// print out numbers from 0 to 10
for (let i = 0; i <= 10; i++){
    //print out current number
    process.stdout.write("\n" + i.toString());
}    
    //print out new line 
    process.stdout.write("\n");
    //print out numbers from 10 to 0
for (let j = 10; j >= 0; j--){
    process.stdout.write( "\n" + j.toString());
    process.exit();
}
