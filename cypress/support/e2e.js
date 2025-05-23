// Arquivo bootstrap Cypress para rodar comandos customizados e handlers globais
import './commands';
Cypress.on('uncaught:exception', () => false);
