function min(a, b) {   //function definition
    if (a < b) {    //checks the condition if a is minimum or b is minimum 
      return a;   //returns a value to console if a is minimum
    } else {
      return b;   //returns b value if b is minimum
    }
  }
  console.log(min(0, 10));  //prints respective minimum value 



function isEven(n) {     //function declaration which take a whole number 
if (n < 0) {                //if n is negative, it returns as (-(-n)) and makes 
                          //that number positive by recursively calling the function, it give true it it's even 
                          // and gives false if it's odd
    return isEven(-n); 
} else if (n === 0) {       //if n-2 becomes 0, it returns true
    return true;
} else if (n === 1) {        // if n-2 becomes 1 at the end it returns false as it is odd number 
    return false;
} else {
    return isEven(n - 2);   //recursively calls this function by reducing it with 2 numbers to get 0 or 1
}
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));



