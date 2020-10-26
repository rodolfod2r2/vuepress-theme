# Markdown

Markdown é uma linguagem de marcação leve que você pode usar para adicionar elementos de formatação a documentos de texto simples. Criada por John Gruber em 2004, Markdown é agora uma das linguagens de marcação mais populares do mundo.

## Sintaxe Básica

Esses são os elementos descritos no documento de design original de John Gruber. Todos os aplicativos Markdown oferecem suporte a esses elementos.

### Títulos

Para criar um título, adicione sinais numéricos (`#`) na frente de uma palavra ou frase. O número de sinais numéricos que você usa deve corresponder ao nível do título. Por exemplo, para criar um título de nível três (`<h3>`), use três sinais numéricos (por exemplo, `### Meu Título`).

<table class="table table-bordered">
  <thead class="thead-light">
    <tr>
      <th>Markdown</th>
      <th>HTML</th>
      <th>Output</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code class="highlighter-rouge"># Nível Título 1</code></td>
      <td><code class="highlighter-rouge">&lt;h1&gt;Nível Título 1&lt;/h1&gt;</code></td>
      <td><h1 class="no-anchor" data-toc-skip>Nível Título 1</h1></td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">## Nível Título 2</code></td>
      <td><code class="highlighter-rouge">&lt;h2&gt;Nível Título 2&lt;/h2&gt;</code></td>
      <td><h2 class="no-anchor" data-toc-skip>Nível Título 2</h2></td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">### Nível Título 3</code></td>
      <td><code class="highlighter-rouge">&lt;h3&gt;Nível Título 3&lt;/h3&gt;</code></td>
      <td><h3 class="no-anchor" data-toc-skip>Nível Título 3</h3></td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">#### Nível Título 4</code></td>
      <td><code class="highlighter-rouge">&lt;h4&gt;Nível Título  4&lt;/h4&gt;</code></td>
      <td><h4 class="no-anchor">Nível Título 4</h4></td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">##### Nível Título 5</code></td>
      <td><code class="highlighter-rouge">&lt;h5&gt;Nível Título 5&lt;/h5&gt;</code></td>
      <td><h5 class="no-anchor">Nível Título 5</h5></td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">###### Nível Título 6</code></td>
      <td><code class="highlighter-rouge">&lt;h6&gt;Nível Título 6&lt;/h6&gt;</code></td>
      <td><h6 class="no-anchor">Nível Título 6</h6></td>
    </tr>
  </tbody>
</table>

### Títulos Sintaxe Alternativa

Como alternativa, na linha abaixo do texto, adicione qualquer número de caracteres `==` para o Nível Título 1 ou `--` caracteres para o Nível Título 2.

<table class="table table-bordered">
  <thead class="thead-light">
    <tr>
      <th>Markdown</th>
      <th>HTML</th>
      <th>Output</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code class="highlighter-rouge">Nível Título 1<br/>===============</code></td>
      <td><code class="highlighter-rouge">&lt;h1&gt;Nível Título 1&lt;/h1&gt;</code></td>
      <td><h1 class="no-anchor" data-toc-skip>Nível Título 1</h1></td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">Nível Título 2<br/>---------------</code></td>
      <td><code class="highlighter-rouge">&lt;h2&gt;Nível Título 2&lt;/h2&gt;</code></td>
      <td><h2 class="no-anchor" data-toc-skip>Nível Título 2</h2></td>
    </tr>
  </tbody>
</table>

### Paragrafos

Para criar parágrafos, use uma linha em branco para separar uma ou mais linhas de texto.

