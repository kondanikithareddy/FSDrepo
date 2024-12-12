/*
function pushh(start, end) {
    let result = [];
    for (let i = start; i <= end; i++) {
      result.push(i);
    }
    return result;
  }
  console.log(pushh(1, 5));

................................................
  function sumArray(numbers) {
    let total = 0;
    for (let number of numbers) {
      total += number;
    }
    return total;
  }
  console.log(sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
  
  
....................................................
  function pushArray(start, end, step = 1) {
    let arr = [];
    
    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            arr.push(i);
        }
    } else if (step < 0) {
        for (let i = start; i >= end; i += step) {
            arr.push(i);
        }
    }
    
    console.log(sum(arr));  // prints the sum of the numbers in the array
    return arr;
}

function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

console.log(pushArray(1, 10, -1));  
  */
  

function pushArray(start, end, step=1) {
let arr = [];
for (let i = start; i <= end; i += step) {
    arr.push(i);
}
console.log(sum(arr));  // prints the sum of the numbers in the array
return arr;
}


function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(pushArray(1, 10, 4));


//.......................................


// Reverse Array
console.log("Reverse Array");
function reverseArray(arrValue) {
    let result = [];
    for (let i = arrValue.length - 1; i >= 0; i--) {
        result.push(arrValue[i]);
    }
    return result;
}
console.log(reverseArray([1, 2, 3]));  // prints [3,2,1]

console.log("Reverse Array In Place");
function reverseArrayInPlace(arrValue) {
    let length = arrValue.length;
    for (let i = 0; i < Math.floor(length / 2); i++) {
        let temp = arrValue[i];
        arrValue[i] = arrValue[length - 1 - i];
        arrValue[length - 1 - i] = temp;
    }
}
let Tarray = [11, 12, 13];
reverseArrayInPlace(Tarray);
console.log(Tarray); // prints [13, 12, 11]

//......................................................

// Function to convert an array to a linked list
function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = { value: array[i], next: list };
    }
    return list;
}

// Function to convert a linked list to an array
function listToArray(list) {
    let array = [];
    while (list) {
        array.push(list.value);
        list = list.next;
    }
    return array;
}

// Function to add an element to the front of a linked list
function prepend(element, list) {
    return { value: element, next: list };
}

// Function to get the element at a specific index from a linked list
function index(list, index) {
    let current = list;
    for (let i = 0; i < index; i++) {
        if (current == null) return undefined; // Return undefined if index is out of bounds
        current = current.next;
    }
    return current ? current.value : undefined; // Return the value at the index position or undefined
}

// Test the functions with sample data
console.log("Convert Array to List");
console.log(arrayToList([10, 20])); 

console.log("Convert List to Array");
console.log(listToArray(arrayToList([10, 20, 30]))); 

console.log("Add to Front");
console.log(prepend(10, prepend(20, null))); 

console.log("Find Element at Index");
console.log(index(arrayToList([10, 20, 30]), 1));
