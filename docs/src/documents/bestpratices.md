# Escopo e objetivo

_Organizaço de código de referência para desenvolvimento de software em Java_. 

O projeto inclui:
(a) uma biblioteca formada por um único método que identifica o dia da semana para uma data fornecida; 
(b) uma aplicação que oferece tal funcionalidade via linha de comandos e (c) uma RESTFul API ambas para acesso à funcionalidade da biblioteca.

> _Objetivo: ilustrar uma organização de código em Java usando
"boas práticas" para inspirar projetos reais_.

## Iniciando...

- `git clone https://github.com/rodolfod2r2/exemplo`
- `cd exemplo`

Agora você poderá executar os vários comandos abaixo.

## Pré-requisitos
- `mvn --version`<br>
você deverá ver a indicação da versão do Maven instalada e
a versão do JDK, dentre outras. Observe que o JDK é obrigatório, assim como
a definição das variáveis de ambiente **JAVA_HOME** e **M2_HOME**.

## Limpar, compilar, executar testes de unidade e cobertura

- `mvn clean`<br>
remove diretório _target_

- `mvn compile`<br>
compila o projeto, deposita resultados no diretório _target_

- `mvn test`<br>
executa todos os testes do projeto. Para executar apenas parte dos testes, por exemplo,
aqueles contidos em uma dada classe execute `mvn -Dtest=NomeDaClasseTest test`. Observe
que o sufixo do nome da classe de teste é `Test` (padrão recomendado). Para executar um
único teste `mvn -Dtest=NomeDaClasseTest#nomeDoMetodo test`.

- `mvn verify -P cobertura`<br>
executa testes de unidade e produz relatório de
cobertura em _target/site/jacoco/index.html_ além de verificar se limite mínimo
de cobertura, conforme configurado, é satisfeito.

## Empacotando o projeto

- `mvn package`<br>
gera arquivo _exemplo.jar_ no diretório _target_. Observe que
o arquivo gerado não é executável. Um arquivo jar é um arquivo no formato
zip. Você pode verificar o conteúde deste arquivo ao executar o comando `jar vft exemplo.jar`.

- `mvn package -P executavel-dir`<br>
gera _exemplo-dir.jar_, executável, mas dependente do diretório _jars_,
 também criado no diretório _target_. Para executar basta o comando
 `java -jar target/exemplo-dir.jar`. Observe que se o diretório _jars_ for
 removido, então este comando falha. Por último, o diretório _jars_ deve
 ser depositado no mesmo diretório do arquivo _exemplo.jar_.

- `mvn package -P executavel-unico`<br>
 gera jar executável correspondente ao aplicativo a ser executado via linha de comandos,
 em um único arquivo, _target/exemplo-unico.jar_,
 suficiente para ser transferido e executado. Para executá-lo basta o
 comando `java -jar target/exemplo-unico.jar`.

 - `mvn package -P api`<br>
 gera jar executável juntamente com todas as dependências reunidas em um único arquivo, 
 _target/api.jar_. Este arquivo jar pode ser transferido para outro diretório
  ou máquina e ser executado pelo comando `java -jar target/api.jar`. A execução e exemplos
  de chamadas são fornecidos na seção seguinte.
  
## Executando a aplicação e a RESTFul API

- `mvn exec:java -Dexec.mainClass="nome.completo.Classe" -Dexec.args="arg1 arg2"`<br>
executa o método _main_ da classe indicada na configuração do _plugin_ pertinente
no arquivo pom.xml. Depende de `mvn compile`.

- `java -jar target/exemplo-unico.jar`<br>
executa o aplicativo por meio do arquivo jar criado pelo comando `mvn package
 -P executavel-unico`, conforme comentado anteriormente. Observe que o comando
 anterior e o corrente produzem o mesmo efeito, contudo, o arquivo jar
 permite que seja enviado para um outro diretório ou outro computador,
 onde pode ser executado, enquanto o comando anterior (acima) exige,
 inclusive, a disponibilidade do Maven (o que pode ser útil em tempo de
 desenvolvimento).

