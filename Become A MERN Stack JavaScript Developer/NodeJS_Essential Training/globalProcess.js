// console.log(process.pid);
// console.log(process.versions.node);

/* The process.argv property returns  array containing 
command-line arguments passed when the Node.js process was launched. */
// console.log(process.argv);

// Send arguments when NodeJS is run
// const [,,firstName, lastName] = process.argv;
// console.log(`Your name is ${firstName} ${lastName}`);

// Grab from process.argv array the index of the flag "--greeting" 
// for example and return the next value
const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
};

const greeting = grab("--greeting");
const user = grab("--user");

console.log(`${greeting} ${user}`);

// Run with flags like node globalProcess --user DefaultUser --greeting "Hi there,"