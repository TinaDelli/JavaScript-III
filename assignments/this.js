/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding

Window Binding is when the "this" keyword is there but isn't referencing anything, so it goes to reference the window.

* 2. Implicit Binding 

Implicit Binding is when you add this to an object/method you have created and it automatically references the object/method.

* 3. New Binding

New Binding literally binds the 'this' to the 'new' variable for your object/method

* 4. Explicit Binding

Explicit Binding binds 'this' to the explicit object/method inside of a function. You call it by using "call, apply, bind".

*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function greeting(name){
    return `My name is ${this.name}`; 
} 
console.log(greeting("Jim Bob"));
//will give undefined or reference the window's name if possible

// Principle 2

// code example for Implicit Binding

const dragon = {
    name: "Spyro",
    age:18,
    goal:"find gems",
    hobby: function () {
        return `${this.name} loves to go and ${this.goal}`;
    }
}//dragon
console.log(dragon.hobby());
// Principle 3

// code example for New Binding
function albionCreator (mantra) {
    this.greeting = "Long live King Arthur";
    this.mantra = mantra;
    this.speak = function () {
        console.log(this.mantra + this.greeting)
    }
}
 
const merlin = new albionCreator ('Merlin says ')

merlin.speak();

// Principle 4

// code example for Explicit Binding

const albionFuture = {
    "name": "New Albion"
}

function albionSavior (item1, item2, item3){
    return `The future of ${this.name} lies in the hands of ${item1}, ${item2}, and ${item3}`;
}

const items = ['Merlin', 'Arthur', 'Magic']

console.log(albionSavior.apply(albionFuture, items));