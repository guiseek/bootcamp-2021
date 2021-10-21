## Exibindo informações na Web

```html
<!doctype html>
<html lang="pt-br">
    <head>
        <meta charset="utf-8">
        <title>HTML, CSS, JavaScript</title>
        <meta name="description" content="HTML na prática">
        <meta name="author" content="Guiulherme Siquinelli">
        <link rel="stylesheet" href="style.css">
        <script src="assets/js/script.js"></script>
    </head>
    <body>
        Informação
    </body>
</html>
```

## Semântica

### Fora do HTML

Semântica é a ciência que se dedica ao estudo do significado e a interpretação dos significados das palavras, frases ou expressões dentro de um específico contexto

### Dentro do HTML

É a representação de dados HTML de forma mais semântica (auto explicativa) para mecanismos de busca e/ou leitores de tela.

## Tags

São palavras entre parênteses angulares

Permitem marcação semântica

Formam uma hierarquia de elementos

Tem atributos e valores.

### Estrutura de um documento

```html
<body>
    <header></header>
    <nav></nav>
    <main role="contentinfo">
        <section>
            <article></article>
        </section>
        <aside>
        </aside>
    </main>
</body>
```

### Raíz do Documento

A tag [ &lt;html&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html) (clique no link para saber mais) representa a raiz de um documento HTML ou XHTML. Todos os outros elementos devem ser descendentes desse elemento.

### Metadados do Documento

A tag [ &lt;head&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head) representa uma coleção de metadados sobre o documento, incluindo links suas definições de scripts e folhas de estilo.

- [ ]  A tag [ &lt;title&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title) define o título do documento, apresentado na barra de título do navegador ou na guia da página. Ele só pode conter texto e todas as tags contidas não são interpretados.
- [ ]  Caso de uso

```html
<head>
	<title>Mentoria bootcamp</title>
</head>
```

- [ ]  A tag [ &lt;base&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base) define a URL base para URL relativa na página.
- [ ]  Caso de uso

```html
<base href="https://www.guiseek.dev/">

<!-- devparana.mx/recorder !-->
<base href="/recorder/">
```

- [x]  A tag [ &lt;link&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link) é usada para linkar arquivos externos, geralmente CSS.
- [x]  Caso de uso

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link href="style.css" rel="stylesheet">
</head>
<body>
  
</body>
</html>
```

- [ ]  A tag [ &lt;meta&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta) define os metadados que não podem ser definidas usando outro elemento HTML.
- [ ]  Caso de uso

```html
<head>
	<meta charset="utf-8">
</head>
```

- [ ]  A tag [ &lt;style&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style) é usada para escrever CSS dentro do documento HTML.
- [ ]  Caso de uso

```html
<style>
      body {
         font-size: 26px;
         font-family: sans-serif;
         background-color: blue;
      }
</style>
```

- [ ]  A tag [ &lt;script&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) define um script interno ou link para um script externo. A linguagem de script é JavaScript.
- [ ]  Caso de uso

```jsx
<script type="text/javascript" src="js/meu-arquivo.js"></script>
```

```jsx
<script>
     alert("Olá, mundo!");
</script>
```

- [ ]  A tag [ &lt;noscript&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript) define um conteúdo alternativo a ser exibido quando o navegador não suporta scripts.
- [ ]  Caso de uso

```html

```

- [ ]  A tag [ &lt;template&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template) é um container para conteúdo no lado cliente instanciado em tempo de execução usando JavaScript.
- [ ]  Caso de uso

```html

```

- [ ]  [ &lt;body&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body) Representa o principal conteúdo de um documento HTML. Há apenas um elemento `<body>` em um documento.
- [ ]  Caso de uso

```html
<body>
	<section>
			<h1> Mentoria com Guilherme Luciane</h1>
	</section> 
</body>
```

- [x]  A tag [ &lt;section&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section) define uma seção em um documento HTML.
- [x]  Caso de uso

```html

<section>
<h1>Cabeçalho</h1>
<p>Um monte de conteúdo incrível</p>
</section>

```

- [ ]  A tag [ &lt;nav&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav) define uma seção que contém apenas links de navegação.
- [ ]  Caso de uso

```html
<nav>
  <ul>
    <li><a href="#">Página inicial</a></li>
    <li><a href="#">Sobre</a></li>
    <li><a href="#">Contato</a></li>
  </ul>
</nav>
```

- [ ]  A tag [ &lt;article&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article) define que pode existir de forma independente do resto do conteúdo. Esta tag poderia ser um post no fórum, um artigo de revista ou jornal, uma entrada de log da Web, um comentário enviado pelo usuário, ou qualquer outro item independente do conteúdo.
- [ ]  Caso de uso

```html˜
<article>
  <h4>Um artigo realmente impressionante</h4>
  <p>Lotes de texto incrível.</p>