<table class="table table-bordered">
  <thead class="thead-light">
    <tr>
      <th>Markdown</th>
      <th>HTML</th>
      <th>Output</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code class="highlighter-rouge">
        Eu realmente gosto de usar o Markdown.<br /><br />
        Acho que vou usá-lo para formatar todos os meus documentos a partir de agora.
        </code>
      </td>
      <td>
        <code class="highlighter-rouge">
        &lt;p&gt;Eu realmente gosto de usar o Markdown.&lt;/p&gt;<br /><br />
        &lt;p&gt;Acho que vou usá-lo para formatar todos os meus documentos a partir de agora.&lt;/p&gt;</code>
      </td>
      <td>
        <p>Eu realmente gosto de usar o Markdown.</p>
        <p>Acho que vou usá-lo para formatar todos os meus documentos a partir de agora.</p>
      </td>
    </tr>
  </tbody>
</table>

### Quebras de Linha

Para criar uma quebra de linha (`<br>`), termine uma linha com dois ou mais espaços e digite return.

<table class="table table-bordered">
  <thead class="thead-light">
    <tr>
      <th>Markdown</th>
      <th>HTML</th>
      <th>Output</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code class="highlighter-rouge">
          This is the first line. &nbsp;<br />
          And this is the second line.
        </code>
      </td>
      <td>
        <code class="highlighter-rouge">
        &lt;p&gt;This is the first line.&lt;br&gt;<br />
        And this is the second line.&lt;/p&gt;</code>
      </td>
      <td>
        <p>This is the first line.<br />   
        And this is the second line.</p>
      </td>
    </tr>
  </tbody>
</table>

### Negrito and Italico

To emphasize text with bold and italics at the same time, add three asterisks or underscores before and after a word or phrase. To bold and italicize the middle of a word for emphasis, add three asterisks without spaces around the letters.

<table class="table table-bordered">
  <thead class="thead-light">
    <tr>
      <th>Markdown</th>
      <th>HTML</th>
      <th>Rendered Output</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code class="highlighter-rouge">This text is ***really important***.</code></td>
      <td><code class="highlighter-rouge">This text is &lt;strong&gt;&lt;em&gt;really important&lt;/em&gt;&lt;/strong&gt;.</code></td>
      <td>This text is <strong><em>really important</em></strong>.</td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">This text is ___really important___.</code></td>
      <td><code class="highlighter-rouge">This text is &lt;strong&gt;&lt;em&gt;really important&lt;/em&gt;&lt;/strong&gt;.</code></td>
      <td>This text is <strong><em>really important</em></strong>.</td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">This text is __*really important*__.</code></td>
      <td><code class="highlighter-rouge">This text is &lt;strong&gt;&lt;em&gt;really important&lt;/em&gt;&lt;/strong&gt;.</code></td>
      <td>This text is <strong><em>really important</em></strong>.</td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">This text is **_really important_**.</code></td>
      <td><code class="highlighter-rouge">This text is &lt;strong&gt;&lt;em&gt;really important&lt;/em&gt;&lt;/strong&gt;.</code></td>
      <td>This text is <strong><em>really important</em></strong>.</td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">This is really***very***important text.</code></td>
      <td><code class="highlighter-rouge">This is really&lt;strong&gt;&lt;em&gt;very&lt;/em&gt;&lt;/strong&gt;important text.</code></td>
      <td>This is really<strong><em>very</em></strong>important text.</td>
    </tr>
  </tbody>
</table>


### Blockquotes

To create a blockquote, add a > in front of a paragraph.

> Dorothy followed her through many of the beautiful rooms in her castle.


### Listas

You can organize items into ordered and unordered lists.

### Ordered Lists

To create an ordered list, add line items with numbers followed by periods. The numbers don’t have to be in numerical order, but the list should start with the number one.

