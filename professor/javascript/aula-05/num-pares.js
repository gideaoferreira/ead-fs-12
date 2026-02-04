const numbers = [3,4,63,23,78,24,934,13,567,34,89]

for (let index = 0; index <= numbers.length - 1; index++) {
    if (numbers[index] % 2 === 0) {
        console.log("O número ",numbers[index], 'é um número par')
    }

    if (numbers[index] % 2 !== 0) {
        console.log("O número ",numbers[index], 'é um número ímpar')
    }
}