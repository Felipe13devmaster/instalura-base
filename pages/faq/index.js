import React from 'react';
import FAQScreen from '../../src/components/screens/FAQScreen';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';

// eslint-disable-next-line react/prop-types
const FAQPage = ({ faqCategories }) =>
  // const [faqCategories, setfaqCategories] = React.useState([]);
  // Jeito do react
  // eslint-disable-next-line max-len
  // React.useEffect(() => { // usado para pegar alterações no ciclo de vida do componente que não acarretam mudanças de estado.
  //   fetch('https://instalura-api.vercel.app/api/content/faq')
  //     .then((res) => res.json())
  //     .then((resJSON) => resJSON.data)
  //     .then((resDone) => setfaqCategories(resDone));
  // }, []);
  // eslint-disable-next-line implicit-arrow-linebreak
  (
    <FAQScreen faqCategories={faqCategories} />
  );
export default websitePageHOC(FAQPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Perguntas Frequentes',
    },
  },
});

export async function getStaticProps() { // renderizando o conteudo estatico no servidor
  const faqCategories = await fetch('https://instalura-api.vercel.app/api/content/faq')
    .then((res) => res.json())
    .then((resJSON) => resJSON.data);
  return {
    props: { faqCategories },
  };
}
