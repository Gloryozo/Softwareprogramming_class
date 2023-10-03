function calculate(number1, number2, calculation) {
    // Your code goes here
    
    let result;
    
 If (calculation === "+"){
      result = number1 + number2;
    
    } else if (calculation === "-"){
        result = number1 - number2;
    process.stdout.write(result);
   
    }else if (calculation === "*"){
      result = number1 * number2;
    process.stdout.write(result);
    
    }else if (calculation === "/"){
        if (number2 !== 0) {
      result = number1 / number2;
    process.stdout.write(result);
    }else {
      result = "invalid result";
    }
    process.stdout.write(result.toString());
}
}






function calculateDiscount(price) {
    // Your code goes here
    let discountedPrice;
    if (price < 50){
        discountedPrice === (price * 0); 
        process.stdout.write(discountedPrice);
    }else if (price > 50 && price <= 101){
        discountedPrice === (price * 0.1);
        process.stdout.write(discountedPrice);
    }else if (price >= 101 && price <= 500){
        discountedPrice === (price * 0.2);
        process.stdout.write(discountedPrice);
        }else if (price >= 500){
        discountedPrice === (price * 0.5); 
        process.stdout.write(discountedPrice);  
        }else {
        console.log("invalid price");
        return;
        }
        console.log("Discounted Price: " + discountedPrice.toFixed(2));
}