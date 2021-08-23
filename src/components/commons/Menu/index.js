/* eslint-disable array-callback-return */
import React from 'react';
import PropTypes from 'prop-types';
import MenuStyle from './styles/MenuStyle';
import { Logo } from '../../../theme/Logotipo/Logo';
import Button from '../Button';
import Text from '../../foundation/Text';

const Menu = ({ onCadastrarClick }) => {
  const links = [
    {
      texto: 'Home',
      url: '/',
    },
    {
      texto: 'Perguntas frequentes',
      url: '/faq',
    },
    {
      texto: 'Sobre',
      url: '/sobre',
    },
  ];

  return (
    <MenuStyle>
      <MenuStyle.LadoEsquerdo>
        <Logo />
      </MenuStyle.LadoEsquerdo>
      <MenuStyle.LadoCentral>
        {links.map((link) => ( // Sempre que for array(lista) tem que passar uma key unica nos itens
          <li key={link.url}>
            {/* <NextLink href={link.url}>
              <a>
                {link.texto}
              </a>
            </NextLink> */}
            <Text variant="smallestException" tag="a" href={link.url}>
              {link.texto}
            </Text>
          </li>
        ))}
      </MenuStyle.LadoCentral>
      <MenuStyle.LadoDireito>
        <Button variant="secondary.main" ghost href="/app/login">
          Entrar
        </Button>
        <Button variant="primary.main" onClick={onCadastrarClick}>
          Cadastrar
        </Button>
      </MenuStyle.LadoDireito>
    </MenuStyle>
  );
};
// OBS:variante === classe css analogamente
Menu.propTypes = {
  onCadastrarClick: PropTypes.func.isRequired,
};

export default Menu;
