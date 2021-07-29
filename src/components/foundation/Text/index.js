import React from 'react';
import styled, { css } from 'styled-components';

export const TextStyleVariantsMap = {
    paragraph1: css`
        font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
        font-weight: ${({ theme }) => theme.typographyVariants.paragraph1.fontWeight};
        line-height: ${({ theme }) => theme.typographyVariants.paragraph1.lineHeight};
    `,
    smallestException: css`
        font-size: ${({ theme }) => theme.typographyVariants.smallestException.fontSize};
        font-weight: ${({ theme }) => theme.typographyVariants.smallestException.fontWeight};
        line-height: ${({ theme }) => theme.typographyVariants.smallestException.lineHeight};
    `
}

const TextBase = styled.span`
    ${(props) => TextStyleVariantsMap[props.variant]}
`;//aqui é span pq é a mais generica dentre as tags de texto citadas aqui

export default function Text({ tag, variant, children }) {//deve suportar as tags de texto p, h"s e span
    return (
        <TextBase
            as={tag}
            variant={variant}
        >
            {children}
        </TextBase>
    );
}
// as da linha 11 converte implicitamente a tag para o elemento quer passado

Text.defaultProps = {//Aqui vc deixa explicito o comportamento caso text não receba tag
    tag: 'span',
    variant: 'paragraph1',
};