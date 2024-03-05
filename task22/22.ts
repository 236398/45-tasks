function fruit(fruit:string,colour:string){
    return{
        fruit,
        colour
    };
}
const fruits=[
    fruit("dragonfruit", "pink"),
    fruit("kiwi", "green"),
    fruit('apple', 'red')
];

let invalidIndex = 10;

console.log("fruti at ", invalidIndex, fruit[invalidIndex] )

if(invalidIndex > 2){
    invalidIndex = 1;
    console.log("fruits at index ", invalidIndex , fruits[invalidIndex])
}

