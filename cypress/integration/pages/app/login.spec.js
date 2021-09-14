/// <reference types="cypress" />

import LoginScreenPageObject from '../../../../src/components/screens/app/LoginScreen/LoginScreen.pageObject.js';

// Ajuda no autocomplete do cypress

describe('/pages/app/login', () => {
  // it === teste
  it('preencha os campos e vá para a página /app/profile', () => {
    cy.intercept('https://instalura-api-git-master-omariosouto.vercel.app/api/login')// intercepta a requisição para o endpoint informado.
      .as('userLogin');

    const loginScreen = new LoginScreenPageObject(cy);

    loginScreen
      .preencherCamposDoFormulario({ user: 'omariosouto', password: 'senhasegura' })
      .submeterLoginForm();

    cy.url().should('include', '/app/profile');// verifica se teve o comportamento esperado(Ir pra essa url neste exemplo).

    cy.wait('@userLogin')// Temos o token salvo?
      .then((intercept) => {
        const { token } = intercept.response.body.data;// pega o token interceptado
        cy.getCookie('APP_TOKEN')// pega o cookie salvo pelo nome
          .should('exist')// verifica se existe um salvo com o nome informado
          .should('have.property', 'value', token); // valida se o valor desse token salvo no cookie é o mesmo do cookie interceptado
      });
  });
});
