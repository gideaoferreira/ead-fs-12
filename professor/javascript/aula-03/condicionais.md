# JavaScript Condicionais

## If Statement

```javascript
let age = 18;

if (age >= 18) {
  console.log("Você é maior de idade");
}
```

## If...Else Statement

```javascript
let score = 60;

if (score >= 70) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}
```

## If...Else If...Else Statement

```javascript
let grade = 85;

if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else {
  console.log("F");
}
```

## Switch Statement

```javascript
let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Segunda";
    break;
  case 2:
    dayName = "Terça";
    break;
  case 3:
    dayName = "Quarta";
    break;
  case 4:
    dayName = "Quinta";
    break;
  case 5:
    dayName = "Sexta";
    break;
  default:
    dayName = "Fim de semana";
}

console.log(dayName); // "Quarta"
```

## Ternary Operator

```javascript
let age = 20;
let canVote = age >= 18 ? "Sim" : "Não";
console.log(canVote); // "Sim"
```

## Nested Conditionals

```javascript
let userAge = 25;
let hasLicense = true;

if (userAge >= 18) {
  if (hasLicense) {
    console.log("Pode dirigir");
  } else {
    console.log("Precisa de licença");
  }
} else {
  console.log("Muito jovem para dirigir");
}
```

## Logical Operators in Conditionals

```javascript
let age = 25;
let hasJob = true;

if (age >= 18 && hasJob) {
  console.log("Pode aplicar para crédito");
}

let hasCard = false;
let hasCash = true;

if (hasCard || hasCash) {
  console.log("Pode fazer a compra");
}

let isStudent = false;

if (!isStudent) {
  console.log("Não é estudante");
}
```
