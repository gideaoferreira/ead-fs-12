# Tags de estrutura HTML

As tags de estrutura HTML são usadas para definir a organização e o layout de um documento HTML.
Elas ajudam a estruturar o conteúdo, facilitando a leitura e a navegação tanto para os usuários
quanto para os mecanismos de busca. A seguir estão algumas das principais tags de estrutura HTML:

## `<header>`

A tag `<header>` é usada para definir o cabeçalho de uma seção ou página. Geralmente contém
elementos como títulos, logotipos, menus de navegação e outros elementos introdutórios

importantes.

```html
<header>
  <h1>Meu Site</h1>
  <nav>
    <ul>
      <li>Início</li>
      <li>Sobre</li>
      <li>Serviços</li>
      <li>Contato</li>
    </ul>
  </nav>
</header>
```

## `<nav>`

A tag `<nav>` é usada para definir uma seção de navegação em um documento. Ela
geralmente contém links para outras páginas ou seções do site.

```html
<nav>
  <ul>
    <li>Início</li>
    <li>Sobre</li>
    <li>Serviços</li>
    <li>Contato</li>
  </ul>
</nav>
```

## `<main>`

A tag `<main>` é usada para definir o conteúdo principal de um documento. Deve ser
usada apenas uma vez por página e não deve conter elementos que se repetem em várias
páginas, como cabeçalhos ou rodapés.

```html
<main>
  <h2>Bem-vindo ao Meu Site</h2>
  <p>Este é o conteúdo principal da página.</p>
</main>
```

## `<footer>`

A tag `<footer>` é usada para definir o rodapé de uma seção ou página. Geral
mente contém informações como direitos autorais, links para políticas de privacidade
e contatos.

```html
<footer>
  <p>&copy; 2024 Meu Site. Todos os direitos reservados.</p>
  <a href="#privacy">Política de Privacidade</a>
</footer>
```

## `<section>`

A tag `<section>` é usada para definir uma seção genérica de um documento. Ela
pode ser usada para agrupar conteúdo relacionado, como artigos, capítulos ou
temas específicos.

```html
<section>
  <h2>Sobre Nós</h2>
  <p>Informações sobre a empresa ou o site.</p>
</section>
```

## `<article>`

A tag `<article>` é usada para definir um conteúdo independente e autocontido,
como um artigo de blog, notícia ou postagem em fórum.

```html
<article>
  <h2>Título do Artigo</h2>
  <p>Conteúdo do artigo.</p>
</article>
```

## `<aside>`

A tag `<aside>` é usada para definir conteúdo relacionado, mas separado do
conteúdo principal, como barras laterais, citações ou anúncios.

```html
<aside>
  <h3>Informações Adicionais</h3>
  <p>Conteúdo relacionado ao tema principal.</p>
</aside>
```

## `<div>`

A tag `<div>` é um contêiner genérico usado para agrupar elementos e aplicar
estilos ou scripts a eles. Embora não tenha um significado semântico específico,
é amplamente utilizada para estruturar layouts.

```html
<div>
  <h3>Conteúdo Agrupado</h3>
  <p>Este conteúdo está dentro de uma div.</p>
</div>
```
