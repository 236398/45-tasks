
let str1 = "essa"
let str2 = "hasan"

console.log(str1 === str2, "I predict false")
console.log(str1 !== str2, "I predict true")
console.log(str1.length < str2.length, "I predict true")

console.log(str1.toLowerCase() === str2.toLowerCase(), "I predict false")
console.log(str1.toLowerCase() !== str2.toLowerCase(), "I predict true")
console.log(str1.toLowerCase() === str1, "I predict true")


let num1 = 10;
let num2 = 20;

console.log(num1 === num2, "I predict false");

console.log(num1 !== num2, "I predict true");

console.log(num1  >  num2, "I predict false");

console.log(num1  <  num2, "I predict true");

console.log(num1 >=  num2,  "I predict false");

console.log(num1 <=  num2,"I predict true");

let num3 = num1 + num2;

console.log(num1 >= num2 || num3 >= num2, "I predict true");

console.log(num1 >= num2 && num3 >= num2, "I predict true");

console.log(num1 >= num2 && num3 >= num2, "I predict false");

console.log(num1 >= num2 || num3 <= num2, "I predict false");

let arr = ["a", "b", "c", "d"];

console.log(arr.includes("a"), "I predict true" );

console.log(arr.includes("e"), "I predict false" );