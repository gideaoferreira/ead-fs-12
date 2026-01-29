# DOM - Document object Model

```javascript
document;
```

### Selecionar o primeiro elemento pela nome de sua tag HTML ou seletor

```javascript
document.querySelector(seletor);

//exe:
document.querySelector("p");
document.querySelector(".example");
```

### Selecionar todos os elementos pelo nome da tag HTML ou seletor

```javascript
document.querySelectorAll(seletors);

//exe:
document.querySelectorAll("p");
document.querySelectorAll(".example");
```

### Seleciona o elemento com id (#id) específico

```javascript
document.getElementById(id);

//exe:
document.getElementById("form-add-user");
```

### Seleciona todos os elementos com uma 'class' específica

```javascript
document.getElementByClassName(classCss);

//exe:
document.getElementByClassName("btn-success");
```
