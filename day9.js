/*
.map() function is used used to create a new array buy changing each item in an existing array in some way. 
It doesn’t change the original array but instead makes a new one with the changed items.
*/

// Example 1
let fruits = ["apple", "banana", "cherry"];
let uppercasedFruits = fruits.map(function(fruit) {
  return fruit.toUpperCase();
});
console.log(uppercasedFruits); // Output: ["APPLE", "BANANA", "CHERRY"]
//Each fruit name in the array is converted to uppercase. The original fruits array remains unchanged, and a new array uppercasedFruits is created with the transformed values.


//Example 2
let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
  ];
  let names = users.map(function(user) {
    return user.name;
  });
  console.log(names); // Output: ["Alice", "Bob", "Charlie"]
//Here, each user object in the users array is passed through the .map() function, which extracts the name property and creates a new array names with just the names of the users.


//Example 3
let w1 = ["apple", "banana", "cherry", "date"];
let firstLetters = w1.map(function(word) {
  return word[0];
});
console.log(firstLetters); // ["a", "b", "c", "d"]
//This example transforms each word in the words array by taking the first letter of each word. The result is a new array firstLetters containing the first letters of each word in the original array.





/*.reduce() function
This function is used to take all the items in an array and combine them into a single value. This could be adding them up, finding the largest, or anything that combines the items together.
*/

// Example 1
let w2 = ["apple", "banana", "pear", "pineapple"];
let longestWord = w2.reduce(function(longest, word) {
  return word.length > longest.length ? word : longest;
}, "");
console.log(longestWord); // "pineapple"
//The function goes through each word and checks if it is longer than the current longest word. At the end, it gives you the longest word.


//Example 2
let num1 = [1, 2, 3, 4];
let sum = num1.reduce(function(total, number) {
  return total + number;
}, 0);
console.log(sum); // 10
//The function adds all the numbers together. It starts with 0 and adds each number in the list, giving you the total sum.


//Example 3
let cart = [
    { item: "apple", price: 1 },
    { item: "banana", price: 2 },
    { item: "cherry", price: 3 }
  ];
  let totalPrice = cart.reduce(function(total, product) {
    return total + product.price;
  }, 0);
  console.log(totalPrice); // 6
//The function adds up the prices of all the items in the shopping cart. It starts with 0 and adds each item's price, giving you the total cost.







/* .filter()
this function in JavaScript creates a new array with only the items that pass a certain test. The test is defined by you, and only the items that meet the criteria are kept.
*/

//Example 1
let num2 = [1, 2, 3, 4, 5, 6];
let oddNumbers = num2.filter(function(number) {
  return number % 2 !== 0;
});
console.log(oddNumbers); // [1, 3, 5]
//The function checks each number to see if it's odd (not divisible by 2). Only odd numbers are kept in the new array.


//Example 2
let numbers = [5, 12, 8, 21, 14];
let largeNumbers = numbers.filter(function(number) {
  return number > 10;
});
console.log(largeNumbers); // [12, 21, 14]
//The function checks each number to see if it's odd (not divisible by 2). Only odd numbers are kept in the new array.

//Example 3
let words = ["sun", "moon", "stars", "sky"];
let sWords = words.filter(function(word) {
  return word[0].toLowerCase() === 's';
});
console.log(sWords); // ["sun", "stars", "sky"]
//The function checks if each word starts with the letter 's'. Only words that start with 's' are kept in the new array.




