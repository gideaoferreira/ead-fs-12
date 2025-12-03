# O que é CSS

CSS (Cascading Style Sheets) é uma linguagem de estilo utilizada para descrever a apresentação de documentos
escritos em HTML. Ele permite que você controle a aparência visual de elementos em uma página web,
como cores, fontes, espaçamento, layout e muito mais.

## Seletores

Seletores são padrões usados para selecionar os elementos HTML que você deseja estilizar com CSS.
Existem vários tipos de seletores, incluindo:

- **Seletores de elemento**: Selecionam todos os elementos de um tipo específico (por exemplo, `p` para parágrafos).
- **Seletores de classe**: Selecionam elementos com uma classe específica (por exemplo, `.menu`).

- **Seletores de id** : Selecionam um elemento com um ID específico (por exemplo, `#header`).
- **Seletores universais**: Selecionam todos os elementos na página (por exemplo, `*`).
- **Seletores de atributo**: Selecionam elementos com um atributo específico (por exemplo, `[type="text"]`).
- **Seletores combinados**: Combinam vários seletores para selecionar elementos mais específicos (por exemplo, `div.menu`).
- **Seletores de pseudo-classe**: Selecionam elementos em um estado específico (por exemplo, `a:hover`).
- **Seletores de pseudo-elemento**: Selecionam partes específicas de um elemento (por exemplo, `p::first-letter`).

## Propriedades

Propriedades são os aspectos visuais que você pode modificar em um elemento HTML usando CSS.
Cada propriedade tem um nome e um valor que define como o elemento deve ser exibido.
Alguns exemplos comuns de propriedades CSS incluem:

- `color`: Define a cor do texto.
- `background-color`: Define a cor de fundo de um elemento.
- `font-size`: Define o tamanho da fonte do texto.
- `margin`: Define o espaço ao redor de um elemento.
- `padding`: Define o espaço entre o conteúdo de um elemento e sua borda.
- `border`: Define a borda de um elemento.

## Exemplo de CSS

Aqui está um exemplo simples de CSS que estiliza um parágrafo com uma cor de texto azul,
tamanho de fonte de 16 pixels e uma margem de 10 pixels:

```css
p {
  color: blue;
  font-size: 16px;
  margin: 10px;
}
```
