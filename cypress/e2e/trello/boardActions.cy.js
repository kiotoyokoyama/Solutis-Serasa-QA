import { TrelloAPI } from '../../support/pageObjects/trelloAPI';

describe('Automação Trello API - Desafio Solutis', () => {
  const trello = new TrelloAPI();

  before(() => {
    // Cria um board e obtém a lista padrão antes dos testes
    trello.createBoard();
  });

  it('Deve criar um card no board', () => {
    // Cria um card usando a lista padrão
    trello.createCard();
  });

  it('Deve excluir o card criado', () => {
    // Exclui o card criado no teste anterior
    trello.deleteCard();
  });

  after(() => {
    // Exclui o board criado após os testes
    trello.deleteBoard();
  });
});
