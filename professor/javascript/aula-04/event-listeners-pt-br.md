# JavaScript Ouvintes de Eventos

## Visão Geral

Eventos permitem que JavaScript execute as
interações do usuário nos elementos da página.
Eles são fundamentais para aplicações web interativas.

## Adicionando Eventos

### Método 1: addEventListener() - Recomendado

```javascript
// Sintaxe básica
element.addEventListener(event, callback);
element.addEventListener(event, callback, options);

// Exemplo
const button = document.getElementById("myButton");
button.addEventListener("click", function () {
  console.log("Botão clicado!");
});

// Com arrow function
button.addEventListener("click", () => {
  console.log("Botão clicado!");
});

// Com opções
button.addEventListener("click", handleClick, { once: true }); // Dispara uma vez
```

### Método 2: HTML Inline

```html
<button onclick="handleClick()">Clique em mim</button>

<script>
  function handleClick() {
    console.log("Botão clicado!");
  }
</script>
```

### Método 3: Atribuição Direta de Propriedade

```javascript
const button = document.getElementById("myButton");
button.onclick = function () {
  console.log("Botão clicado!");
};
```

---

## Principais Eventos do Mouse

### click

Dispara quando o elemento é clicado.

```javascript
button.addEventListener("click", (event) => {
  console.log("Clicado em:", event.clientX, event.clientY);
});
```

### dblclick

Dispara quando o elemento é clicado duas vezes.

```javascript
element.addEventListener("dblclick", () => {
  console.log("Duplo clique!");
});
```

### mousedown

Dispara quando o botão do mouse é pressionado.

```javascript
element.addEventListener("mousedown", (event) => {
  console.log("Botão do mouse pressionado:", event.button);
  // 0 = esquerdo, 1 = meio, 2 = direito
});
```

### mouseup

Dispara quando o botão do mouse é liberado.

```javascript
element.addEventListener("mouseup", () => {
  console.log("Botão do mouse liberado");
});
```

### mouseover

Dispara quando o mouse entra no elemento (propaga).

```javascript
element.addEventListener("mouseover", () => {
  console.log("Mouse sobre o elemento");
});
```

### mouseout

Dispara quando o mouse sai do elemento (propaga).

```javascript
element.addEventListener("mouseout", () => {
  console.log("Mouse saiu do elemento");
});
```

### mouseenter

Dispara quando o mouse entra no elemento (não propaga).

```javascript
element.addEventListener("mouseenter", () => {
  console.log("Mouse entrou no elemento");
});
```

### mouseleave

Dispara quando o mouse sai do elemento (não propaga).

```javascript
element.addEventListener("mouseleave", () => {
  console.log("Mouse saiu do elemento");
});
```

### mousemove

Dispara quando o mouse se move sobre o elemento.

```javascript
element.addEventListener("mousemove", (event) => {
  console.log("Posição:", event.clientX, event.clientY);
});
```

---

## Principais Eventos do Teclado

### keydown

Dispara quando qualquer tecla é pressionada (antes do caractere ser gerado).

```javascript
document.addEventListener("keydown", (event) => {
  console.log("Tecla pressionada:", event.key);
  console.log("Código da tecla:", event.keyCode); // Deprecado mas ainda funciona
  console.log("Código:", event.code);
});
```

### keyup

Dispara quando a tecla é liberada.

```javascript
document.addEventListener("keyup", (event) => {
  console.log("Tecla liberada:", event.key);
});
```

### keypress

Dispara quando o caractere é gerado (deprecado, use keydown em seu lugar).

```javascript
input.addEventListener("keypress", (event) => {
  console.log("Caractere:", event.key);
});
```

---

## Eventos de Formulário

### submit

Dispara quando o formulário é enviado.

```javascript
const form = document.getElementById("myForm");
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Previne recarga da página
  console.log("Formulário enviado");
  // Processar dados do formulário
});
```

### change

Dispara quando o valor do input muda e perde o foco.

```javascript
const input = document.getElementById("myInput");
input.addEventListener("change", (event) => {
  console.log("Valor alterado para:", event.target.value);
});
```

### input

Dispara enquanto o usuário digita/modifica o valor do input (em tempo real).

```javascript
const input = document.getElementById("myInput");
input.addEventListener("input", (event) => {
  console.log("Valor atual:", event.target.value);
});
```

### focus

Dispara quando o elemento recebe o foco.

```javascript
input.addEventListener("focus", () => {
  console.log("Input focado");
  input.style.borderColor = "blue";
});
```

### blur

Dispara quando o elemento perde o foco.

```javascript
input.addEventListener("blur", () => {
  console.log("Input desfocado");
  input.style.borderColor = "gray";
});
```

---

## Eventos de Documento/Janela

### load

Dispara quando a página inteira (incluindo imagens) foi carregada.