</article>
```

- [ ]  A tag [ &lt;aside&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside) define um conteúdo reservado do resto do conteúdo da página. Se for removida, o conteúdo restante ainda fazem sentido.
- [ ]  Caso de uso

```html

```

- [ ]  As tags [ &lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, &lt;h4&gt;, &lt;h5&gt;, &lt;h6&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements) são elementos que representam os seis níveis de titulos de cabeçalhos dos documentos. Um elemento título descreve brevemente o tema da seção.
- [ ]  Caso de uso

```html
<h1>Brigadeiro</h1>
<h2>Ingredientes</h2>
	
<ul>
  <li></li>
</ul>

<h3>Modo de preparo</h3>
```

- [ ]  A tag [ &lt;hgroup&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hgroup) agrupa um conjunto de elementos `<h1>` a `<h6>` quando um título tem vários níveis. *Tag excluída da documentação do html5 pelo W3C*.
- [ ]  Caso de uso

```html

```

- [ ]  A tag [ &lt;header&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header) define o cabeçalho de uma página ou seção. Muitas vezes contém um logotipo, o título do site e uma menu de navegação do conteúdo.
- [ ]  Caso de uso

```html

```

- [ ]  A tag [ &lt;footer&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer) define o rodapé de uma página ou seção. Muitas vezes contém um aviso de copyright, alguns links para informações legal ou endereços para dar feedback.
- [ ]  Caso de uso

```html

```

- [ ]  A tag [ &lt;address&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address) define uma seção que contém informações de contato, como endereço e telefone.
- [ ]  Caso de uso

```html

```

- [ ]  A tag [ &lt;main&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main) define o conteúdo principal ou importante no documento. Existe apenas um elemento `<main>` no documento.
- [ ]  Caso de uso

```html

```

- [ ]  A tag [ &lt;p&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p) define uma parte que deve ser exibido como um paragrafo.
- [ ]  Caso de uso

```html

```

- [ ]  A tag [ &lt;hr&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr) representa uma ruptura temática entre parágrafos de um artigo ou seção ou qualquer conteúdo mais longo.
- [ ]  Caso de uso

```html

```

- [ ]  A tag [ &lt;pre&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre) indica que o seu conteúdo é pré-formatado e que este formato deve ser preservada.
- [ ]  Caso de uso

```html

```

- [ ]  A tag [ &lt;blockquote&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote) representa uma citação.
- [ ]  Caso de uso

```html

```

- [ ]  A tag [ &lt;ol&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol) define uma lista ordenada de itens.
- [ ]  Caso de uso

```html
<h3>Modo de preparo</h3>

<ol>
   <li>Numa panela, misture o leite condensado, manteiga e o chocolate em pó. Leve ao fogo baixo e mexa bem, até dissolver o chocolate. 
   <li>Calcule 15 minutos cozinhando, sem parar de mexer, ou até aparecer o fundo da panela. Retire a panela do fogo e transfira o brigadeiro para o prato untado. Deixe esfriar. </li>
   <li>Espalhe um pouco de manteiga na palma das mãos e, com a ajuda de 1 colher de chá, faça bolinhas de 2,5 cm. Passe as bolinhas pela tigela com o chocolate granulado, envolvendo cada uma muito bem. </li>
</ol>
```

- [ ]  A tag [ &lt;ul&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul) define uma lista não ordenada.
- [ ]  Caso de uso

```html
<h1>Brigadeiro</h1>
<h2>Ingredientes</h2>

<ul>
  <li>1 lata de leite condensado</li>
  <li>1 colher (sopa) de manteiga</li>
  <li>3 colheres (sopa) chocolate em pó</li>
  <li>granulado</li>
</ul>
```

- [ ]  A tag [ &lt;li&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li) define um item de uma lista `<ol>` ou de uma `<ul>`.
- [ ]  Caso de uso

```html
<p>Conteúdo da mentoria:</p>
<ul>
	<li> HTML</li>
	<li> CSS </li>
	<li> Javascript </li>
</ul>
```

- [ ]  A tag [ &lt;dl&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl) representa uma lista de definição.
- [ ]  Caso de uso

```html

```

- [ ]  A tag [ &lt;dt&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dt) representa um item da lista de definição `<dd>`.
- [ ]  Caso de uso

```html

```

- [ ]  A tag [ &lt;dd&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dd) representa a definição dos termos listados imediatamente antes dele.
- [ ]  Caso de uso

```html

```

- [ ]  A tag [ &lt;figure&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure) representa uma figura, um conteúdo de fluxo, opcionalmente com um subtítulo.
- [ ]  Caso de uso

```html

