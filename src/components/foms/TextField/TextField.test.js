import React from 'react';
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
});
