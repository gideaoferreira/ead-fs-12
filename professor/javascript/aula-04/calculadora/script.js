const btnNumbers = document.getElementsByClassName("number")
let currentNumber = ''
let previousNumber = ''
let operation = ''

btnNumbers[3].addEventListener('click', function () {
    console.log("Cliquei no btn 4")
})

for (let i = 0; i < btnNumbers.length; i++) {
    btnNumbers[i].addEventListener('click', function () {
        currentNumber += btnNumbers[i].textContent
        console.log(currentNumber)
    })
}