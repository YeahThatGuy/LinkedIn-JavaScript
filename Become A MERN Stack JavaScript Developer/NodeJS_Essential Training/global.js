/* Every Node.js file that we create is referred to as a module.
It contains its own code, and when we want to load other modules 
we must use the require() function, that is available to us on the global object.
import other modules with "require"
path ships with nodejs and gives tools to work with path strings */
const path = require("path");

// The path.basename() method returns the last portion of a path
console.log(`The file name is ${path.basename(__filename)}`);

// Gives the dirname https://nodejs.org/api/globals.html#globals_dirname
// console.log(__dirname);

//Give the full name and path to current file https://nodejs.org/api/globals.html#globals_filename
// console.log(__filename);
