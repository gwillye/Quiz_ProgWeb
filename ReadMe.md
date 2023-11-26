# BrainGym
## Trabalho de Programação em Web - Quiz
## Alunos: Gabriel Willye Borges Valençoela e Lucas Lacerda Arruda

## Sumário

1. Introdução
2. Dependências
3. Explicação do projeto
4. Divisão de tarefas

## 1. Introdução

Este repositório contém os arquivos, códigos e a documentação utilizada pelos estudantes Gabriel Willye Borges Valençoela e Lucas Lacerda Arruda para o desenvolvimento do trabalho prático da matéria de Programação Web, turma 02 - 2023 02.

Os protótipos, desenvolvidos utilizando a ferramenta Balsamiq, estão disponíveis [aqui](Protótipos/Balsamiq/). Para compreender um pouco mais das ideias por trás do projeto e de como foi o desenvolvimento, nossa apresentação está [aqui](https://drive.google.com/file/d/1MI1FDUqTAkcOOQhNsP7k7KuNEE0hRh2C/view?usp=sharing).

## 2. Dependências

Este trabalho possui como dependências a instalação do React e da biblioteca para Routes. Para instalação e uso do React, foi instalado utilizando o Vite. Para a instalação, acesse o terminal do VSCode ou do Ubuntu, e digite os seguintes comandos:

npm create vite@latest BrainGym --template react
*#Selecione React; Selecione JavaScript*
cd teste
npm install
*#Rode quando for utilizar: npm run dev*
*#Para instalar as routes, use o comando abaixo*
npm install react-router-dom

## 3. Explicação do projeto

Este projeto começa pela Home, o que te permite navegar para a página de SObre Nós e para a página de Login e Criar uma conta. Após o login, você pode ir para o Menu principal, que te permite ver o ranking de todos os jogadores, criar um quiz ou jogar um quiz. Para jogar um quiz, basta selecionar um dos quizzes disponiveis na lista, confirmar sua escolha e jogar. Após isso, chegamos a tela de resultado que exibe o seu desempenho em comparação com o desempenho de outros jogadores.
A lógica que o site usa é ativa através de cinco classes: Quiz, Pergunta, Pessoa, Usuario e Administrador. Uma pergunta possui uma questão, as alternativas e a resposta. O quiz possui todas as perguntas possíveis, além dos dados de seu criador e suas informações que são exibidas antes de se jogar um quiz. Tanto um usuario como um administrador são objetos filhos de pessoa, que armazena as informações de registro. 

## 4. Divisão de tarefas

Na primeira parte, ficou acordado entre os membros do grupo que o aluno Gabriel Willye estaria responsável por desenvolver os protótipos, enquanto o membro Lucas estaria responsável pela arte e direção gráfica do projeto. Na segunda parte do trabalho, o aluno Gabriel Willye estava responsável por criar a parte HTML das telas, enquanto o aluno Lucas Lacerda se responsabilizava pela implementação do css e design. Na última parte do projeto, dividiu-se as tarefas que era responsabilidade do aluno Gabriel Willye escrever os códigos de cada uma das telas do projeto e adaptá-las para utilização no React, enquanto o aluno Lucas Lacerda deveria criar a conexão com o Firebase e estruturar os arquivos nas pastas necessárias, visto que, por um problema de hardware enfrentado por Gabriel com o sistema operacional de seu computador, ele não estava conseguindo instalar o React. 