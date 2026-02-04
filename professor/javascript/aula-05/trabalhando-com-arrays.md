# O que são Arrays

Arrays são estruturas de dados que permitem armazenar múltiplos valores em uma única variável.
Eles são úteis para organizar e manipular conjuntos de dados relacionados.

## Criando Arrays

Em JavaScript, você pode criar um array usando colchetes `[]` ou o construtor `Array()`.

```javascript
// Usando colchetes
let frutas = ["maçã", "banana", "laranja"];
// Usando o construtor Array
let numeros = new Array(1, 2, 3, 4, 5);
```

## Acessando Elementos

Você pode acessar os elementos de um array usando índices, que começam em 0.

```javascript
console.log(frutas[0]); // Output: maçã
console.log(numeros[2]); // Output: 3
```

## Métodos Comuns de Arrays

JavaScript oferece vários métodos úteis para manipular arrays. Aqui estão alguns dos mais comuns:

- `push()`: Adiciona um ou mais elementos ao final do array.
- `pop()`: Remove o último elemento do array.

- `unshift()`: Adiciona um ou mais elementos ao início do array.
- `shift()`: Remove o primeiro elemento do array.

- `length`: Retorna o número de elementos no array.

- `forEach()`: Executa uma função para cada elemento do array.

```javascript
frutas.push("uva"); // Adiciona 'uva' ao final
console.log(frutas); // Output: ['maçã', 'banana', 'laranja', 'uva']
let ultimo = frutas.pop(); // Remove o último elemento
console.log(ultimo); // Output: uva
console.log(frutas.length); // Output: 3
```

## Iterando sobre Arrays

Você pode usar loops para iterar sobre os elementos de um array. O loop `for`
é uma maneira comum de fazer isso.

```javascript
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}
```

## Conclusão

Arrays são ferramentas poderosas em JavaScript para armazenar e manipular conjuntos de dados.
Compreender como criar, acessar e modificar arrays é essencial para o desenvolvimento eficaz em JavaScript.
