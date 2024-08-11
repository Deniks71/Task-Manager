# Task Manager

Esse projeto é uma simples API REST de um gerenciador de tarefas simples, para praticar lógica e conceitos de protocolos HTTP de forma introdutória para iniciantes.

## Descrição do Projeto

Nesse projeto é possível criar atividades, contendo Id (Ideal que sejam criados ID diferentes) porém em versões futuras o ID será introduzido pelo banco de dados quando for implementado.
Além disso também é possível listar todas as atividades, listar atividades individualmente, editar e deletar as mesmas.

## Pré Requisitos

Nodejs e express. Também foi utilizado o Nodemon, porém não é obrigatorio, visto que essa biblioteca é algo para ajudar somente no desenvolvimento.

## Clone do repositório
https://github.com/Deniks71/Task-Manager.git
Para instalar, abra o a pasta clonada na sua IDE favorita, e rode o comando NPM install, que ele irá installar todas as dependências necessárias.

## Explicação dos arquivos

Na pasta "src", estão alocadas as nossas rotas e lógica da nossa aplicação.
E na raiz o script "server.js", é responsável somente por manter o nosso server de pé, ou seja quando executamos nossa aplicação para subir o server, o arquivo "server.js" é o responsável por isso.
