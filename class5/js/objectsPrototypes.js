// OBJECT & PROTOTYPES
// In addition to its special properties, every javascript object has an internal property called prototypes this is 
// a link (as know reference) to another object. When trying to access a property that does not exist in an object javascript tires this property in
// a prototype.

var anObject = {
    a:2
};

// Create anotherObject using anObject as a prototype
var anotherObject = Object.create(anObject);

console.log(anotherObject.a); 
// will show 2

// the javascript statement Object.create() is used to create the objectanotherObject based on the prototype object anObject.

// If the prototype of an object does not have a desired

console.log(anotherObject.b);

var anotherObject = Object.create(anObject);

console.log(anotherObject.a);
// will be 2
console.log(anotherObject.b);
// will be undefined

// This type of relationship between Javascript objects is called delegation: an object delegates part of its operation to its prototype.

// cake prototype

var Pastry = {
    type: "",
    flavour: "",
    layers: "",
    price: "",
    occasion: "",

    describe: function(){
        var description = "The "+this.type+ " is a "+this.occasion+ " pastry, has a "+this.flavour+ " flavour, "+this.layers+ " layer(s), and costs " +this.price+ ".";
        return description;
    }

};

var muffin = Object.create(Pastry);
    muffin.type = "muffin";
    muffin.flavour = "blueberry";
    muffin.layers = 1;
    muffin.price = "R20";
    muffin.occasion = "breaky";

    var cake = Object.create(Pastry);
        cake.types = "cake";
        cake.flavour = "vanilla";
        cake.layers = "3";
        cake.price = "R410";
        cake.occasion = "birthday";
// ==========================================prototypes=============
console.log(muffin.describe());
console.log(cake.describe());

// we created an object named Pastry , which brings together the properties common to all the characters. The cake and muffin are created via Pastry as a prototype, which delegates its features to them.

