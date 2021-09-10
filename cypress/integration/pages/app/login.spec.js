/// <reference types="cypress" />
// Ajuda no autocomplete do cypress

describe('/pages/app/login', () => {
  // it === teste
  it('preencha os campos e vá para a página /app/profile', () => {
    cy.visit('/app/login/');// acessa a página
    cy.get('#formCadastro input[name="usuario"]').type('Felipe');// preenche o campo selecionado
    cy.get('#formCadastro input[name="senha"]').type('1234');// preenche o campo selecionado
    cy.get('#formCadastro button[type="submit"]').click();// clica no botão selecionado
    cy.url().should('incude', '/app./profile');// verifica se teve o comportamento esperado(Ir pra essa url neste exemplo).
  });
});
