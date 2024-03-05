interface item {
    name:string
    price:number
}
// create 2 objects
const book: item ={
    name: "Novel",
    price: 1800
}
const apple: item ={
    name: "apple",
    price: 150
}
console.log(`name: ${book.name},price:${book.price}`)
console.log(`name: ${apple.name},price:${apple.price}`)
