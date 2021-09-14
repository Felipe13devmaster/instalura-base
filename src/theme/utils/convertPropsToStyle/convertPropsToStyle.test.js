import convertPropsToStyle from './index';

describe('convertPropsToStyle()', () => {
  describe('Quando receber um argumanto simples', () => {
    test('é uma string', () => {
      const convertPropsToStyleResultado = convertPropsToStyle('textAlign');
      const componentProps = { textAlign: 'center' };
      const styleResultado = convertPropsToStyleResultado(componentProps);
      // console.log(convertPropsToStyleResultado(componentProps));
      expect(styleResultado).toEqual({ textAlign: 'center' });
    });
    test('é um numero', () => {
      const convertPropsToStyleResultado = convertPropsToStyle('flex');
      const componentProps = { flex: 1 };
      const styleResultado = convertPropsToStyleResultado(componentProps);
      expect(styleResultado).toEqual({ flex: 1 });
    });
  });

  describe('quando receber apenas um argumento com breakingpoints', () => {
    test('renders only one breakpoint resolution', () => {
      const propToStyleResult = convertPropsToStyle('textAlign');
      // <Text textAlign="center" />
      const componentProps = { textAlign: { xs: 'center' } };
      const styleResult = propToStyleResult(componentProps);

      expect(styleResult).toMatchSnapshot();
    });
    test('renders two or more breakpoint resolutions', () => {
      const propToStyleResult = convertPropsToStyle('textAlign');
      // <Text textAlign="center" />
      const componentProps = { textAlign: { xs: 'center', md: 'right' } };
      const styleResult = propToStyleResult(componentProps);

      expect(styleResult).toMatchSnapshot();
    });
  });
});
