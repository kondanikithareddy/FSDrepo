// 1.Complex Password Validator
function validatePasswords(passwords) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%&*])[A-Za-z\d@#$%&*]{12,20}$/;
    return passwords.filter(password => regex.test(password)); //.test is to check regex expressions
}
const passwords = [
    "Pass@word123",        // Fails (length less than 12)
    "StrongPassw@rd12345", // Passes
    "weakpassword123",     // Fails (no uppercase letter or special character)
    "InvalidPassword@#",   // Fails (no digit)
    "GoodPassword@123"     // Passes
];
console.log("---- Question 1: Valid Passwords ----");
console.log(validatePasswords(passwords));
console.log(""); 


//2.Extract and Modify Data from a Log File
function extractAndRedact(log) {
    const regex = /(\d{4}-\d{2}-\d{2}) \d{2}:\d{2}:\d{2} - Error: User (\w+) failed to login from IP (\d+\.\d+\.\d+\.\d+)/;
    let match = log.match(regex); //.match checks if the log string matches the regex pattern
    if (match) {
        //extract
        const [fullMatch, date, username, ip] = match;
        console.log(`Date: ${date}, Username: ${username}, IP Address: ${ip}`);
    }
    // Redact the IP address
    return log.replace(/\d+\.\d+\.\d+\.\d+/, "[REDACTED]");
}
const log = "2024-08-28 14:32:01 - Error: User john_doe failed to login from IP 192.168.1.1";
console.log("---- Question 2: Modified Log ----");
console.log(extractAndRedact(log));
console.log("");


//3.Basic Try-Catch Block (Division by Zero)
function divideNumbers(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    } catch (error) {
        console.error(error.message);
        return null; // Return null if there's an error
    }
}
console.log("---- Question 3: Division Results ----");
console.log("Division result (10 / 2):", divideNumbers(10, 2)); 
console.log("Division result (10 / 0):", divideNumbers(10, 0)); 
console.log(""); 


//4.Handling JSON Parsing Errors
//parse json string into object
function parseJSON(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error("Error parsing JSON:", error.message);
        return {}; // Return empty object if there's an error
    }
}
const validJSON = '{"name": "John", "age": 30}';
const invalidJSON = '{"name": "John", age: 30}'; // Missing quotes around "age"
console.log("---- Question 4: JSON Parsing Results ----");
console.log("Parsed valid JSON:", parseJSON(validJSON)); // Should return parsed object
console.log("Parsed invalid JSON:", parseJSON(invalidJSON)); // Should return {} and log error