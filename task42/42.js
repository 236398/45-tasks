"use strict";
const magicians = ["Dynamo", "Ricky Jay", "Dai Vernon"];
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `${magicians[i]} the Great`;
    }
}
console.log("Original magician names:");
show_magicians(magicians);
// Modify the array of magician names by adding the phrase the Great to each magician’s name
make_great(magicians);
// Print the modified array of magician names
console.log("\nModified magician names:");
show_magicians(magicians);
