/* read and write data; process.stdin and process.stdout */

// process.stdout.write("Hello ");
// process.stdout.write("World \n\n\n");

const questions = [
    "What is your name?",
    "What would you rather be doing?",
    "What is your preferred programming language?"
];

// Write particular question to CLI depending on index
const ask = (i=0) => {
    process.stdout.write(`\n\n ${questions[i]}`);
    process.stdout.write(` > `);
}

// Call ask to write first question (default i=0)
ask();

// // process.stdin.on event to listen for data events from CLI
// // convert binary data to string and remove white spaces with trim
// process.stdin.on("data", data => {
//     process.stdout.write(`\n\n ${data.toString().trim()} \n\n`);
//     // process.exit to exit the event
//     process.exit();
// });

// Gather the answers from CLI, listen for typing events, ask all questions
const answers = [];
process.stdin.on("data", data => {
    answers.push(data.toString().trim());

    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
});

// Exit handler for an exit listener event that presents all the provided answers
process.on("exit", () => {
    // Array destructuring to unpack data from answers array 
    // into 3 variables
    const [name, activity, lang] = answers;
    console.log(`
    
    Thank you for your answers!
    Hey, ${name}, I suggest ${activity} now and writing some ${lang} tonight.

    `);
});