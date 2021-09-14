export default class LoginScreenPageObject {
  constructor(cy) {
    this.cy = cy;
    this.cy.visit('/app/login');// acessa a página
  }

  preencherCamposDoFormulario({ user, password }) {
    this.cy.get('#formCadastro input[name="usuario"]').type(user);// preenche o campo selecionado
    this.cy.get('#formCadastro input[name="senha"]').type(password);// preenche o campo selecionado
    return this;// para permitir as chamadas encadeadas.
  }

  submeterLoginForm() {
    this.cy.get('#formCadastro button[type="submit"]').click();// clica no botão selecionado
    return this;// para permitir as chamadas encadeadas.
  }
}
