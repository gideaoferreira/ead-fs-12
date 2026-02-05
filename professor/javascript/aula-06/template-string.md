# Template String (Template Literals)

Template strings são uma forma de trabalhar com strings em JavaScript usando crases (`)
em vez de aspas simples ou duplas. Elas permitem interpolação de variáveis e expressões.

## Sintaxe Básica

```javascript
// Usando crases (`)
const mensagem = `Olá, mundo!`;
console.log(mensagem); // Olá, mundo!
```

## 1. Interpolação de Variáveis

```javascript
const nome = "João";
const idade = 25;

// Usando template string
const apresentacao = `Meu nome é ${nome} e tenho ${idade} anos.`;
console.log(apresentacao);
// Saída: Meu nome é João e tenho 25 anos.

// Comparação com concatenação tradicional
const apresentacao2 = "Meu nome é " + nome + " e tenho " + idade + " anos.";
```

// Saída: Meu nome é João e tenho 25 anos.

## 2. Expressões Dentro de Template Strings

```javascript
const a = 10;
const b = 5;

console.log(`A soma de ${a} + ${b} é ${a + b}`);
// Saída: A soma de 10 + 5 é 15

console.log(`O produto de ${a} * ${b} é ${a * b}`);
// Saída: O produto de 10 * 5 é 50
```

## 3. Strings Multilinhas

```javascript
// Sem template string (precisa usar \n)
const texto1 = "Linha 1\nLinha 2\nLinha 3";

// Com template string
const texto2 = `Linha 1
Linha 2
Linha 3`;

console.log(texto2);
// Saída:
// Linha 1
// Linha 2
// Linha 3
```

## Resumo das Vantagens

| Feature              | Descrição                                     |
| -------------------- | --------------------------------------------- |
| **Interpolação**     | Use `${}` para inserir variáveis e expressões |
| **Multilinhas**      | Quebras de linha são preservadas naturalmente |
| **Legibilidade**     | Código mais limpo e fácil de ler              |
| **Flexibilidade**    | Suporta expressões complexas                  |
| **Tagged Templates** | Permite processamento customizado de strings  |