<table class="table table-bordered">
  <thead class="thead-light">
    <tr>
      <th>Markdown</th>
      <th>HTML</th>
      <th>Output</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td>
      <code class="highlighter-rouge">
      1. Item<br>
      2. Item
      </code>
    </td>
    <td>
      <code class="highlighter-rouge">
      &lt;ol&gt;<br>
      &lt;li&gt;Item&lt;/li&gt;<br>
      &lt;li&gt;Item&lt;/li&gt;<br>
      &lt;/ol&gt;
      </code>
    </td>
    <td>
      <ol>
        <li>Item</li>
        <li>Item</li>
      </ol>
    </td>
    </tr>
    <tr>
      <td>
        <code class="highlighter-rouge">
        1. Item<br>
        2. Item<br>
          &nbsp;&nbsp;1. Sub Item<br>
        </code>
      </td>
      <td>
        <code class="highlighter-rouge">
          &lt;ol&gt;<br>
            &lt;li&gt;Item&lt;/li&gt;<br>
            &lt;li&gt;Item<br>
              &lt;ol&gt;<br>
                &lt;li&gt;Sub Item&lt;/li&gt;<br>
              &lt;/ol&gt;<br>
            &lt;/li&gt;<br>
          &lt;/ol&gt;
        </code>
      </td>
      <td>
        <ol>
          <li>Item</li>
          <li>Item
            <ol>
              <li>Sub Item</li>
            </ol>
          </li>
        </ol>
      </td>
    </tr>
  </tbody>
</table>

### Unordered Lists

To create an unordered list, add dashes (-), asterisks (*), or plus signs (+) in front of line items. Indent one or more items to create a nested list.

<table class="table table-bordered">
  <thead class="thead-light">
    <tr>
      <th>Markdown</th>
      <th>HTML</th>
      <th>Rendered Output</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code class="highlighter-rouge">
          - First item<br>
          - Second item<br>
          - Third item<br>
          - Fourth item
        </code>
      </td>
      <td>
        <code class="highlighter-rouge">
          &lt;ul&gt;<br>
            &lt;li&gt;First item&lt;/li&gt;<br>
            &lt;li&gt;Second item&lt;/li&gt;<br>
            &lt;li&gt;Third item&lt;/li&gt;<br>
            &lt;li&gt;Fourth item&lt;/li&gt;<br>
          &lt;/ul&gt;
        </code>
      </td>
      <td>
        <ul>
          <li>First item</li>
          <li>Second item</li>
          <li>Third item</li>
          <li>Fourth item</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code class="highlighter-rouge">
          * First item<br>
          * Second item<br>
          * Third item<br>
          * Fourth item
        </code>
      </td>
      <td>
        <code class="highlighter-rouge">
          &lt;ul&gt;<br>
            &lt;li&gt;First item&lt;/li&gt;<br>
            &lt;li&gt;Second item&lt;/li&gt;<br>
            &lt;li&gt;Third item&lt;/li&gt;<br>
            &lt;li&gt;Fourth item&lt;/li&gt;<br>
          &lt;/ul&gt;
        </code>
      </td>
      <td>
        <ul>
          <li>First item</li>
          <li>Second item</li>
          <li>Third item</li>
          <li>Fourth item</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code class="highlighter-rouge">
          + First item<br>
          + Second item<br>
          + Third item<br>
          + Fourth item
        </code>
      </td>
      <td>
        <code class="highlighter-rouge">
          &lt;ul&gt;<br>
            &lt;li&gt;First item&lt;/li&gt;<br>
            &lt;li&gt;Second item&lt;/li&gt;<br>
            &lt;li&gt;Third item&lt;/li&gt;<br>
            &lt;li&gt;Fourth item&lt;/li&gt;<br>
          &lt;/ul&gt;
        </code>
      </td>
      <td>
        <ul>
          <li>First item</li>
          <li>Second item</li>
          <li>Third item</li>
          <li>Fourth item</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code class="highlighter-rouge">
          - First item<br>
          - Second item<br>
          - Third item<br>
          &nbsp;&nbsp;&nbsp;&nbsp;- Indented item<br>
          &nbsp;&nbsp;&nbsp;&nbsp;- Indented item<br>
          - Fourth item
        </code>
      </td>
      <td>
        <code class="highlighter-rouge">
          &lt;ul&gt;<br>
            &lt;li&gt;First item&lt;/li&gt;<br>
            &lt;li&gt;Second item&lt;/li&gt;<br>
            &lt;li&gt;Third item<br>
              &lt;ul&gt;<br>
                &lt;li&gt;Indented item&lt;/li&gt;<br>
                &lt;li&gt;Indented item&lt;/li&gt;<br>
              &lt;/ul&gt;<br>
            &lt;/li&gt;<br>
            &lt;li&gt;Fourth item&lt;/li&gt;<br>
          &lt;/ul&gt;
        </code>
      </td>
      <td>
        <ul>
          <li>First item</li>
          <li>Second item</li>
          <li>Third item
            <ul>
              <li>Indented item</li>
              <li>Indented item</li>
            </ul>
          </li>
          <li>Fourth item</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### Code

