import React from 'react';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';
import Button from '../../src/components/commons/Button';
import Link from '../../src/components/commons/Link';
import Box from '../../src/components/foundation/layout/Box';
import Grid from '../../src/components/foundation/layout/Grid';
import Text from '../../src/components/foundation/Text';
import TextField from '../../src/components/foms/TextField';
import { WebsitePageContext } from '../../src/components/wrappers/WebsitePage';
import { Logo } from '../../src/theme/Logotipo/Logo';

const LoginForm = () => (
  <form id="formCadastro" action="/app/profile">
    <TextField
      placeholder="Usuário"
      name="usuario"
    />
    <TextField
      placeholder="Senha"
      name="senha"
      type="password"
    />

    <Button
      type="submit"
      variant="primary.main"
      margin={{
        xs: '0 auto',
        md: 'initial',
      }}
      fullWidth
    >
      Entrar
    </Button>
  </form>
);

const LoginScreen = () => {
  const websitePageContext = React.useContext(WebsitePageContext);

  return (
    <Grid.Container
      display="flex"
      flex="1"
      alignItems="center"
    >
      <Grid.Row
        flex="1"
        alignItems="center"
        justifyContent="center"
      >
        <Grid.Col
          display="flex"
          flexDirection="column"
          justifyContent="center"
          offset={{ lg: 2 }}
          value={{ xs: 12, md: 6, lg: 4 }}
          flex={1}
        >
          <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
            justifyContent="center"
            marginTop="37px"
            marginBottom="37px"
          >
            <Link
              href="/"
              color="secondary.main"
              alignSelf="center"
              marginBottom="30px"
            >
              <Logo size="large" />
            </Link>
            <LoginForm />
            <Text
              variant="paragraph1"
              tag="p"
              color="tertiary.light"
              textAlign="center"
            >
              {'Não tem uma conta? '}
              <Link
                href="/"
                color="secondary.main"
                onClick={(event) => {
                  event.preventDefault();
                  websitePageContext.toggleModalCadastro();
                }}
              >
                Cadastre-se
              </Link>
            </Text>
          </Box>

        </Grid.Col>

        <Grid.Col value={{ xs: 12, md: 6 }}>
          <Box
            display="flex"
            justifyContent="center"
          >
            <img
              align="center"
              src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
              alt="Telefones mostrando as páginas internas do app"
            />
          </Box>
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  );
};

export default websitePageHOC(LoginScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Login',
    },
    menuProps: {
      display: false,
    },
    pageBoxProps: {
      backgroundImage: 'url(/images/bubbles.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom right',
    },
  },
});
