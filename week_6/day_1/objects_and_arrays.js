var my_array = [];

var sports = ['football', 'tennis', 'squash', 'rugby', 'badminton'];

sports.push('snooker');
sports.push('fencing');

var removed_sport = sports.pop();

sports.unshift('pool');
sports.shift();

// var removed_elements = sports.splice(1, 2);

// console.log(removed_elements);



console.log(sports);

for (var currentSport of sports) {
    var upper_case_sport = currentSport.toUpperCase();
    console.log(upper_case_sport);
}

// i ++ ——> i += 1

for (var i = 0; i < sports.length; i++) {
    console.log('counter was: ', i, 'sport was: ', sports[i])
}