
function countBs(str) {      // Function to count the number of 'B' characters in a string
    return countChar(str, 'B');  
  }
  
  function countChar(str, char) {  // function to count any particular character in a string 
    let count = 0; // initializing a count variable to count the number of times the character repeated
    for (let i = 0; i < str.length; i++) {    
      if (str[i] === char) {   // checks if the current character matches the specified character
        count++;  // if it matches, increments the count by 1 
      }
    }
    return count;  // returns the total number of characters 
  }
  
  console.log(countBs("BOB")); // returns 2 as B repeated twice 
  console.log(countChar("kakkerlak", "k")); // returns 4 as there are 4 k's in the given string 



//.....................lecture notes 
// // function sum(x,y){
// //     let result = x+y
// //     console.log("Sum : ", result)
// // }

// // let x=10, y=5
// // sum(x, y)

// // x=8, y=3
// // sum(x, y)

// // x=9, y=4
// // sum(x, y)


// //...............
// function sayhello(name){
//     console.log(`hello: ${name}`)
// }
// console.log(sayhello("IIIT Hyderabad"))


// //...............

// const hummu=function(factor){
//     const ingredient=function(amount, unit, name)
// }


// // function(factor){
// //     const ingredient=function(amount, unit, name)
// // }  all this is value of const hummus. this function is the value that is assigned to a variable hummus




// // function declaration:
//  function add(a,b){
//     return a+b
//  }

// // function expression-> better to use const 
//  const diff= function(a,b){
//     return a+b
//  }

// //  arrow functions-> syntactical changes from above function declsration
// const mul=(a,b) => {
//     body
// }

// // arrow function with 1 parameter

// const remainder=param1 => {
//     //body or logic
//     return param1
// }


// //arrow function with simple return 
// const div = param2 => param2/3
// div(2)
// // if no logic and want to return a value



// //hoisting
// add(2,3);



  