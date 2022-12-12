var secretsFunction = function () {
    var pinCode = [0, 0, 0, 0];
    console.log('pin code inside function:', pinCode);
}

var filter_names_by_first_letter = function (names, letter) {
    var filtered_names = [];
    for (var name of names) {
        if (name[0] === letter) {
            filtered_names.push(name);
        }
    }
    return filtered_names;
}

var students = ['James', 'Kyle', 'Josh', 'Brian'];
var filtered_students = filter_names_by_first_letter(students, 'Z')

console.log(filtered_students)