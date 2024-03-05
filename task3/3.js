"use strict";
let person = "John Doe";
let person1 = person.toUpperCase();
console.log(person1);
let person2 = person.toLowerCase();
console.log(person2);
let name3 = "john doe";
let name4 = name3.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
console.log(name4);
