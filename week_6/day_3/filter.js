const getEvens = arrayOfNums => (arrayOfNums.filter(number => number % 2 === 0))

const getOdds = arrayOfNums => (arrayOfNums.filter(number => number % 2 !== 0))

console.log(getEvens([1, 2, 3, 4]))