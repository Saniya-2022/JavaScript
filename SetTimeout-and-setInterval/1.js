// ==========================================
// JavaScript setTimeout() and setInterval()
// ==========================================

// setTimeout()
// Executes only once after the specified delay.

console.log("Program Started");

setTimeout(() => {
    console.log("This message appears after 2 seconds.");
}, 2000);

console.log("Program Continues");

// ------------------------------------------

// setInterval()
// Executes repeatedly after every specified interval.

let count = 1;

const intervalId = setInterval(() => {

    console.log("Count:", count);

    count++;

    if (count > 5) {
        clearInterval(intervalId);
        console.log("Interval Stopped");
    }

}, 1000);