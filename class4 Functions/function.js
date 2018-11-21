function sayHello(){
    console.log('Hello!');
}

console.log('start of program');
sayHello();
console.log('End of program');

// --------------------------------------

function hi(){

    var name = prompt('who are you')
    console.log(alert('hello ' + name))
}
hi()

// ---------------------------------------- The Return Property

function sayHello(){
    return "Hello!";
}

console.log("Start of program");
let results = sayHello();
console.log(result);
console.log("End of program");

// Declare function
function myFunction(){
    // Calculate return value
    // ...
    return returnvalue;
}
// Get return value from myFunction
var value = myFunction();
// ...