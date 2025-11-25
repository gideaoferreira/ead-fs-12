# Tags de documentos HTML

## `<img>`

A tag `<img>` é usada para incorporar imagens em um documento HTML. Ela é uma tag auto
contida, o que significa que não possui uma tag de fechamento. A tag `<img>`
possui atributos importantes, como `src` (source) e `alt` (alternative text), que são
usados para especificar o caminho da imagem e o texto alternativo, respectivamente.

```html
<img src="caminho/para/imagem.jpg" alt="Descrição da imagem" />
```

## `<figure>` e `<figcaption>`

A tag `<figure>` é usada para agrupar conteúdo de mídia, como imagens ou
gráficos, juntamente com uma legenda fornecida pela tag `<figcaption>`.

```html
<figure>
  <img src="caminho/para/imagem.jpg" alt="Descrição da imagem" />
  <figcaption>Legenda da imagem</figcaption>
</figure>
```

## `<iframe>`

A tag `<iframe>` é usada para incorporar outro documento HTML dentro do
documento atual. Ela é frequentemente usada para incorporar vídeos, mapas ou
outros conteúdos externos.

```html
<iframe src="https://www.exemplo.com" width="600" height="400"></iframe>
```

## `<embed>`

A tag `<embed>` é usada para incorporar conteúdo multimídia, como vídeos,
áudios ou arquivos PDF, em um documento HTML.

```html
<embed
  src="caminho/para/arquivo.pdf"
  width="600"
  height="400"
  type="application/pdf"
/>
```

## `<audio>`

A tag `<audio>` é usada para incorporar conteúdo de áudio em um documento HTML. Ela
pode incluir atributos como `controls`, `autoplay` e `loop` para controlar a
reprodução do áudio.

```html
<audio src="caminho/para/audio.mp3" controls></audio>
```

## `<video>`

A tag `<video>` é usada para incorporar conteúdo de vídeo em um documento HTML. Ela
pode incluir atributos como `controls`, `autoplay`, `loop` e `width`/`height`
para controlar a reprodução e o tamanho do vídeo.

```html
<video src="caminho/para/video.mp4" width="640" height="360" controls></video>
```