- `java -jar target/api.jar` ou ainda `mvn spring-boot:run`<br>
coloca em execução a API gerada por `mvn package -P api` na porta padrão (8080). Para fazer uso de porta
diferente use `java -jar -Dserver.port=9876 target/api.jar`, por exemplo. Requisições podem ser
submetidas conforme abaixo:
   - Abra o endereço _http://localhost:8080/ds_ no seu navegador, ou forneça 
   a seguinte URL para um dia específico
 _http://localhost:8080/ds?data=01-01-2015_.
   - Via linha de comandos (curl), `curl http://localhost:8080/ds` ou `curl 
 http://localhost:8080/ds?data=01-01-200`.
   - Página HTML (há uma interface gráfica) no diretório **gui**, basta abrir
     o arquivo [index.html](http://htmlpreview.github.com/?https://raw.githubusercontent.com/kyriosdata/exemplo/master/gui/index.html).


## Documentação

- `mvn javadoc:javadoc`<br>
produz documentação do projeto depositada em
_target/site/apidocs/index.html_. Este comando está configurado para
o JDK 9.

## Análise estática

Trata-se da análise do código sem que seja executado. Esta análise produz
uma "noção de quão bom" está o código sob alguns aspecto e, em consequência, 
permite orientar eventuais ações de melhoria. Fique atento, "sair 
bem" na análise estática não significa que "agrada usuários". A análise 
estática observa o código. 

Todas estas análises devem ser realizadas em todos os projetos? Não!
Aquelas relevantes para um dado projeto deverão ser
configuradas em conformidade com o contexto em questão.

- **Checkstyle**
  - `mvn checkstyle:checkstyle`<br>
  gera análise de estilo em _target/site/checkstyle.html_. 
  Observe que o uso do plugin
  **jxr** é necessário para geração de relatório do código fonte referenciável
  pelo relatório gerado pelo Checkstyle. Contudo, o uso do **jxr** não é 
  obrigatório.

  - `mvn checkstyle:check`<br>
  faz com que o _build_ falhe se pelo menos
um estilo é violado

- **Dependency Check (vulnerabilidades)**
  - `mvn verify -P owasp`<br>
  análise de vulnerabilidades depositadas em
  _target/dependency-check-report.html_. A primeira execução é relativamente
  "longa", esteja preparado para esperar...

- **JavaNCSS**
  - `mvn javancss:check`<br>
  verifica limites de complexidade ciclomática (CC) e de linhas
  de código sem comentário (NCSS). Este comando depende da compilação
prévia, ou seja _mvn compile_

  - `mvn javancss:report`<br>
  gera relatório em _target/site/javancss.html_ e
também depende de compilação prévia, ou seja, _mvn compile_

- **JDepend**
  - `mvn jdepend:generate`<br>
  gera relatório de algumas métricas, inclusive presença de ciclos em _target/site/jdepend-report.html_

- **PMD**
  - `mvn jxr:jxr pmd:pmd`<br>
  gera relatório em _target/site/pmd.html_. Observe que o uso do plugin
  **jxr** é necessário para geração de relatório do código fonte referenciável
  pelo relatório perado pelo PMD. Contudo, o uso do **jxr** não é obrigatório.

  - `mvn pmd:check`<br>
  falha se pelo menos uma regra é violada
  
  - `mvn jxr:jxr pmd:cpd`<br>
  gera relatório de duplicidades encontradas. Observe que o uso do plugin
  **jxr** é necessário para geração de relatório do código fonte referenciável
   pelo relatório gerado pelo PMD. Contudo, o uso do **jxr** não é obrigatório.

- **Spotbugs**
  - `mvn spotbugs:spotbugs`<br>
  detecção de bugs
   - `mvn spotbugs:check`<br>
   apenas verifica se há erros
  - `mvn spotbugs:gui`<br>
  abre GUI para exibir bugs após _mvn spotbugs:spotbugs_

- **Spotbugs** (security)
  - `mvn spotbugs:spotbugs -P security`<br>
  detecção de bugs
   - `mvn spotbugs:check -P security`<br>
   apenas verifica se há erros
  - `mvn spotbugs:gui -P security`<br>
  abre GUI para exibir bugs após _mvn spotbugs:spotbugs -P security_

- **Snyk**

  - `mvn snyk:test -P security`<br>
  análise de vulnerabilidade oferecida pelo serviço [Snyk](https://snyk.io). 
  A propriedade _snyk.token_ deve estar definida no arquivo
  _$HOME/.m2/settings.xml_, conforme ilustrado abaixo. Alternativamente,
  por conveniência, o valor pode ser fornecido via linha de comandos,
  **-Dsnyk.token=API-TOKEN** (neste caso não é necessária a definição no
  arquivo _settings.xml_.
  ```xml
  <settings>
  <profiles>
    <profile>
        <activation>
            <activeByDefault>true</activeByDefault>
        </activation>
        <properties>
            <snyk.token>API-TOKEN AQUI</snyk.token>
        </properties>
    </profile>
  </profiles>
  </settings>
  ```


  - `mvn snyk:monitor -P security`<br>
  Disponibiliza relatório em snyk.io (atualiza _badge_)

## Relatório do projeto

- `mvn package site -P cobertura` <br>
Gera documentação do projeto, incluindo relatórios de análises estáticas em
_target/site/index.html_.

- `mvn site:run` executa serviço que disponibiliza em http://localhost:8080 a
documentação gerada no passo anterior.

## Disponibilizando biblioteca no repositório Maven Central

A boa notícia é que este _pom.xml_ está devidamente configurado para
publicação no Maven Central, contudo, depende de outras ações e da
configuração do arquivo _HOMEDIR/.m2/settings.xml_.

- **Nexus Staging Maven Plugin**
  - `mvn deploy -P deploy`<br>

Particularmente considero a publicação usando o Maven Central mais
complexa do que a alternativa recente oferecida pelo [JitPack](https://jitpack.io),
uma alternativa.

## Dependências

O desenvolvimento de código em Java, em geral, usufrui de um significativo conjunto de bibliotecas e _frameworks_. Esta
reutilização é incorporada em um projeto por meio de dependências. Gerenciá-las
torna-se necessário e há dois _plugins_ úteis para tal. Consulte a documentação deles
para outros além daqueles ilustrados abaixo: Version Maven Plugin ([aqui](http://www.mojohaus.org/versions-maven-plugin/)) e Apache Maven Dependency Plugin ([aqui](https://maven.apache.org/plugins/maven-dependency-plugin/)).

- `mvn versions:display-dependency-updates`<br>
Lista dependências para as quais há versões mais recentes do que aquelas empregadas.

- `mvn versions:display-plugin-updates`<br>
Lista _plugins_ para as quais há versões mais recentes do que aquelas empregadas.

- `mvn dependency:analyze`<br>
Analisar as dependências de um projeto. Dependência citada mas não utilizada, dentre
outras situações são relatadas por meio desta análise.

- `mvn dependency:purge-local-repository`<br>
limpa dependências do projeto em questão do repositório local e obtém dependências novamente. Útil quando o repositório local é corrompido.

- `mvn dependency:copy-dependencies`<br>
Copia dependências do projeto para o diretório **target/dependency**.

## Banco de Dados H2 (bônus)
Dado o cenário "comum" no qual aplicações em Java fazem uso de um banco
relacional, aqui são oferecidos recursos para desenvolvimento usando o
H2 (https://www.h2database.com). 

- `mvn exec:java -P start-shell-h2`<br>
   Abre/cria banco para uso via linha de comandos. 
   Para criar o banco de nome `bancoNome` no diretório `dir` forneça 
   `jdbc:h2:<dir>/bancoNome`. Se existir, apenas será aberto. 
   Adicionalmente, forneça como _driver_ a classe `org.h2.Driver`. 
   Você pode fazer uso do diretório de sua 
   preferência, contudo, a sugestão é criar o banco no diretório `target` 
   (usado pelo comando seguinte).

- `mvn exec:java -P start-h2`<br> 
   Este comando abre uma interface gráfica, via _browser_, no endereço
   http://localhost:8082. Observe que o comando anterior permite interagir 
   com o banco via linha de comandos. Este comando, ao contrário do 
   anterior, assume que o banco a ser aberto está no diretório `target`.
   Quando fornecer a URL, use `.` para representar tal diretório. 
    

## Outros recursos
- `mvn help:effective-pom`<br>
exibe POM de fato empregado

- `mvn help:describe -Dcmd=clean`<br>
exibe detalhes da fase _clean_


## Integração contínua
Notou os emblemas (_badges_) no início da página? Todo _commit_ na presente
página automaticamente irá realizar uma série de operações, como compilação,
execução dos testes de unidade e várias análises estáticas. O resultado
geral é imediatamente acessível por meio dos emblemas (clique neles),
onde detalhes são disponibilizados nas páginas correspondentes.
Observe que isso se transforma em um significativo **instrumento
de visibilidade do projeto**.
