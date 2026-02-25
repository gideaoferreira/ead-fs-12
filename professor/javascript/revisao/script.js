// Console - Para debugs

console.log('INFORMAÇÃO :: Exbir uma mensagem ou qualquer outra informação para testes')
console.warn('ALERTA :: Exbir uma mensagem ou qualquer outra informação para testes')
console.error('ERRO :: Exbir uma mensagem ou qualquer outra informação para testes')

// DOM
document

// Metodos que auxiliam a manipulação de elementos html
document.getElementById('id-dado-ao-elemento-no-html')
document.getElementsByClassName('class-dada-ao-elemento-no-html')
document.querySelector('p')
document.querySelectorAll('p')

// Criador de elementos html
const p = document.createElement('p') // Cria uma tag p
p.innerText = "Um texto qualquer"

const h2 = document.createElement('h2') // Cria uma tag de título - h2
const form = document.createElement('form') // Cria uma tag de formulário - form
const input = document.createElement('input')

// "Setando", adicionando atributos a um elemento
input.setAttribute('name', 'cpf') // <input name="cpf" />
input.setAttribute('type', 'text') // <input name="cpf" type="text" />
input.setAttribute('id', 'user-cpf') // <input name="cpf" type="text" id="user-cpf" />
input.setAttribute('placeholder', 'Digite seu cpf') // <input name="cpf" type="text" id="user-cpf" placeholder="Digite seu cpf" />

// Adicionando contexto a itens como texto/título
h2.innerText = "Título"

// Adicionado estilo
h2.style.color = "red"

h2.classList.add('text-center', 'red', 'nova-class')

// Adicionar um elemento ao outro, como um item "filho"
form.appendChild(input)
document.body.appendChild(h2)
document.body.appendChild(form)

// arrays
const arrayData = ['arroz', 'feijão', 'farinha', 'picanha', 'macarrão']

arrayData.pop()

arrayData.forEach((item) => {
    const p = document.createElement('p')
    p.innerText = item
    document.body.appendChild(p)
})

/// Evendo JS
function ola() {
    console.log('Olá!')
}
document.addEventListener("click", ola)