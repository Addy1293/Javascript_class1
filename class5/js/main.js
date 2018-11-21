// OBJECTS--------------------------------------
// what is an object
// definition of something that has form
// occupying space, consist of matter
// declaring an OBJECT

// var pen = {
//     color:"blue",
//     brand:"bic",
//     type:"ballpoint"
// }
// commer not needed at the end of TYPE

// Whats an OBJECT

// think about objects in the non - programming sense,
// like a pen. A pen can have different ink colors, be manufactured by different people,
// have a different tip, and many other properties.

// Similarly, an object in programming is an entity that has properties.
// Each property defines a charicteristic of the object.
// A property can be information associated with the object(the color of the pen) or action(the pens ability to write).

// What does this have to do with code?

// 



let pen = {
    type: "ballpoint",
    color: "blue",
    brand: "bic"
};

// *========

// Create a new object in Javascript by setting its properties within a pair of curly brackets: { .....
// };

// ==========

// The above code defines a variable name pen whose 
// value is an object: you can therefore say pen is an 
// object. This object has three properties: type, color, and brand.
// Each property has a name and a value and is seperated by a comma, (except the last one).

// Getting a value

// After creating a object, you can access the value of
// its properties using the dot notation such as myObject.myProperty.

// console.log(pen.type);
// console.log(pen.color);
// console.log(pen.brand); 

// console.log("My pen is "+pen.type + " the brand is " +pen.brand + " the colour is "+pen.color + " great stuff." );

// var cake = {
//     bread: "sponge",
//     sprinkles: "allsorts",
//     flavour: "chocolate",
//     topings: "flake",
//     layers: "5",
//     price: "R600 madebas",
//     specialOrder: "cockaroach cake"
// }
// var client = {
//     name: "Nate",
//     surname: "Mbaku",
//     address: "345 imam haroun road"
// }

// var flavour = prompt("enter your flavour")
// var sprinkles = prompt("enter your sprinkles");

// console.log("The cake is made from "+cake.bread+" their are "+cake.layers+" layers with "+sprinkles+" of topings "+cake.topings+" the flavour is "+flavour+". The order is "+cake.specialOrder+" and costs is "+cake.price+". This will be sent to "+client.address+" and your name is "+client.name+" " +client.surname+".");

// // The price has gone up.
// cake.price = "R800"

// console.log("The cake is made from "+cake.bread+" their are "+cake.layers+" layers with "+sprinkles+" of topings "+cake.topings+" the flavour is "+flavour+". The order is "+cake.specialOrder+" and costs is "+cake.price+". This will be sent to "+client.address+" and your name is "+client.name+" " +client.surname+".");

// METHODS ON OBJECTS

// We had to write lengthy console.log statements each time to show the cake description. Theres a cleaner way to qccomplish this.

// ADDING A METHOD TO AN OBJECT

// Describle a cake

function describe(cake){
    var description = "The " +cake.occation+ " cake has a "+cake.flavour+ "flavour, "+cake.layers+ " layers, and costs " +cake.price+ ".";
    return description;
}

// Now for an alternative approach: creating a describe property that houses a method.

let cake = {
    flavour: "vanilla & caramel",
    layers: "8",
    price: "$400",
    occation: "birthday",

// describe the cake
describe: function (){
    var description = "The "+this.occation+ " cake has a "+this.flavour+ " flavour, "+this.layers+
    " layers, and costs "+this.price+ ".";
    return description;
    }
};

console.log(cake.describe());

// The cake is actually for a wedding!
    