# JavaScript Functions

## Function anatomy

Composta pela palavra reservada "function"
Nome da função functionName
Parênteses ()
E corpo, que são as chaves {}

## Basic function

```javascript
function greet() {
  console.log("Olá");
}

greet("Maria"); // Olá, Maria
```

## Function with Parameters

```javascript
function greet(name) {
  console.log("Olá, " + name);
}

greet("Maria"); // Olá, Maria
```

## Function with Multiple Parameters

```javascript
function add(a, b) {
  console.log(a + b);
}

add(5, 3); // 8
```

## Function with Return

```javascript
function multiply(x, y) {
  return x * y;
}

let result = multiply(4, 5);
console.log(result); // 20
```

## Function with Return and Multiple Parameters

```javascript
function calculateArea(width, height) {
  return width * height;
}

let area = calculateArea(10, 5);
console.log(area); // 50
```

## Void Function (no return)

```javascript
function printMessage(message) {
  console.log(message);
}

printMessage("Olá Mundo"); // Olá Mundo
```

## Function with Default Parameters

```javascript
function welcome(name = "Visitante") {
  console.log("Bem-vindo, " + name);
}

welcome(); // Bem-vindo, Visitante
welcome("João"); // Bem-vindo, João
```

## Arrow Functions

```javascript
// Arrow function with parameter and return
const square = (num) => {
  return num * num;
};

console.log(square(5)); // 25

// Arrow function with short syntax
const cube = (num) => num * num * num;
console.log(cube(3)); // 27

// Arrow function with no parameters (void)
const sayHello = () => {
  console.log("Olá!");
};

sayHello(); // Olá!
```

## Function with Multiple Return Types

```javascript
function checkNumber(num) {
  if (num > 0) {
    return "Positivo";
  } else if (num < 0) {
    return "Negativo";
  } else {
    return "Zero";
  }
}

console.log(checkNumber(10)); // Positivo
console.log(checkNumber(-5)); // Negativo
console.log(checkNumber(0)); // Zero
```

## Function Expression

```javascript
const subtract = function (a, b) {
  return a - b;
};

console.log(subtract(10, 3)); // 7
```

## Anonymous Function

```javascript
let divide = function (x, y) {
  return x / y;
};

console.log(divide(20, 4)); // 5
```
