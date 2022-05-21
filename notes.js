/*

Link para consulta sobre ambiente de desenvolvimento -> 
https://www.notion.so/Ambiente-de-desenvolvimento-Trilha-ReactJS-e7a377d183134647a177b6a34785f8c3

Inicializamos o repositorio criando o package.json
yarn init -y ou npm init -y

Instalando a primeira biblioteca, o React
yarn add react

Criaremos uma parta /src onde ficara todo o codigo da aplicacao e outra pasta /public que conterá arquivos publicos 
ou assets (qualquer arquivo que deve ser acessado diretamente do meio externo).

no /public criaremos o arquivo index.html

dentro do arquivo index.html começo escrevendo html e ele sugere "html:5", só dar enter e ele preenche uma estrutura de html5

O Babel converte nosso codigo para que todos os browser entendam. Para adicionar: 
yarn add @babel/core @babel/cli @babel/preset-env -D

A dependencia de desenvolvimento significa que nenhuma destas bibliotecas serao utilizadas quando o projeto estiver 
rodando online, em producao.

Criaremos um arquivo babel.config.js na raiz. Se quiser ver o conteúdo vai lá no arquivo e vê.

na duvida vc pode rodar no terminal yarn babel -h (help)

vamos criar um arquivo index.js na pasta /src.

para usar a CLI do Babel dentro do terminal, vc pode digitar: yarn babel src/index.js --out-file dist/bundle.js

para usar React dentro do Babel vc precisar rodar esse comando: yarn add @babel/preset-react -D e no babel.config.js vc precisa adicionar 
a linha '@babel/preset-react'.

vamos instalar o webpack para converter arquivos sass, less entre outros em formatos entendidos pelo browser
yarn add webpack webpack-cli -D

Vamos criar um arquivo na raiz, webpack.config.js

adicionar o babel-loader: yarn add babel-loader -D

para executar o webpack rodar: yarn webpack

instalar esse cara pra ele injetar o js bundle dentro do projeto: yarn add html-webpack-plugin -D

para verificar o arquivo rodando entrar na pasta /dist e abrir o arquivo

instalar o webpack dev server: yarn add webpack-dev-server -D para que o webpack fique observando as alteracoes 
e assim que for alterada ele gera o build de novo

apos isso rodar no terminal: yarn webpack serve

o source maps é uma forma de visualizar o codigo da aplicacao dentro do bundlejs. existem diversos tipos de source maps e alguns
podem ser usados em ambiente de desenvolvimento e outros em ambiente de producao.

vamos adicionar o cross env para definir variaveis de ambiente independente do sistema operacional do usuario. yarn add cross-env -D 

os arquivos css nao conseguem ser lidos corretamente, entao precisamos instalar algumas coisas:
yarn add style-loader css-loader -D

o sass é o pre processador mais famoso e utilizado. adicionar atraves do yarn add node-sass sass-loader -D

quando vc quiser remover algo q instalou errado: yarn remove sass (por exemplo)

para manter o estado da aplicacao mesmo após fazer alguma alteracao no código e salvar, o diego recomenda que instale uma dependencia q chama
React Refresh Webpack Plugin através do comando: yarn add -D @pmmmwh/react-refresh-webpack-plugin react-refresh

vamos instalar o typescript como uma dependencia de desenvolvimento : yarn add typescript -D

inicializar o typescript através do comando: yarn tsc --init ou ainda yarn typescript --init que irá criar um arquivo tsconfig.json

dentro do arquivo tsconfig.json vamos incluir na parte de lib as seguintes bibliotecas: "dom", "dom.iterable", "esnext"

adicionar tambem o seguinte: yarn add @babel/preset-typescript -D . adicionar esse preset tambem no arquico babel.config.js

iremos alterar diversas informacoes dentro do webpack.config.js

trocar o index para index.jsx

instalar as bibliotecas de tipo, por exemplo: yarn add @types/react-dom -D

*/