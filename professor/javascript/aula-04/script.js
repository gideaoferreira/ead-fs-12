// // FOR
// for (let i = 0; i < 3; i++) {
//   console.log("i = ", i);
// }
// console.log("do while sendo executado")

// // DO WHILE

// const i = 0
// do {
//   console.log("i = ", i);
//     i++;
// } while (i < 3);

// // DO WHILE

// let responseSuccess = false
// while (secondsToRemain) {
//     console.log("Segundos faltantes: ", secondsToRemain)
//     if (respose === true) {
//         responseSuccess = respose
//     }
// }

function exibeNoConsoleNomeDoUsuario(userName) {
  console.log("Nome do usuário é ", userName)
}

function somar(x, y) {
  const somados = x + y
  console.log(somados)
  return somados
}

let x = 0
let y = 0

const button = document.getElementById("myButton");
const buttonUm = document.getElementById("um");
const buttonDois = document.getElementById("dois");
const buttonTres = document.getElementById("tres");
buttonUm.addEventListener('click', () => {
  x = 1
})

buttonDois.addEventListener('click', () => {
  y = 2
})

buttonTres.addEventListener('click', () => {
  x = 3
})



button.addEventListener("click", function() {
  exibeNoConsoleNomeDoUsuario("Luis")
  
  const tagP = document.createElement('p')
  tagP.innerText = somar(x, y)

  document.body.appendChild(tagP)
});