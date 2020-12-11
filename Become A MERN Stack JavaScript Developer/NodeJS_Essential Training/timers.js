// Timers run asynchronously

const waitTime = 5000;
const waitInterval = 500;
let currentTime = 0;

// adds a delay to current time
// const incTime = () => {
//     currentTime += waitInterval;
//     console.log(`waiting ${currentTime / 1000} seconds`);
// };

// adds a delay to current time and tracks progress
const incTime = () => {
    currentTime += waitInterval;
    // gets the percentage progress
    const p = Math.floor((currentTime / waitTime) * 100);
    // gets rid of the previous line written to the terminal (i.e. waiting ... 10%)
    process.stdout.clearLine();
    // moves the cursor back to the start of the line
    process.stdout.cursorTo(0);
    // writes the percentage progress in the terminal
    process.stdout.write(`waiting ... ${p}%`);
};

console.log(`setting a ${waitTime / 1000} second delay`);

// const timerFinished = () => console.log("done");

// // executes incTime indefinitely after each waitInterval
// setInterval(incTime, waitInterval);

// clear the interval after it reaches waitTime (3s in this case)
const timerFinished = () => {
    // clears the interval to stop setInterval executing indefinitely
    clearInterval(interval);
    // removes the previous line
    process.stdout.clearLine();
    // sets cursor to start of line
    process.stdout.cursorTo(0);
    console.log("done");
};

const interval = setInterval(incTime, waitInterval);

// waits for 3 seconds and runs timerFinished function after that
setTimeout(timerFinished, waitTime);
