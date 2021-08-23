/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import Link from '../Link';
import { TextStyleVariantsMap } from '../../foundation/Text';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import convertPropsToStyle from '../../../theme/utils/convertPropsToStyle';

const ButtonGhost = css`
    background-color: transparent;
    color: #FB7B6B;
`;

const ButtonDefault = css`
    background-color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
    color: ${(props) => get(props.theme, `colors.${props.variant}.contrastText`)};
`;

const ButtonWrapper = styled.button`
    border: 0;
    cursor: pointer;
    padding: 12px 26px;
    font-weight: bold;
    opacity: 1;
    border-radius: 8px;
    
    ${(props) => (props.ghost ? ButtonGhost : ButtonDefault)}
    transition: opacity ${({ theme }) => theme.transition};
    border-radius: ${(props) => props.theme.borderRadius};
    &:hover,
    &:focus {
        opacity: .5;
    }

    ${breakpointsMedia({
    xs: css`
            ${TextStyleVariantsMap.smallestException}
        `,
    md: css`
            ${TextStyleVariantsMap.paragraph1}
        `,
  })}

  &:disabled {
      cursor: not-allowed;
      opacity: 0.2;
  }

  ${({ fullWidth }) => fullWidth && css`
        width: 100%;
      `
};

  ${convertPropsToStyle('margin')}
  ${convertPropsToStyle('display')}

`;
// linha 22 equivale a linha 23....linha 22 esta desistruturada.

const Button = ({ href, children, ...props }) => {
  const hasHref = Boolean(href);
  const tag = hasHref ? Link : 'button';
  return (
    <ButtonWrapper
      as={tag}
      href={href}
      {...props}
    >
      {children}
    </ButtonWrapper>
  );
};

Button.defaultProps = {
  href: undefined,
};

Button.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;
