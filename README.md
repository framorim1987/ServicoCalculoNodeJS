# Exercício do curso de Técnicas e programação

Nesta atividade será desenvolvido um serviço web responsável por realizar as quatro operações aritméticas: soma, multiplicação, divisão e subtração.

Ela é divida em duas partes:

* Servidor

* Cliente

## Servidor

O servidor foi  desenvolvido em NodeJS.

O serviço foi configurado em um arquivo script.js e recebe três valores: numA, numB, opcao . Sendo que numA e numB são os valores numéricos e opcao é a opção de operação aritmética.

Foi realizado o tratamento, apresentando apenas o resultado da operação solicitada pelo usuário.

Para que tenhamos o conceito de encapsulamento, as operações não foram escritas diretamente no arquivo script.js. Deste modo, foi criado um módulo que contenha as 4 operações aritméticas e importado no arquivo script.js.

## Cliente

O cliente é responsável por consumir o serviço web. Deste modo, foi construido uma página web com formulário conforme arquivo base, com dois campos para que o usuário possa digitar neles os dois números que serão utilizados nas operações aritméticas.

Também foi criado um terceiro campo (select) no qual o usuário poderá selecionar a operação desejada dentre as 4 possíveis.

## Como rodar

Com o node instalado navegue pelo terminal até a pasta do projeto e execute o comando

```

node script.js

```

O servidor será iniciado.

Execute o arquivo index.html