To denote a word or phrase as code, enclose it in backticks (`).

<table class="table table-bordered">
  <thead class="thead-light">
    <tr>
      <th>Markdown</th>
      <th>HTML</th>
      <th>Rendered Output</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code class="highlighter-rouge">At the command prompt, type `nano`.</code></td>
      <td><code class="highlighter-rouge">At the command prompt, type &lt;code&gt;nano&lt;/code&gt;. </code></td>
      <td>At the command prompt, type <code class="highlighter-rouge">nano</code>.</td>
    </tr>
  </tbody>
</table>

### Code Blocks

To create code blocks, indent every line of the block by at least four spaces or one tab.

    <html>
      <head>
      </head>
    </html>


### Horizontal Rules

To create a horizontal rule, use three or more asterisks (***), dashes (---), or underscores (___) on a line by themselves.

    ***
    
    ---
    
    ___________________

### Links

To create a link, enclose the link text in brackets (e.g., [Duck Duck Go]) and then follow it immediately with the URL in parentheses (e.g., (https://duckduckgo.com)).

### Images

To add an image, add an exclamation mark (!), followed by alt text in brackets, and the path or URL to the image asset in parentheses. You can optionally add a title after the URL in the parentheses.

![Demo image](/assets/images/demo.jpg "Demo Image")

### Linking Images

To add a link to an image, enclose the Markdown for the image in brackets, and then add the link in parentheses.

[![Demo image](/assets/images/demo.jpg "Demo Image")](https://google.com.br)

### Escaping Characters

To display a literal character that would otherwise be used to format text in a Markdown document, add a backslash (\) in front of the character.

    \* Without the backslash, this would be a bullet in an unordered list.

### Characters You Can Escape

You can use a backslash to escape the following characters.

<table class="table table-bordered">
  <thead class="thead-light">
    <tr>
      <th>Character</th>
      <th>Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>\</td>
      <td>backslash</td>
    </tr>
    <tr>
      <td>`</td>
      <td>backtick (see also <a href="#escaping-backticks">escaping backticks in code</a>)</td>
    </tr>
    <tr>
      <td>*</td>
      <td>asterisk</td>
    </tr>
    <tr>
      <td>_</td>
      <td>underscore</td>
    </tr>
    <tr>
      <td>{ }</td>
      <td>curly braces</td>
    </tr>
    <tr>
      <td>[ ]</td>
      <td>brackets</td>
    </tr>
    <tr>
      <td>( )</td>
      <td>parentheses</td>
    </tr>
    <tr>
      <td>#</td>
      <td>pound sign</td>
    </tr>
    <tr>
      <td>+</td>
      <td>plus sign</td>
    </tr>
    <tr>
      <td>-</td>
      <td>minus sign (hyphen)</td>
    </tr>
    <tr>
      <td>.</td>
      <td>dot</td>
    </tr>
    <tr>
      <td>!</td>
      <td>exclamation mark</td>
    </tr>
    <tr>
      <td>|</td>
      <td>pipe (see also <a href="/extended-syntax/#escaping-pipe-characters-in-tables">escaping pipe in tables</a>)</td>
    </tr>
  </tbody>
</table>

## Sintaxe Estendida

Nem todos os aplicativos Markdown oferecem suporte a elementos de sintaxe estendidos. Você precisará verificar se a linguagem de marcação leve que seu aplicativo está usando suporta ou não os elementos de sintaxe estendidos que você deseja usar. Se não, ainda pode ser possível habilitar extensões em seu processador Markdown.

### Blocos de código

A sintaxe básica do Markdown permite criar blocos de código recuando as linhas em quatro espaços ou uma tabulação. Se você achar isso inconveniente, tente usar blocos de código protegidos. Dependendo do seu processador ou editor Markdown, você usará três crases ( ```) ou três tis ( ~~~) nas linhas antes e depois do bloco de código. A melhor parte? Você não precisa recuar nenhuma linha!

```
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

### Blocos de código Realce de sintaxe

Muitos processadores Markdown suportam realce de sintaxe para blocos de código protegidos. Este recurso permite adicionar realce de cor para qualquer idioma em que seu código foi escrito. Para adicionar realce de sintaxe, especifique um idioma próximo aos crases antes do bloco de código protegido.

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

### IDs de título

Muitos processadores Markdown suportam IDs personalizados para cabeçalhos - alguns processadores Markdown os adicionam automaticamente. Adicionar IDs personalizados permite que você vincule diretamente aos títulos e os modifique com CSS. Para adicionar um ID de título personalizado, coloque o ID personalizado entre chaves na mesma linha do título.

### Link Título {#custom-id}

O HTML se parece com isto:

    <h3 id="custom-id">Link Título</h3>

### Vinculando a IDs de título

Você pode vincular a cabeçalhos com IDs personalizados no arquivo criando um link padrão com um sinal de número (#) seguido pelo ID do cabeçalho personalizado.

<table class="table table-bordered">
  <thead class="thead-light">
    <tr>
      <th>Markdown</th>
      <th>HTML</th>
      <th>Output</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code class="highlighter-rouge">[Títulos IDs](#heading-ids)</code></td>
      <td><code class="highlighter-rouge"> &lt;a href="#heading-ids"&gt;Títulos IDs&lt;/a&gt;</code></td>
      <td><a href="#heading-ids">IDs de título</a></td>
    </tr>
  </tbody>
</table>

### Listas de Definição

Alguns processadores Markdown permitem criar listas de definições de termos e suas definições correspondentes. Para criar uma lista de definições, digite o termo na primeira linha. Na próxima linha, digite dois pontos seguido por um espaço e a definição.

<dl>
  <dt> Primeiro Termo </dt>
  <dd> Esta é a definição do primeiro termo. </dd>
  <dt> Segundo mandato </dt>
  <dd> Esta é uma definição do segundo termo. </dd>
  <dd> Esta é outra definição do segundo termo. </dd>
</dl>

O HTML se parece com isto:

    <dl>
      <dt> Primeiro Termo </dt>
      <dd> Esta é a definição do primeiro termo. </dd>
      <dt> Segundo mandato </dt>
      <dd> Esta é uma definição do segundo termo. </dd>
      <dd> Esta é outra definição do segundo termo. </dd>
    </dl>

### Tachado

Você pode tachar palavras colocando uma linha horizontal no centro delas. O resultado parececomo isso. Este recurso permite que você indique que certas palavras são um erro que não deve ser incluído no documento. Para rasurar palavras, use dois símbolos de til ( ~~) antes e depois das palavras.

~~O mundo é plano.~~ Agora sabemos que o mundo é redondo.

### Vinculação automática de URL

Muitos processadores Markdown transformam URLs em links automaticamente. Isso significa que se você digitar http://www.example.com, seu processador Markdown o transformará automaticamente em um link, mesmo que você não tenha usado colchetes .

    http://www.example.com

### Desativando Link Automático de URL

Se não quiser que um URL seja vinculado automaticamente, você pode remover o link denotando o URL como um código com crases.

    `http://www.example.com`




