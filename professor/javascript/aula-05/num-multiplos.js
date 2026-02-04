const number = 3
const total = 100
const multiplos = []

[
    [2,4,4,5],
    [3,9,5,5],
    [3,4,7,5],
    [3,5,7,5]
]

for (let index = 1; index <= total; index++) {
    if (index % number === 0 && index % 2 === 0) {
        multiplos.push(index)
    }
}

console.log(multiplos)