// Q1. RETRY
class MultiplicatorUnitFailure extends Error {} // Custom error class to throw and catch multiplication errors

// Function to simulate multiplication with a random chance of failure
function primitiveMultiply(a, b) {
  // 20% chance to succeed, 80% chance to throw an error
  if (Math.random() < 0.2) {
    return a * b; // Successful multiplication
  } else {
    throw new MultiplicatorUnitFailure("Klunk"); // Simulate failure
  }
}

// Function that repeatedly tries to multiply until it succeeds
function reliableMultiply(a, b) {
  while (true) { // Loop indefinitely until successful
    try {
      return primitiveMultiply(a, b); // Try multiplying
    } catch (e) {
      // If an error occurs, check if it's a MultiplicatorUnitFailure
      if (!(e instanceof MultiplicatorUnitFailure)) {
        throw e; // Rethrow if it's a different error
      }
      // If it's a failure, just continue the loop and retry
    }
  }
}

console.log("Q1. RETRY Output:");
console.log(reliableMultiply(8, 8)); // Output → 64


// Q2. THE LOCKED BOX
const box = new class {
  locked = true; // Initially, the box is locked
  #content = []; // Private content array (encapsulation)

  // Method to unlock the box
  unlock() { this.locked = false; }
  // Method to lock the box
  lock() { this.locked = true; }

  // Getter for the content
  get content() {
    if (this.locked) throw new Error("Locked!"); // Throws an error if trying to access locked content
    return this.#content; // Return the private content
  }
};

// Function to execute a given body function with the box unlocked
function withBoxUnlocked(body) {
  let wasLocked = box.locked; // Check if the box was locked initially
  if (!wasLocked) { // If it's already unlocked, just run the function
    return body(); // Execute the body function
  }
  box.unlock(); // Unlock the box
  try {
    return body(); // Execute the body function while the box is unlocked
  } finally {
    // This block runs regardless of whether an error occurred or not
    if (wasLocked) { // If it was locked originally, lock it back
      box.lock();
    }
  }
}

console.log("\nQ2. THE LOCKED BOX Output:");
withBoxUnlocked(() => {
  box.content.push("gold piece"); // Add a gold piece to the box content
});
try {
  withBoxUnlocked(() => {
    throw new Error("Pirates on the horizon! Abort!"); // Simulate an error
  });
} catch (e) {
  console.log("Error raised: " + e); // Catch and log the error
}
console.log(box.locked); // Check if the box is locked again (should be true)


/** 
 * Q3. REGEXP GOLF: Create regex expressions to match or reject certain patterns
 * The verify function tests the given regex against arrays of yes and no examples
 */
function verify(regexp, yes, no) {
  // If the regexp is just "...", don't do anything (placeholder)
  if (regexp.source == "...") return;
  for (let str of yes) {
    if (!regexp.test(str)) {
      console.log(`Failure to match '${str}'`); // Log failure to match expected strings
    } else {
      console.log(`Correctly matched '${str}'`); // Log correct matches
    }
  }
  for (let str of no) {
    if (regexp.test(str)) {
      console.log(`Unexpected match for '${str}'`); // Log unexpected matches
    } else {
      console.log(`Correctly rejected '${str}'`); // Log correct rejections
    }
  }
}

// Testing various regex patterns
console.log("\nQ3. REGEXP GOLF Output:");
verify(/ca[rt]/, ["my car", "bad cats"], ["camper", "high art"]); // Matches "car" or "cat"
verify(/pr?op/, ["pop culture", "mad props"], ["plop", "prrrop"]); // Matches "prop" or "rop"
verify(/ferr(et|y|ari)/, ["ferret", "ferry", "ferrari"], ["ferrum", "transfer A"]); // Matches variations of "ferr"
verify(/ious\b/, ["how delicious", "spacious room"], ["ruinous", "consciousness"]); // Matches words ending with "ious"
verify(/\s[.,:;]/, ["bad punctuation ."], ["escape the period"]); // Matches whitespace followed by punctuation
verify(/\b\w{7,}\b/, ["Siebentausenddreihundertzweiundzwanzig"], ["no", "three small words"]); // Matches words with 7 or more characters
verify(/\b[^eE\s]+\b/, ["red platypus", "wobbling nest"], ["earth bed", "BEET"]); // Matches words without 'e' or 'E'


// Q4. NUMBERS AGAIN
// Regular expression to match valid numbers, including decimals and scientific notation
let number = /^[+-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/;

console.log("\nQ4. NUMBERS AGAIN Output:");
for (let str of ["1", "-1", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4", "1e+12"]) {
  if (!number.test(str)) {
    console.log(`Failed to match '${str}'`); // Log failure to match valid numbers
  } else {
    console.log(`Matched '${str}'`); // Log successful matches
  }
}
for (let str of ["1a", " +-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5", "."]) {
  if (number.test(str)) {
    console.log(`Incorrectly accepted '${str}'`); // Log incorrect matches
  } else {
    console.log(`Rejected '${str}'`); // Log correct rejections
  }
}
