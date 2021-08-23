import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import convertPropsToStyle from '../../../theme/utils/convertPropsToStyle';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import Link from '../../commons/Link';

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
    `,
  title: css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.titleXS.fontSize};
    font-weight: ${theme.typographyVariants.titleXS.fontWeight};
    line-height: ${theme.typographyVariants.titleXS.lineHeight};
  `}
  ${breakpointsMedia({
    md: css`
      ${({ theme }) => css`
        font-size: ${theme.typographyVariants.title.fontSize};
        font-weight: ${theme.typographyVariants.title.fontWeight};
        line-height: ${theme.typographyVariants.title.lineHeight};
      `}
    `,
  })}
`,
};

const TextBase = styled.span`
    ${(props) => TextStyleVariantsMap[props.variant]}
    color: ${(props) => get(props.theme, `colors.${props.color}.color`)};
    ${convertPropsToStyle('textAlign')}
    ${convertPropsToStyle('marginBottom')}
    ${convertPropsToStyle('margin')}
`;// aqui é span pq é a mais generica dentre as tags de texto citadas aqui

export default function Text({
  // eslint-disable-next-line react/prop-types
  tag, variant, children, href, ...props
}) { // deve suportar as tags de texto p, h"s e span
  if (href) {
    return (
      <TextBase
        as={Link}
        href={href}
        variant={variant}
      // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      >
        {children}
      </TextBase>
    );
  }

  return (
    <TextBase
      as={tag}
      variant={variant}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </TextBase>
  );
}
// as da linha 11 converte implicitamente a tag para o elemento quer passado

Text.propTypes = {
  tag: PropTypes.string, // quando tem valor default n precida do isRequired
  variant: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node,
};

Text.defaultProps = { // Aqui vc deixa explicito o comportamento caso text não receba tag
  tag: 'span',
  variant: 'paragraph1',
  children: null,
  href: '',
};
