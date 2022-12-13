const Pet = function (name, species) {
    this.name = name;
    this.species = species;
}

Pet.prototype.eat = function (food) {
    console.log(`My ${this.name} ate some ${food}`);
}

module.exports = Pet;