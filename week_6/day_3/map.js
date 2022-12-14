const myNumbers = [1, 2, 3, 4];

// const multipliedByTwo = function (numbers) {
//     const multipliedNums = [];

//     numbers.forEach((number) => {
//         const multipliedNum = number * 2;
//         multipliedNums.push(multipliedNum);
//     });

//     return multipliedNums;
// } 

const multipliedByTwo = numbers => numbers.map(number => number * 2);
               
console.log(multipliedByTwo(myNumbers));