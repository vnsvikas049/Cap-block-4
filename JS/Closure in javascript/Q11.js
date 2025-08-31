// Outer function
function outerFunction() {
    let message = "Hello, I am a closure!";

    // Inner function (closure)
    function innerFunction() {
        console.log(message); 
    }

    return innerFunction; // return the inner function
}


const myClosure = outerFunction();  

myClosure(); 
