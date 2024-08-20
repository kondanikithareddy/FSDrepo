// printing only fizz and buzz first
// for (let i = 1; i <= 100; i++){
//     if (i % 3 === 0){
//         console.log(i, "Fizz"); 
//     }
//     else if(i % 5 === 0){
//         console.log(i,"Buzz");
//     }
// }


// includes fizzbuzz too without printing number
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } 
}

// // includes fizzbuzz too with printing number
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(i, "FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log(i, "Fizz");
//     } else if (i % 5 === 0) {
//         console.log(i, "Buzz");
//     } 
// }




// using ternary operator
// for (let i = 1; i <= 100; i++) {
//     console.log(
//         (i % 3 === 0 && i % 5 === 0) ? `${i}, FizzBuzz` :
//         (i % 3 === 0) ? `${i}, Fizz` :
//         (i % 5 === 0) ? `${i}, Buzz`: ""
//     );
// }

