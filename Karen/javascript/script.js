const btnUm = document.getElementById("um")
const btnDois = document.getElementById("dois")
const btnPlus = document.getElementById("plus")
const btnEquals = document.getElementById("equals")
const result = document.getElementById("result")


let x = 0
let y = 0
let operation = "-"

btnUm.addEventListener("click", function () {
    x = 1
})
btnDois.addEventListener("click", function () {
    y = 2
})

btnPlus.addEventListener("click", setOperationPlus)

btnPlus.addEventListener("click", executeOperation)

function setOperationPlus() {
    operation = "+"
}

function soma(x,y){
    return x+y
}

function minus(x,y){
    return x-y
}

function executeOperation() {
    if (operation === "+") {
        result.innerText = soma(x, y)
    }
    else (operation === "-"); {
        result.innerText = minus(x, y)
    }
    
}





