# Automação Cypress + Mochawesome – Desafio Trello Solutis

## Descrição
Projeto pronto para rodar automação de testes via API do Trello, usando Cypress + Mochawesome.
Gera relatório HTML ao final. 

## Pré-requisitos

- Node.js 18+
- NPM

## Instalação

```bash
npm install
```

## Como rodar o projeto

1. //Verifique que o arquivo `cypress.env.json` já está na raiz do projeto.
2. //Execute o comando abaixo:

```bash
npm test
```

O Cypress rodará automaticamente os testes e gerará o relatório HTML na pasta `mochawesome-report/mochawesome.html`.

## Execução interativa (opcional)
Para abrir a interface gráfica do Cypress:
```bash
npm run cypress:open
```

## Estrutura do Projeto

```
cypress/
│
├── e2e/trello/boardActions.cy.js
├── support/e2e.js
├── support/commands.js
├── support/pageObjects/trelloAPI.js
├── fixtures/
├── cypress.env.json
├── cypress.config.js
├── package.json
├── .gitignore
└── README.md
```

## Relatório HTML
O relatório será salvo automaticamente em `mochawesome-report/mochawesome.html` após a execução.

---

