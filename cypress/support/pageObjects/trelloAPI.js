export class TrelloAPI {
  boardId = null;
  cardId = null;
  listId = null;
  boardName = "Automated_QA_Board";
  cardName = "Automated_QA_Card";
  baseUrl = "https://api.trello.com/1";
  apiKey = Cypress.env('TRELLO_API_KEY');
  apiToken = Cypress.env('TRELLO_API_TOKEN');

  // Gera parâmetros de autenticação para a API do Trello
  authParams() {
    return {
      key: this.apiKey,
      token: this.apiToken
    };
  }

  // Cria um novo board
  createBoard() {
    cy.log('Criando board na API Trello');
    return cy.request({
      method: 'POST',
      url: `${this.baseUrl}/boards/`,
      qs: {
        name: this.boardName,
        ...this.authParams(),
      }
    }).then((resp) => {
      expect(resp.status).to.eq(200);
      this.boardId = resp.body.id;
      cy.log(`Board criado com ID: ${this.boardId}`);
      // Obtém a lista padrão do board
      return this.getFirstListId();
    });
  }

  // Busca a primeira lista criada automaticamente pelo Trello ao criar o board
  getFirstListId() {
    cy.log('Buscando primeira lista do board');
    return cy.request({
      method: 'GET',
      url: `${this.baseUrl}/boards/${this.boardId}/lists`,
      qs: this.authParams(),
    }).then((resp) => {
      expect(resp.status).to.eq(200);
      this.listId = resp.body[0].id;
      cy.log(`Primeira lista com ID: ${this.listId}`);
    });
  }

  // Cria um card na lista obtida
  createCard() {
    cy.log('Criando card na lista do board');
    return cy.request({
      method: 'POST',
      url: `${this.baseUrl}/cards`,
      qs: {
        idList: this.listId,
        name: this.cardName,
        ...this.authParams(),
      }
    }).then((resp) => {
      expect(resp.status).to.eq(200);
      this.cardId = resp.body.id;
      cy.log(`Card criado com ID: ${this.cardId}`);
    });
  }

  // Exclui um card pelo ID
  deleteCard() {
    cy.log('Excluindo card criado');
    return cy.request({
      method: 'DELETE',
      url: `${this.baseUrl}/cards/${this.cardId}`,
      qs: this.authParams(),
    }).then((resp) => {
      expect(resp.status).to.eq(200);
      cy.log('Card excluído');
    });
  }

  // Exclui o board pelo ID
  deleteBoard() {
    cy.log('Excluindo board criado');
    return cy.request({
      method: 'DELETE',
      url: `${this.baseUrl}/boards/${this.boardId}`,
      qs: this.authParams(),
    }).then((resp) => {
      expect(resp.status).to.eq(200);
      cy.log('Board excluído');
    });
  }
}