```

- [ ]  A tag [ &lt;figcaption&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption) representa a legenda do `<figure>`.
- [ ]  Caso de uso

```html

```

- [ ]  A tag [ &lt;div&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div) representa um contêiner genérico sem nenhum significado especial.
- [ ]  Caso de uso

```html

```

- [ ]  A tag [ &lt;a&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) representa um hyperlink, ligando a outro recurso.
- [ ]  Caso de uso

```html

```

- [ ]  A tag [ &lt;em&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em) representa a enfâse do conteudo.
- [ ]  Caso de uso

```html

```

- [ ]  A tag [ &lt;strong&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong) representa a importância de um pedaço de texto com o forte elemento não altera o sentido da frase.
- [ ]  Caso de uso

```html

```

- [ ]  A tag [ &lt;abbr&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr) representa uma abreviatura ou acrônimo, eventualmente, com o seu significado.
- [ ]  Caso de uso

```html

```

- [ ]  A tag [ &lt;time&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time) representa um valor de data e hora, eventualmente com um equivalente legivel por máquina.
- [ ]  Caso de uso

```html

```

- [ ]  A tag [ &lt;code&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code) representa uma codificação.
- [ ]  Caso de uso

```html

```

- [ ]  A tag [ &lt;var&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/var) representa uma variável, que pode ser uma expressão matemática, ou codigo de programação, um identificador representando uma constante, um símbolo identificando uma quantificação física, um parametro de função ou um mero espaço reservado.
- [ ]  Caso de uso

```html

```

- [ ]  A tag [ &lt;samp&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/samp) representa uma saída de um programa de computador.
- [ ]  Caso de uso

```html

```

- [ ]  A tag [ &lt;kbd&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd) representa uma entrada do usuário, geralmente pelo teclado, mas não necessáriamente, podendo representar outro tipo de entrada como comandos de voz transcritos.
- [ ]  Caso de uso

```html

```

- [ ]  A tag [ &lt;b&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b) representa um texto que chama atenção para fins utilitários. Ele não transmite importância extra e não implica uma voz alternativa.
- [ ]  Caso de uso

```html

```

- [ ]  A tag [ &lt;span&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span) representa o texto com nenhum significado específico. Deve ser usado quando nenhum outro elemento semântico transmite um significado adequado, o que, neste caso, é frequentemente trazida por atributos globais, como *class*, *lang*, ou *dir*.
- [ ]  Caso de uso

```html

```

- [ ]  A tag [ &lt;br&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br) representa uma quebra de linha.
- [ ]  Caso de uso

```html

```

- [ ]  A tag [ &lt;img&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img) representa uma imagem.
- [ ]  Caso de uso

```html

```

- [ ]  A tag [ &lt;iframe&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) representa um contexto de navegação aninhada, que é um documento HTML incorporado.
- [ ]  Caso de uso

```html

```

- [ ]  A tag [ &lt;embed&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed) representa um ponto de integração para um, muitas vezes não HTML externo, a aplicação de conteúdo interativo.
- [ ]  Caso de uso

```html

```

- [ ]  A tag [ &lt;video&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video) representa um vídeo, e seus arquivos de áudio e legendas, associadas com a interface necessária para reproduzi-lo.
- [ ]  Caso de uso

```html

```

- [ ]  A tag [ &lt;audio&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio) representa um som, ou fluxo de áudio.
- [ ]  Caso de uso

```html

```

- [ ]  A tag [ &lt;source&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source) permite aos autores especificar fontes de mídia alternativos para elementos como `<video>` ou `<audio>`.
- [ ]  Caso de uso

```html

```

- [ ]  A tag [ &lt;canvas&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas) representa uma área de bitmap que os scripts podem ser usados para renderizar gráficos, como jogos ou quaisquer imagens renderizadas em tempo real.
- [ ]  Caso de uso

```html

```

- [ ]  A tag [ &lt;svg&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/svg) define uma imagem vectorial incorporada.
- [ ]  Caso de uso

```html

```

- [ ]  A tag [ &lt;math&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/math) define uma fórmula matemática.
- [ ]  Caso de uso

```html

```

- [ ]  A tag [ &lt;table&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table) representa dados com mais de uma dimensão.
- [ ]  Caso de uso

```html

```

- [ ]  A tag [ &lt;tbody&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody) representa o bloco de linhas que descreve os dados de uma `<table>`.
- [ ]  Caso de uso

```html

```

- [ ]  A tag [ &lt;thead&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead) representa o bloco de linhas que descreve o título de uma coluna.
- [ ]  Caso de uso

```html

