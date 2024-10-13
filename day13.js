const fs = require('fs').promises; // Import the promises API from fs module

// Function to read the contents of a file
function textFile(filename) {
    return fs.readFile(filename, 'utf8');
}

// Q1. QUIET TIMES
//This function aims to count activities for each hour of a specific day of the week across multiple log files
async function activityTable(day) {
    try { 
        //awaits until the content of the file is loaded after file is read moves further
        let logFileList = await textFile("camera_logs.txt");

        //This splits the file content into an array and removes any empty lines.
        let logFiles = logFileList.split('\n').filter(Boolean); // Filter out any empty lines

        // Initialize an array with 24 zeros for each hour
        let hourlyCounts = Array(24).fill(0);

        // Process each log file
        //await Promise.all() ensures that the program only continues after all log files have been processed 
        await Promise.all(logFiles.map(async (logFile) => {
            let logContent = await textFile(logFile); 
            //For each log file, its content is read asynchronously, then split into an array of timestamps.
            let timestamps = logContent.split('\n').filter(Boolean);
            //Each timestamp is converted to a Date object. If it matches the specified day, the corresponding hour count is incremented.
            timestamps.forEach((timestamp) => {
                let date = new Date(Number(timestamp));
                if (date.getDay() === day) {
                    hourlyCounts[date.getHours()]++; //increments the count for that hour in hourlyCounts.
                }
            });
        }));

        return hourlyCounts;
    } catch (error) {
        console.error("Error processing logs:", error);
    }
}

// Q2. REAL PROMISES
function activityTableWithoutAsync(day) {
    return textFile("camera_logs.txt")
        .then(logFileList => {
            let logFiles = logFileList.split('\n').filter(Boolean);
            let hourlyCounts = Array(24).fill(0);
            
            // Create an array of promises for processing each log file
            let logPromises = logFiles.map(logFile => {
                return textFile(logFile)
                    .then(logContent => {
                        let timestamps = logContent.split('\n').filter(Boolean);
                        timestamps.forEach((timestamp) => {
                            let date = new Date(Number(timestamp));
                            if (date.getDay() === day) {
                                hourlyCounts[date.getHours()]++;
                            }
                        });
                    });
            });

            // Wait for all promises to resolve
            return Promise.all(logPromises).then(() => hourlyCounts);
        })
        .catch(error => {
            console.error("Error processing logs:", error);
        });
}

// Q3. Building Promise.all
function Promise_all(promises) {
    return new Promise((resolve, reject) => {
        let results = [];
        let remaining = promises.length; // This variable tracks how many promises still need to resolve.

        if (remaining === 0) {
            resolve([]);
            return;
        }
//loop over each promise in the array and handle it individually.
        promises.forEach((promise, index) => {

            //works for non-promise values like numbers or strings
            Promise.resolve(promise).then(value => {
                results[index] = value;
                remaining--;

                if (remaining === 0) {
                    resolve(results);
                }
            }).catch(reject); // Reject the entire Promise_all if any promise fails
        });
    });
}

// Helper function for testing Promise_all
function soon(val) {
    return new Promise(resolve => {
        setTimeout(() => resolve(val), Math.random() * 500);
    });
}

// Output for Q1
activityTable(1)
    .then(table => {
        console.log("----- Q1. QUIET TIMES -----");
        console.log("Activity Table for Monday:", table);
        // Assuming activityGraph function is available in your environment
        console.log("Activity Graph:", activityGraph(table));
    });

// Output for Q2
activityTableWithoutAsync(6)
    .then(table => {
        console.log("----- Q2. REAL PROMISES -----");
        console.log("Activity Table for Saturday:", table);
        // Assuming activityGraph function is available in your environment
        console.log("Activity Graph:", activityGraph(table));
    });

// Output for Q3
Promise_all([])
    .then(array => {
        console.log("----- Q3. Building Promise.all -----");
        console.log("This should be []:", array);
        return Promise_all([soon(1), soon(2), soon(3)]);
    })
    .then(array => {
        console.log("This should be [1, 2, 3]:", array);
        return Promise_all([soon(1), Promise.reject("X"), soon(3)]);
    })
    .catch(error => {
        console.log("Expected failure:", error);
    });
