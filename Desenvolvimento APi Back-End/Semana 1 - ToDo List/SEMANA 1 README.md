# Semana 1

## Atividade de Nivelamento - "ToDO List"

## Infomaçoes Sobre a resolução da Atividade:

Crie uma lista de tarefas (To-Do List) utilizando HTML, CSS e JavaScript que permita adicionar novas tarefas, marcá-las como concluídas e removê-las.

## Informaçoes sobre atividade:

Foi criado o que foi pedido nos arquivos "Index.html", "Style.css" e "Script.js". tudo dentro de "ToDo (teste)" e apenas uma teste de um mini projeto de ToDo list fazendo um crud de utilizando "Espress, Node, TypeScript" para o back e "HTML e CSS" simples para o front. porem nao foi finalizado a integração como front, foi apenas a parte da API, porem nao foi finalizada ainda!!!

## "index.html, style.css e script.js"

confesso que utilizei de meios de ia para realizar a parte do style, porem a parte do script e a parte do html foi tanto por conhecimento que ja possuo, quanto pesquisa na web !!!

## API info - informações sobre a API

### quando baixar o codigo ira rodar os seguintes comandos:

Para instalar as dependecias do node:
`npm i`

Para rodar o servidor do Back-End na porta "8001":
`npm run start`

Caso nao tenha a pasta "migrations", dentro da pasta "prisma", rodar o comando: 
`npm run migrate `

Caso queira ver de forma visual o banco de dados, com o studio do prisma:
`npm run studio`

### Scripts do packge.json:

No arquivo package.json, a seção "scripts" define comandos que podem ser executados usando o npm. Aqui está o que cada um faz:

"dev": "nodemon": Executa o nodemon, que monitora mudanças no código e reinicia o servidor automaticamente. Use `npm run dev` para rodar.

"start": "npm run build && node dist/server.js": Compila o TypeScript para JavaScript e inicia o servidor em produção. Execute com `npm start`.

"migrate": "prisma migrate dev": Aplica migrações pendentes no banco de dados usando o Prisma. Rode com `npm run migrate`.

"studio": "npx prisma studio": Abre o Prisma Studio, uma interface visual para gerenciar o banco de dados. Use `npm run studio`.

"build": "rimraf ./dist && tsc": Remove a pasta dist e compila o TypeScript em JavaScript. Execute com `npm run build`.

"test": "jest": Roda a suíte de testes com o Jest. Use `npm test`.

"test
": "jest --watch": Executa os testes em modo de observação, reexecutando-os ao detectar mudanças. Rode com `npm run test:watch`.

### URL "http://localhost:8001/api/v1/toDoList"

vc vai usar essa mesma URL para todo o crud: "Post, Get, GetByID, Patch e Delete".

Post: "http://localhost:8001/api/v1/toDoList"
Get: "http://localhost:8001/api/v1/toDoList"
GetByID: "http://localhost:8001/api/v1/toDoList/1"
Patch: "http://localhost:8001/api/v1/toDoList/1"
Delete: "http://localhost:8001/api/v1/toDoList/1"

### Json para teste:

```
{
  "title": "title",
  "description": "Description",
  "limitDate": "2000-03-22T00:00:00.000Z"
}
```

### Thunder Client Json para teste 

Nome do arquivo "thunder-collection_ToDo List.json".

"Thunder Client" e uma forma de testar meu crud, como se fosse um postman, porem e uma estenção do proprio VScode. 

Link Thunder client: "https://www.thunderclient.com/"

Apos a instação do Thunder client, va para a parte collection, clique nos 3 risquinhos na direita encima, com o butao direito do mouse, e click em "impot" para dai vc so importar o json e testar a aplicação de forma simples facil e rapida.