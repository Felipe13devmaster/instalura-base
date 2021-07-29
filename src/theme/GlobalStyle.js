import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

//Reset do css, serve para tirar o estilo padrao dos navegadores.
export const GlobalStyle = createGlobalStyle`
    * {
    box-sizing: border-box;
    }

    ${normalize}//Resolve os problemas de inconsistencia de estilos padrão dos browsers

    body {
    margin: 0;
    padding: 0;
    }

  /* Full height layout */
    html, body {
        display: flex;
        min-height: 100vh;
        width: 100%;
        font-family: ${({ theme }) => theme.fontFamily};
    }
    #__next {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
`;