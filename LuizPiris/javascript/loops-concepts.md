# JavaScript Loop Concepts

## 1. For Loop

A estrutura de loop mais comum.

```javascript
// Basic For loop
for (let i = 0; i < 5; i++) {
    console.log("i = ", i);
    // i = 0
    // i = 1
    // i = 2
    // i = 3
    // i = 4
    // i = 5 // i is no longer less than 5, so the loop ends
}

// Loop through array
const  colors = ["red", "green", "blue"];
for (let i = 0; i < colors.lenght; i++) {
    console.log(colors[i]);
}
```

