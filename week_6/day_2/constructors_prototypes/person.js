const Person = function (name, pet) {
    this.name = name;
    this.pet = pet;
}

Person.prototype.greet = function () {
    console.log(`Hi! My name is ${ this.name }`);
}

Person.prototype.feedPet = function (food) {
    this.pet.eat(food);
    const message = `${this.name} fed ${this.pet.name} a ${food}`;
    console.log(message);
}

module.exports = Person;