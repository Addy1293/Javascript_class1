// Whats a condition?


var number = Number(prompt("Enter a number:"));
if (number > 0) {
    console.log(number + " is positive");
}

// Basic syntax:

// if (condition) {
        // Statements executed whem the condition is true 
// }


var age = Number(prompt("Enter your age:" ));
if (age <= 12){
    console.log(age + " is correct");
}
else{
    console.log("if higher leave this page")
}
// ----------------------------------------------------

var number = Number(prompt("Enter a number;"));
if (number > 0) {
    console.log(number + " is positive");
} else {
    console.log(number + " is negative or zero")
}
// -----------------------------------------------------
var x = Number(prompt("Enter a number:"));
if (x > 0) {
    console.log(x + " is positive");
} else if (x < 0) {
    console.log(x + " is negative");
} else {
    console.log(x + " is zero");
}
// ------------------------------------------------
// Lets write a program that helps a students decide what to wear based on the weather using the if/else/if-else statement:
//  Sunny - shorts
//  windy - wind breaker
//  rainy - raincoat
//  snowy - puffy jacket

var weather = (prompt("What is the weather today?:"));
if(weather === "cloudy"){
    console.log(" wind breaker");
} else if(weather === "Sunny"){
    console.log(" Shorts");
} else if(weather === "rainy"){
    console.log(" raincoat");
} else if(weather === "snowy"){
    console.log(" puffy jacket");
} else {
    console.log("Not a valid weather type");
}
// ============================================================================



