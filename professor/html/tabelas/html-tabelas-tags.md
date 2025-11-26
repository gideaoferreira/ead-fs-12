# Tabelas em HTML

As tabelas em HTML são usadas para organizar dados em linhas e colunas, facilitando a visualização e a compreensão das informações. A estrutura básica de uma tabela em HTML é composta por várias tags específicas que definem diferentes partes da tabela.

## Estrutura Básica de uma Tabela

A estrutura básica de uma tabela em HTML inclui as seguintes tags principais:

- `<table>`: Define o início e o fim da tabela.
- `<thead>`: Define o cabeçalho da tabela.
- `<tr>`: Define uma linha na tabela (table row).
- `<th>`: Define uma célula de cabeçalho na tabela (table header).
- `<tbody>`: Define o corpo da tabela.
- `<td>`: Define uma célula de dados na tabela (table data).

- `colspan` e `rowspan`: Atributos usados para mesclar células horizontalmente ou verticalmente.

Estrutura Exemplo:

```html
<table>
  <thead>
    <tr>
      <th>Cabeçalho 1</th>
      <th>Cabeçalho 2</th>
      <th>Cabeçalho 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Dado 1</td>
      <td>Dado 2</td>
      <td>Dado 3</td>
    </tr>
    <tr>
      <td>Dado 4</td>
      <td>Dado 5</td>
      <td>Dado 6</td>
    </tr>
  </tbody>
</table>
```

## Descrição das Tags

### `<table>`

A tag `<table>` é usada para criar uma tabela. Todo o conteúdo da tabela deve estar
dentro desta tag.

### `<tr>`

A tag `<tr>` define uma linha na tabela. Cada linha pode conter várias células de dados ou cabeçalhos.

### `<th>`

A tag `<th>` é usada para definir uma célula de cabeçalho na tabela.
As células de cabeçalho geralmente aparecem em negrito e centralizadas por padrão.

### `<td>`

A tag `<td>` define uma célula de dados na tabela. Cada célula pode conter
texto, imagens ou outros elementos HTML.

### `<thead>`

A tag `<thead>` é usada para agrupar o conteúdo do cabeçalho da tabela.

### `<tbody>`

A tag `<tbody>` é usada para agrupar o conteúdo do corpo da tabela, que contém os dados principais.

## `colspan` e `rowspan`

Os atributos `colspan` e `rowspan` são usados para mesclar células em uma tabela.
