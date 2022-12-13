const Pet = require('./pet.js');
const Person = require('./person.js');

const scooby = new Pet("Scooby Doo", "Dog");
const shaggy = new Person("Shaggy", scooby)

// shaggy.greet()
// scooby.eat("scooby snack")

shaggy.feedPet("Chicken");
