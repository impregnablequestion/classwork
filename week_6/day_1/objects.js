var movie = {
    title: "It's a wonderful life",
    year: 1946,
    language: 'English',
    subtitle_language: 'Spanish'
};

movie.cast = ['James Stewart', 'Donna Reed'];

var keyname = 'title'

// console.log(movie[keyname]);

delete movie.subtitle_language;

movie.ratings = {
    critic: 94,
    audience: 95
};

// console.log(movie.ratings.critic);

for (var key in movie) {
    console.log(`key was: ${key}, value was: ${movie[key]}`)
}

var movieKeys = Object.keys(movie)
console.log(movieKeys)