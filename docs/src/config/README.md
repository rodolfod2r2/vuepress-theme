---
sidebar: auto
bgImage: '/assets/img/favicon.png'
bgImageStyle: {
  height: '350px'
}
---

# Linguagens

## C

C é uma linguagem de programação compilada de propósito geral, estruturada, imperativa, procedural, padronizada pela ISO, criada em 1972, por Dennis Ritchie, no AT&T Bell Labs, para desenvolver o sistema operacional Unix (que foi originalmente escrito em Assembly).

C é uma das linguagens de programação mais popularese existem poucas arquiteturas para as quais não existem compiladores para C. C tem influenciado muitas outras linguagens de programação, mais notavelmente C++, que originalmente começou como uma extensão para C.

    https://github.com/rodolfod2r2/C


### C Básico
 
- 001° **Introdução**
- 002° **Declaração de Variáveis**
- 003° **Printf**
- 004° **Scanf**
- 005° **Operadores de Atribuição**
- 006° **Constantes**
- 007° **Operadores Aritméticos**
- 008° **Comentários**
- 009° **Pré e Pós Incremento**
- 010° **Atribuição Simplificada**
- 011° **Operadores Relacionais**
- 012° **Operadores Lógicos**
- 013° **Comando If**
- 014° **Comando Else**
- 015° **Aninhamento IfElse**
- 016° **Operador Ternário(?)**
- 017° **Comando Switch**
- 018° **Comando While**
- 019° **Comando For**
- 020° **Comando Do<->While**
- 021° **Aninhamento de Repetições**
- 022° **Comando Break**
- 023° **Comando Continue**
- 024° **Comando Goto**
- 025° **Array / Vetor**
- 026° **Array / Matriz**
- 027° **Array Multidimensional**

### C Estrutura de Dados
 
- 001° **Introdução**
- 002° **Listas**
- 003° **Listas Ordenadas**
- 004° **Pilhas**
- 005° **Filas**
- 006° **Deques**
- 007° **Pesquisa de Dados**
- 008° **Árvores**
- 009° **Árvore Binária**
- 010° **Árvore Binária de Pesquisa**
- 011° **Árvore AVL**
- 012° **Indexação**
- 013° **Hashing**
- 014° **Árvore-B**
- 015° **Classificação de Dados**


## PHP

Exemplos de Códigos em PHP;

### SINTAXE BÁSICA

> DELIMITADORES PHP:

    <?php ?> ou <? ?>  -> short-tags.
    
> SEPARADOR DE INSTRUÇÕES:

    ; Ponto e vírgula, indica ao sistema fim de instrução.
    
> NOMES DE VARIÁVEIS:

Precedidas pelo `$` e uma string; Exemplo: `$nome`, `$nomeAluno`. 

**OBS**: PHP é case sensitive, ou seja, as variáveis `$php` e `$PHP` são diferentes.

> COMENTÁRIOS: 

**Comentários de uma linha**: Pode ser delimitado pelo caracter `#` ou por duas barras `//`, Exemplo: `#comentário` ou `//comentário`
**Comentários de mais de uma linha**: Possui os delimitadores `/*` para o início do bloco e `*/` para o final do comentário.

### ESTRUTURA DE CONTROLE

> BLOCOS

Um bloco consiste de vários comandos agrupados com o objetivo de relacioná-los com
determinado comando ou função.

> CONDICIONAL IF / ELSEIF / ELSE

Permitem executar comandos ou blocos de comandos com base em testes feitos durante a execução.
    
###### EXEMPLOS

```
if (expressão) comando;

if (expressão){
    comando;
    comando;
}

if (expressão):
    comando;
endif;

 if (expressão) comando;
 elseif (expressão) comando;
 else comando;

if (expressão){
    comando;
} elseif (expressão) {
    comando;
} else {
    comando;
}

if (expressão):
    comando;
elseif (expressão):
    comando;
else:
    comando;
endif;
```

> CONDICIONAL SWITCH - CASE

Recebendo uma expressão como parâmetro e em seguida são feitas verificações para saber se ela corresponde a algum dos valores especificados, dentro do switch também é possível especificar um trecho de código que deve ser executado no caso de nenhuma das condições ser atendida. Para esse caso temos o comando default.

***OBS***:  break finaliza a execução da estrutura for, foreach, while, do-while ou switch atual.
    
###### EXEMPLOS

```
switch ($var) {
    case 0: comando; break;
    case 1: comando; break;
    case 2: comando; break;
    default: comando; break;
}
```

> REPETIÇÃO WHILE - DO WHILE - FOR - FOREACH

***WHILE***: é o comando de repetição (laço) mais simples. Ele testa uma condição e executa um comando, ou um bloco de comandos, até que a condição testada seja falsa.

***DO WHILE***: semelhante ao while, com a simples diferença que a expressão é testada ao final do bloco de comandos.

***FOR***: A primeira expressão (inicialização) é avaliada (executada), uma vez, incondicionalmente, no início do laço. No começo de cada iteração a condição é avaliada. Se a avaliada como `TRUE`, o laço continuará e as instruções aninhada serão executadas. Se avaliada como `FALSE`, a execução do laço terminará.

***FOREACH***: Fornece uma maneira fácil de iterar sobre arrays. O foreach funciona somente em arrays e objetos;

***OBS***:  A cada iteração, o valor do elemento atual é atribuído a $value e o ponteiro interno do array avança uma posição.

***OBS***:  Atribuir a chave do elemento corrente a variável $key a cada iteração.


###### EXEMPLOS

```
while (expressão) comando;

while (expressão){
    comando;
    comando;
}

while (expressão):
    comando;
endwhile;

do {
    comando;
} while (expressão);

for (<inicialização>;<condição>;<incremento ou decremento>)comando;

for (<inicialização>;<condição>;<incremento ou decremento>){
    comando;
}

for (<inicialização>;<condição>;<incremento ou decremento>):
    comando;
endfor;

foreach (array as $value){
    comando;
}

foreach (array as $key => $value){
    comando;
}

foreach (array as $value):
    comando;
endforeach;

foreach (array as $key => $value):
    comando;
endforeach;
```

> QUEBRA DE FLUXO BREAK - CONTINUE

***BREAK***: Pode ser utilizado em laços de `do`, `for`, `while` e `switch`. Ao encontrar um `break` dentro de um desses laços laços para imediatamente a execução do laço, seguindo normalmente o fluxo do script.

***CONTINUE***: Pode ser utilizado em laços de `do`, `for`, `while` e `switch`. Ao encontrar um `continue` dentro de um desses laços volta para o início do laço.

###### EXEMPLOS

```
while (expressão):
    comando;
    break;
endwhile;    

while (expressão):
    continue;
    comando;
endwhile;
```
