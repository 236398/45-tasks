"use strict";
function makeshirt(size = "large", message = "I love Typescript") {
    return console.log(`Size:${size},Message: ${message}`);
}
//default size with default message, 
makeshirt();
//medium shirt with default message, 
makeshirt("small");
//a shirt of any size with a different message.
makeshirt("medium", "Hello guyz!");
