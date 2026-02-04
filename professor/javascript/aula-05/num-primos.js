const number = 21
let totalDivisor = 0

for (let index = 1; index <= number; index++) {
    if (number % index === 0) {
        totalDivisor++
    }
}

if (totalDivisor === 2) {
 console.log('O número ', number, ' é primo')
}

if (totalDivisor > 2) {
 console.log('O número ', number, ' não é primo e tem ', totalDivisor , 'divisores')
}
