function createPhoneNumberForEach(numbers) {

    let answer = "("
    numbers.forEach((element, index) => {
        if (index === 3) {
            answer += ") " + element;
        } else if (index === 6) {
            answer += "-" + element;
        } else {
            answer += element
        } 
    });
    return answer;
}

function createPhoneNumberTemp(numbers) {
    return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
}

function createPhoneNumber(numbers) {
    [a, b, c, d, e, f, g, h, i, j] = numbers;
    return `(${a}${b}${c}) ${d}${e}${f}-${g}${h}${i}${j}`
}

module.exports = createPhoneNumber;