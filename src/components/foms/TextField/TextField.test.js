/* eslint-disable max-len */
import React from 'react';
import user from '@testing-library/user-event';
import { render, screen } from '../../../infra/tests/testUtils';// Traz a lib @testint-library/react e nosso websiteProvider junto....Alib recomenda ser iportada assim, e não diretamente.
import TextField from './index';

describe('<TextField />', () => {
  test('Renderizar componente', () => {
    render(
      // <WebsiteGlobalProvider>
      <TextField
        placeholder="Nome"
        value="Felipe"
        onChange={() => {}}
        name="nome"
      />
      // </WebsiteGlobalProvider>
      ,
    );
    // screen.debug();
    const textField = screen.getByPlaceholderText(/nome/i);// esse regex defende contra Letras maiusculas ex Nome ou nome
    expect(textField).toMatchSnapshot();
  });

  describe('Quando o campo é valido', () => {
    describe('E usuario esta digitando', () => {
      test('O valor do campo deve ser atualizado', () => {
        const onChangeMock = jest.fn();// poderia ser uma arrow function vazia tbm.
        render(
          <TextField
            placeholder="Nome"
            value="Felipe"
            onChange={onChangeMock}
            name="email"
            isTouched
          />
          ,
        );
        const campoNome = screen.getByPlaceholderText(/nome/i);
        user.type(campoNome, 'Felipe@exemplo.com');
        expect(onChangeMock).toHaveBeenCalledTimes(18);// Change mock é chamado a cada vez que uma tecla é digitada, então sé o valor digitado for o email do exemplo logo o resultado deve se 18.
      });
    });
  });

  describe('Quando o campo é invalido', () => {
    test('Mostrar mensagem de erro', () => {
      render(
        <TextField
          placeholder="Email"
          value="Felipe@exemplo.com"
          onChange={() => {}}
          name="email"
          isTouched
          error="O campo email é obrigatório"
        />
        ,
      );
      const campoEmail = screen.getByPlaceholderText(/email/i);
      expect(campoEmail).toHaveValue('Felipe@exemplo.com');
      const conteudoSpan = screen.getByRole('alert');
      expect(conteudoSpan).toHaveTextContent('O campo email é obrigatório');
    });
  });
});
