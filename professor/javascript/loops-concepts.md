# JavaScript Loop Concepts

## 1. For Loop

The most common loop structure used to iterate a fixed number of times.

```javascript
// Basic for loop
for (let i = 0; i < 5; i++) {
  console.log("i = ", i);
}

// Loop through array
const colors = ["red", "green", "blue"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
```

## 2. While Loop

Repeats a code block while a condition is true.

```javascript
let count = 0;
while (count < 3) {
  console.log("Count: " + count);
  count++;
}

// Loop until user enters correct value
let password = "";
while (password !== "secret") {
  password = prompt("Enter password:");
}
```

## 3. Do...While Loop

Executes code block at least once, then repeats while condition is true.

```javascript
let i = 0;
do {
  console.log("i = ", i);
  i++;
} while (i < 3);

// Menu example
let choice = "";
do {
  choice = prompt("Choose: 1) Continue, 2) Exit");
} while (choice !== "2");
```

# Array Methods

## 4. forEach() Method

Executes function for each array element.

```javascript
// Basic forEach
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (num) {
  console.log(num * 2);
});

// With arrow function (modern syntax)
numbers.forEach((num) => console.log(num * 2));

// With index and array parameters
numbers.forEach((num, index, arr) => {
  console.log(`Index ${index}: ${num}`);
});
```

## 5. Map Method

Creates new array by transforming each element.

```javascript
const numbers = [1, 2, 3, 4];

// Double each number
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8]

// Extract property from objects
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Bob" },
];
const names = users.map((user) => user.name);
console.log(names); // ["John", "Jane", "Bob"]
```

## 6. Filter() Method

Creates new array with elements that pass a test.

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

// Get only even numbers
const evens = numbers.filter((num) => num % 2 === 0);
console.log(evens); // [2, 4, 6]

// Filter objects
const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 17 },
  { name: "Bob", age: 30 },
];
const adults = users.filter((user) => user.age >= 18);
console.log(adults); // [{ name: "John", age: 25 }, { name: "Bob", age: 30 }]
```

## 7. Break and Continue

Control loop execution flow.

```javascript
// Break - exit loop early
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Exit loop when i equals 5
  }
  console.log(i);
}

// Continue - skip current iteration
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // Skip when i equals 2
  }
  console.log(i);
}
```

// Chain methods
const result = arr
.filter((x) => x > 5)
.map((x) => x \* 2)
.reduce((a, b) => a + b, 0);

```

```
