// 1. Flattening Arrays
let arrays = [[1, 2, 3], [4, 5], [6]];  // Array of arrays
// Use reduce to combine all arrays into one single array
let flattened = arrays.reduce((accumulator, currentArray) => accumulator.concat(currentArray), []);

// 'reduce' iterates over each sub-array in 'arrays', 
// 'accumulator' starts as an empty array, 
// and 'concat' merges 'currentArray' into 'accumulator' during each iteration
// The result is a single array with all the elements combined


console.log(flattened);  // Output the flattened array: [1, 2, 3, 4, 5, 6]







// 2. Custom Loop Function
function loop(value, test, update, body) {
    // Continue looping as long as the test function returns true
    while (test(value)) {
        body(value);  // Execute the body function with the current value
        value = update(value);  // Update the value for the next iteration
    }
}

loop(3, n => n > 0, n => n - 1, console.log);
// This will print 3, 2, and 1, decrementing the value each time









// 3. Every Function
function every(array, test) {
    // Check each element in the array
    for (let element of array) {
        // If any element does not pass the test, return false
        if (!test(element)) {
            return false;
        }
    }
    // If all elements pass the test, return true
    return true;
}

console.log(every([1, 3, 5], n => n < 10));  // Output: true, all numbers are less than 10
console.log(every([2, 4, 16], n => n < 10));  // Output: false, 16 is not less than 10
console.log(every([], n => n < 10));       // Output: true, an empty array passes the test by default
