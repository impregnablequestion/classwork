const myForEach = function(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i);
    }
}

const numbers = [1, 2, 3, 4];

const myCallback = (element, index) => {
    console.log(`My element at index ${index} was: ${element}`);
}

myForEach(numbers, myCallback);
numbers.forEach(myCallback);