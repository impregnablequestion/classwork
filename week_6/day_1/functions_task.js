// 1. declare a named function that takes an array of numbers as an argument and return the sum of all the numbers in the array

function sumofarray(array) {
    var sum = 0;
    for (var number of array) {
        sum += number;
    }
    return sum;
}
arrayx = [1, 2, -2, 10];
console.log(sumofarray(arrayx));

// 2. anonymous function expression that takes two arguments:
// - an object
// - a string
// return true if the string is present as a key in the object otherwise false

var checkforstring = function (string, object) {
    for (var key in object) {
        if (key === string) {
            return true;
        }
    }
    return false;
};

var shop = {
    till: 200,
    name: "Soups U",
    soup_of_the_day: "Chicken and Rice"
};

var was_string = checkforstring("till", shop);
console.log(was_string)

