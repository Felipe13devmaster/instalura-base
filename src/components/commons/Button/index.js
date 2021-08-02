import styled, { css } from 'styled-components';
import get from 'lodash/get';
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

const Button = styled.button`
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

    ${convertPropsToStyle('margin')}
    ${convertPropsToStyle('display')}

`;
// linha 22 equivale a linha 23....linha 22 esta desistruturada.

export default Button;
