import redirects from './redirects';

describe('configs/redirects', () => {
  test('renderizar todos os redirects atuais', () => {
    expect(redirects).toMatchSnapshot();
    // tira uma foto do snapshot e compara automaticamente com a versão anterior.
  });
});
