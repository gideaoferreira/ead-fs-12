# JavaScript Operators

## Arithmetic Operators

```javascript
let a = 10;
let b = 3;

console.log(a + b); // 13 (Addition)
console.log(a - b); // 7 (Subtraction)
console.log(a * b); // 30 (Multiplication)
console.log(a / b); // 3.33... (Division)
console.log(a % b); // 1 (Modulus)
console.log(a ** 2); // 100 (Exponentiation)
```

## Assignment Operators

```javascript
let x = 5;

x -= 3; // x = 8
x -= 2; // x = 6
x *= 2; // x = 12
x /= 3; // x = 4
x %= 3; // x = 1
```

## Comparison Operators

```javascript
console.log(5 == "5"); // Com 2 iguais ele compara apenas valor dos comparados
console.log(5 === "5"); // Com 3 iguais ele compara VALOR e TIPO dos comparados.
console.log(5 != "5"); // Com 1 igual ele verifca apenas valor dos comparados
console.log(5 !== "5"); // Com 2 iguais ele compara VALOR e TIPO dos comparados.
console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(10 <= 5);
```

## Logical Operators

```javascript
let isActive = true;
let isAdmin = false;

console.log(isActive && isAdmin); // false (AND)
console.log(isActive || isAdmin); // true (OR)
console.log(!isActive); // false (NOT)
```

## Ternary Operator

```javascript
let age = 18;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // "Adult"
```

## Typeof Operator

```javascript
console.log(typeof 42); // "number"
console.log(typeof "hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof {}); // "object"
```

## Increment/Decrement Operators

```javascript
let count = 5;
console.log(++count); // 6 (pre-increment)
console.log(count++); // 6 (post-increment, returns old value)
console.log(count); // 7

let num = 10;
console.log(--num); // 9 (pre-decrement)
console.log(num--); // 9 (post-decrement, returns old value)
console.log(num); // 8
```
