import React from 'react';
import Text from '../src/components/foundation/Text';
import Button from '../src/components/commons/Button';
import Grid from '../src/components/foundation/layout/Grid';
import { WebsitePageContext } from '../src/components/wrappers/WebsitePage';
import Box from '../src/components/foundation/layout/Box';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

const HomeScreen = () => {
  const websitePageContext = React.useContext(WebsitePageContext);
  return (
    <Box
      display="flex"
      flex="1"
      flexDirection="column"
    >
      <Grid.Container marginTop={{ xs: '32px', md: '75px' }}>
        <Grid.Row>
          <Grid.Col
            value={{ xs: 12, md: 5 }}
            offset={1}// desloca a coluna uma casa para a direita
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
            flexDirection="column"
          >
            <Text
              variant="title"
              tag="h1"
              color="tertiary.main"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
            >
              Compartilhe momentos e conecte-se com amigos
            </Text>
            <Text
              variant="paragraph1"
              tag="p"
              color="tertiary.light"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
            </Text>

            <Button
              variant="primary.main"
              margin={{
                xs: 'auto',
                md: 'initial',
              }}
              display="block"
              onClick={() => {
              // isModalOpen = true;
                websitePageContext.toggleModalCadastro();// state sendo atribuido
              }}
            >
              Cadastrar
            </Button>
          </Grid.Col>
          <Grid.Col
            offset={0}
            value={{ xs: 12, md: 6 }}
          >
            <img
              alt="Imagem"
              style={{ display: 'block', margin: 'auto' }}
              src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
            />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </Box>
  );
};

// const Home = () => (
//   <WebsitePageWrapper
//     seoProps={{
//       headTitle: 'Home',
//     }}
//     pageBoxProps={{
//       backgroundImage: 'url(/images/bubbles.svg)',
//       backgroundRepeat: 'no-repeat',
//       backgroundPosition: 'bottom right',
//     }}
//     menuProps={{
//       display: true,
//     }}
//   >
//     <HomeScreen />
//   </WebsitePageWrapper>
// );

export default websitePageHOC(HomeScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Home',
    },
    pageBoxProps: {
      backgroundImage: 'url(/images/bubbles.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom right',
    },
  },
});
