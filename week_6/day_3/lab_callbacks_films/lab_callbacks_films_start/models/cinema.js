const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.listofTitles = function () {
  return this.films.map((film) => {
    return film.title;
  });
}

Cinema.prototype.findByTitle = function (title) {
  return this.films.find(film => film.title === title);

}

Cinema.prototype.checkByYear = function (year) {
  return this.films.some(film => film.year === year);
}

Cinema.prototype.checkOverLength = function (length) {
  return this.films.every(film => film.length > length );
}

Cinema.prototype.calculateTotalRunning = function () {
  return this.films.reduce(
    (accumulator, film) => accumulator + film.length
    , 0);
}

Cinema.prototype.filmsByProperty = function (property, prop_value) {
  const prop = property;
  return this.films.filter(film => film[prop] === prop_value);
}

module.exports = Cinema;