```javascript
window.addEventListener("load", () => {
  console.log("Página totalmente carregada");
});
```

### DOMContentLoaded

Dispara quando o DOM está pronto (antes das imagens carregarem).

```javascript
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM pronto");
});
```

### scroll

Dispara quando o usuário rola a página.

```javascript
window.addEventListener("scroll", () => {
  console.log("Posição de rolagem:", window.scrollY);
});
```

### resize

Dispara quando a janela é redimensionada.

```javascript
window.addEventListener("resize", () => {
  console.log("Novo tamanho:", window.innerWidth, window.innerHeight);
});
```

### beforeunload

Dispara antes do usuário sair da página.

```javascript
window.addEventListener("beforeunload", (event) => {
  event.preventDefault();
  event.returnValue = "Tem certeza de que quer sair?";
});
```

---

## Eventos de Toque

### touchstart

Dispara quando o toque começa.

```javascript
element.addEventListener("touchstart", (event) => {
  console.log("Pontos de toque:", event.touches.length);
});
```

### touchmove

Dispara quando o dedo se move na tela.

```javascript
element.addEventListener("touchmove", (event) => {
  event.preventDefault();
  const touch = event.touches[0];
  console.log("Posição:", touch.clientX, touch.clientY);
});
```

### touchend

Dispara quando o toque termina.

```javascript
element.addEventListener("touchend", (event) => {
  console.log("Toque terminado");
});
```

---

## Propriedades do Objeto Event

```javascript
element.addEventListener("click", (event) => {
  // Propriedades importantes:
  event.type; // 'click'
  event.target; // Elemento que disparou o evento
  event.currentTarget; // Elemento com o ouvinte de evento
  event.preventDefault(); // Parar ação padrão
  event.stopPropagation(); // Parar propagação
  event.clientX; // Posição X do mouse
  event.clientY; // Posição Y do mouse
  event.key; // Tecla do teclado pressionada
  event.timestamp; // Quando o evento ocorreu
});
```

---

## Delegação de Eventos

Manipule eventos no elemento pai para múltiplos filhos.

```javascript
const list = document.getElementById("myList");

list.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log("Item clicado:", event.target.textContent);
  }
});
```

---

## Removendo Ouvintes de Eventos

```javascript
// Definir callback fora
function handleClick() {
  console.log("Clicado");
}

// Adicionar ouvinte
button.addEventListener("click", handleClick);

// Remover ouvinte (deve usar a mesma referência)
button.removeEventListener("click", handleClick);
```

---

## Opções de Ouvinte de Evento

```javascript
// Objeto de opções
element.addEventListener("click", callback, {
  capture: false, // Fase de captura (true) ou fase de bubbling (false)
  once: true, // Executar apenas uma vez, então remover
  passive: true, // Não pode chamar preventDefault()
});

// Atalho booleano (fase de captura)
element.addEventListener("click", callback, true);
```

---

## Padrões Comuns de Eventos

### Prevenir Envio de Formulário

```javascript
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // Validar e processar formulário
});
```

### Detectar Pressão da Tecla Enter

```javascript
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    console.log("Enter pressionado");
  }
});
```

### Alternar Classe ao Clicar

```javascript
button.addEventListener("click", () => {
  element.classList.toggle("active");
});
```

### Parar Propagação de Evento

```javascript
childElement.addEventListener("click", (event) => {
  event.stopPropagation(); // Prevenir ouvintes pai
  console.log("Filho clicado");
});
```

### Obter Coordenadas do Mouse

```javascript
document.addEventListener("mousemove", (event) => {
  const x = event.clientX;
  const y = event.clientY;
  console.log(`${x}, ${y}`);
});
```

---

## Comparação de Ouvintes de Eventos

| Evento     | Gatilho               | Propaga | Cancelável |
| ---------- | --------------------- | ------- | ---------- |
| click      | Clicar no elemento    | Sim     | Sim        |
| dblclick   | Duplo clique          | Sim     | Não        |
| mouseenter | Mouse entra           | Não     | Não        |
| mouseleave | Mouse sai             | Não     | Não        |
| mouseover  | Mouse sobre           | Sim     | Não        |
| mouseout   | Mouse sai             | Sim     | Não        |
| keydown    | Tecla pressionada     | Sim     | Sim        |
| keyup      | Tecla liberada        | Sim     | Não        |
| input      | Valor muda            | Sim     | Não        |
| change     | Valor muda (blur)     | Sim     | Não        |
| focus      | Elemento focado       | Não     | Não        |
| blur       | Elemento desfocado    | Não     | Não        |
| submit     | Formulário enviado    | Sim     | Sim        |
| scroll     | Página rolada         | Não     | Não        |
| resize     | Janela redimensionada | Não     | Não        |
