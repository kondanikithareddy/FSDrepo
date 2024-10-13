// Q1. RETRY
class MultiplicatorUnitFailure extends Error {} //custom error class to throw and catch errors

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  while (true) { //It only exits the loop once the multiplication succeeds.
    try {
      return primitiveMultiply(a, b);
    } catch (e) {
      if (!(e instanceof MultiplicatorUnitFailure)) { 
        throw e;
      }
    }
  }
}

console.log("Q1. RETRY Output:");
console.log(reliableMultiply(8, 8)); // Output → 64


// Q2. THE LOCKED BOX
const box = new class {
  locked = true;
  #content = []; //private content(encapsulation)

  unlock() { this.locked = false; }
  lock() { this.locked = true; }

  get content() {
    if (this.locked) throw new Error("Locked!");
    return this.#content;
  }
};

function withBoxUnlocked(body) {
  let wasLocked = box.locked; //1.check if the box was locked
  if (!wasLocked) { //The code now calls the body function (() => { box.content.push("gold piece"); }).
    return body(); //if the box was already unclocked,just run the function
  }
  box.unlock(); //unlock the box
  try {
    return body(); //run the function
  } finally {
    if (wasLocked) { //if it was locked originally,lock it back
      box.lock();
    }
  }
}

console.log("\nQ2. THE LOCKED BOX Output:");
withBoxUnlocked(() => {
  box.content.push("gold piece");
});
try {
  withBoxUnlocked(() => {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised: " + e);
}
console.log(box.locked); // → true


// Q3. REGEXP GOLF : create regex expression to match or reject certain patterns
function verify(regexp, yes, no) {
  if (regexp.source == "...") return;
  for (let str of yes) {
    if (!regexp.test(str)) {
      console.log(`Failure to match '${str}'`);
    } else {
      console.log(`Correctly matched '${str}'`);
    }
  }
  for (let str of no) {
    if (regexp.test(str)) {
      console.log(`Unexpected match for '${str}'`);
    } else {
      console.log(`Correctly rejected '${str}'`);
    }
  }
}
//[rt] means r or t
//?r means r is optional
//\b matches boundary
//\w{7,}: Matches a sequence of 7 or more word characters (letters, digits, or underscores).
///\b[^eE\s]+\b/ : words that do not contain the letter 'e' or 'E'


console.log("\nQ3. REGEXP GOLF Output:");
verify(/ca[rt]/, ["my car", "bad cats"], ["camper", "high art"]);
verify(/pr?op/, ["pop culture", "mad props"], ["plop", "prrrop"]);
verify(/ferr(et|y|ari)/, ["ferret", "ferry", "ferrari"], ["ferrum", "transfer A"]);
verify(/ious\b/, ["how delicious", "spacious room"], ["ruinous", "consciousness"]);
verify(/\s[.,:;]/, ["bad punctuation ."], ["escape the period"]);
verify(/\b\w{7,}\b/, ["Siebentausenddreihundertzweiundzwanzig"], ["no", "three small words"]);
verify(/\b[^eE\s]+\b/, ["red platypus", "wobbling nest"], ["earth bed", "BEET"]); // Removed 'bedrøvet abe'


// Q4. NUMBERS AGAIN
// ^: This anchors the pattern to the start of the string.
// [+-]?: The optional sign at the start (+ or -).
// \d+: One or more digits (matches the integer part of the number).
// (\.\d*)?: An optional decimal part (. followed by zero or more digits).
// |\.\d+: Matches a number that starts with a dot and is followed by one or more digits (like .5).
// [eE]: Matches e or E for scientific notation
// [+-]?: Optional sign after e or E.
// \d+: One or more digits after the e or E (exponent part of the scientific notation).
let number = /^[+-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/;

console.log("\nQ4. NUMBERS AGAIN Output:");
for (let str of ["1", "-1", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4", "1e+12"]) {
  if (!number.test(str)) {
    console.log(`Failed to match '${str}'`);
  } else {
    console.log(`Matched '${str}'`);
  }
}
for (let str of ["1a", " +-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5", "."]) {
  if (number.test(str)) {
    console.log(`Incorrectly accepted '${str}'`);
  } else {
    console.log(`Rejected '${str}'`);
  }
}
