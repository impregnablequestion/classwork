const myNumbers = [1, 2, 3, 4];

// for (const number of myNumbers) {
//     console.log(`Number was: ${number}`)
// }

// myNumbers.forEach((element) => {
//     console.log(`Number was: ${element}`);
// })

// myNumbers.forEach(element => console.log(`Number was: ${element}`))


// callback function  //

// const myNumberFunction = (number) => {
//     console.log(`Number was: ${number}`);
// }

// myNumbers.forEach(myNumberFunction)


const myNumberFunction = (element, index) => {
    console.log(`Next number was : ${element} at index ${index}`);
}

myNumbers.forEach(myNumberFunction);

const multipliedByTwo = function (numbers) {
    const multipliedNums = [];

    numbers.forEach((number) => {
        const multipliedNum = number * 2;
        multipliedNums.push(multipliedNum);
    });

    return multipliedNums;
}

console.log('Numbers before multiplication: ', myNumbers);
console.log('Numbers after multiplication: ', multipliedByTwo(myNumbers));

const getEvens = function (numbers) {
    const evens = [];

    numbers.forEach((number) => {
        if (number % 2 === 0) {
            evens.push(number);
        }
    });

    return evens;
}

console.log(getEvens(myNumbers))