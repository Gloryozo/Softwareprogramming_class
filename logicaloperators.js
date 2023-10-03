let x = 1;
let y = 5;
// x needs to be outside the range of 1-10
if (x >= 0 && x <= 11) {
process.stdout.write( x + " is within range 1 - 10");
}

// x needs to be outside the range of 1-10
(y < 0 || y > 10) {
    process.stdout.write(x + "is outside range 1 - 10")
}
// x needs to be within and y outside the range of 1-10
    if ((x >= 1 && x <= 10) && (y < 0 || y > 10)) {
    process.stdout.write("\n" + x + "is within range 1 - 10 and " + y + "is outside range 1- 10");
    }