const arrayOfNums = [1, 2, 3, 4, 5];

const mySummingFunction = function(numbers) {
    const total = numbers.reduce((accumulator, currentElement) => {
        return accumulator + currentElement;         
    }, 0);
    return total
}

console.log(mySummingFunction(arrayOfNums))