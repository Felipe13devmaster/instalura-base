import React from 'react';
import { MenuStyle } from './styles/MenuStyle';
import { Logo } from '../../../theme/Logotipo/Logo';
import { Button } from '../Button';
import Text from '../../foundation/Text';

export default function Menu() {
    const links = [
        {
            texto: 'Home',
            url: '/'
        },
        {
            texto: 'Perguntas frequentes',
            url: '/faq'
        },
        {
            texto: 'Sobre',
            url: '/sobre'
        }
    ];

    return (
      <MenuStyle>
        <MenuStyle.LadoEsquerdo>
            <Logo></Logo>
        </MenuStyle.LadoEsquerdo>
        <MenuStyle.LadoCentral>
            {links.map((link) => {//Sempre que for array(lista) tem que passar uma key unica nos itens
                return (
                    <li key={link.url}>
                       <Text variant='smallestException' tag='a' href={link.url}>
                            {link.texto}
                        </Text> 
                    </li>
                );
            })}
        </MenuStyle.LadoCentral>
        <MenuStyle.LadoDireito>
            <Button variant='secondary.main' ghost>
                Entrar
            </Button>
            <Button variant='primary.main'>
                Cadastrar
            </Button>
            </MenuStyle.LadoDireito>
      </MenuStyle>
    );
  }
  //OBS:variante === classe css analogamente