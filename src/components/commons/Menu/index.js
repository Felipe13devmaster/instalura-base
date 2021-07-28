import React from 'react';
import { MenuStyle } from './styles/MenuStyle';
import { Logo } from '../../../theme/Logotipo/Logo';

export default function Menu(props) {
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
            {links.map((link) => {
                return (
                    <li>
                       <a href={link.url}>
                            {link.texto}
                        </a> 
                    </li>
                )
            })}
        </MenuStyle.LadoCentral>
        <MenuStyle.LadoDireito>
            <button>
                Entrar
            </button>
            <button>
                Cadastrar
            </button>
            </MenuStyle.LadoDireito>
      </MenuStyle>
    )
  }