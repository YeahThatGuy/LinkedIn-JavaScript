// load modules with require..most modules hosted on npm and delivered by community
// core modules are those installed locally with nodeJS
const path = require("path");

// // __dirname points to current folder..path.join points the path to subfolders
// const dirUploads = path.join(__dirname, "www", "files", "uploads");

// console.log(dirUploads);

// Provides various utilities, like a timestamp
// util.log is deprecated
const util = require("util");

util.log(path.basename(__filename));

util.log(" ^ The name of the current file");

const v8 = require("v8");

// returns an object with heap stats
console.log(v8.getHeapStatistics());

// You can destructure a function from a module by covering the function in
// brackets during require, and calling it without referencing the module
// like below (not recommended as harder to understand where the functions comes from)
// const {getHeapStatistics} = require("v8");
// console.log(getHeapStatistics());