```

- [ ]  A tag [ &lt;tfoot&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot) representa o bloco de linhas que descreve o resumo de uma coluna.
- [ ]  Caso de uso

```html

```

- [ ]  A tag [ &lt;tr&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr) representa uma linha de células de uma tabela.
- [ ]  Caso de uso

```html

```

- [ ]  A tag [ &lt;td&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td) representa uma célula de dados numa tabela.
- [ ]  Caso de uso

```html

```

- [ ]  A tag [ &lt;th&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th) representa uma célula de cabeçalho de uma tabela.
- [ ]  Caso de uso

```html

```

- [ ]  A tag [ &lt;form&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) representa um formulário, que consiste em controles, que podem ser enviados para um servidor para processamento.
- [ ]  Caso de uso

```html
<form action="" method="get">
		<label for="nome"> Nome: </label>
		<input id="nome" type="text" name="nome">

		<label for="telefone"> Telefone: </label>
		<input id="telefone" type="tel" name="telefone">

		<button id="sim" type="submit">Enviar</button>
		<button id="nao" type="reset">Cancelar</button>
</form>
```

- [ ]  A tag [ &lt;fieldset&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset) representa um conjunto de controles.
- [ ]  Caso de uso

```html
<form action="">
    <fieldset>
        <legend>Mentoria com o Luciane</legend>

        <label for="nome"> Nome: </label>
        <input id="nome" type="text" name="nome">
        
        <label for="telefone"> Telefone: </label>
        <input id="telefone" type="tel" name="telefone">

        <h5>Dia da semana disponível:</h5>

        <input type="radio" id="segundaf" name="segunda">
        <label for="segundaf">Segunda-feira</label>

        <input type="radio" id="tercaf" name="terca">
        <label for="tercaf">Terça-feira</label>

        <input type="radio" id="quartaf" name="quarta">
        <label for="quartaf">Quarta-feira</label>

        <input type="radio" id="quintaf" name="quinta">
        <label for="quintaf">Quinta-feira</label>

        <input type="radio" id="sextaf" name="sexta">
        <label for="sextaf">Sexta-feira</label>
        <br>
        <button id="sim" type="submit">Enviar</button>
        <button id="nao" type="reset">Cancelar</button>

    </fieldset>
</form>
```

- [ ]  A tag [ &lt;legend&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend) representa a legenda para um `<fieldset>`.
- [ ]  Caso de uso

```html
<fieldset>
     <legend> Mentoria Bootcamp</legend>
</fieldset>
```

- [ ]  A tag [ &lt;label&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label) representa a legenda de um controle de um `<form>`.
- [ ]  Caso de uso

```html
<label>
    Nome
    <input type="text" name="nome">
</label>
```

- [ ]  A tag [ &lt;input&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) representa um campo de dados digitados permitindo que o usuário edite os dados.
- [ ]  Caso de uso

```html
<label>
    Nome
    <input type="text" name="nome">
</label>
```

- [ ]  A tag [ &lt;button&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) representa um botão.
- [ ]  Caso de uso

```html
<button id="sim" type="submit">Confirmar</button>
<button id="nao" type="reset">Cancelar</button>
```

- [ ]  A tag [ &lt;select&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select) representa um controle que permite a seleção entre um conjunto de opções.
- [ ]  Caso de uso

```html

```

- [ ]  A tag [ &lt;datalist&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist) representa um conjunto de opções pré-definidas para outros controles.
- [ ]  Caso de uso

```html

```

- [ ]  A tag [ &lt;optgroup&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup) representa um conjunto de opções, agrupados logicamente.
- [ ]  Caso de uso

```html

```

- [ ]  A tag [ &lt;option&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option) representa uma opção em um elemento `<select>`, ou uma sugestão de um elemento `<datalist>`.
- [ ]  Caso de uso

```html

```

- [ ]  A tag [ &lt;textarea&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) representa um controle de edição de texto multi linhas.
- [ ]  Caso de uso

```html

```

- [ ]  A tag [ &lt;output&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output) representa o resultado de um cálculo.
- [ ]  Caso de uso

```html

```

- [ ]  A tag [ &lt;progress&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress) representa o progresso de uma tarefa.
- [ ]  Caso de uso

```html
<progress></progress>
<button type="button"> Enviar </button>
```

```jsx
const progress = document.querySelector('progress')
const button = document.querySelector('button')

button.onclick = () => {
	let interval = setInterval(() => {
	  if (+element.value === 1) {
	    clearInterval(interval)
	  }
	  
		element.value += 0.1
	}, 500)
}
```

- [ ]  A tag [ &lt;meter&gt; ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter) representa uma medida escalar (de um valor fracionário), dentro de um intervalo conhecido.
- [ ]  Caso de uso

```html

```