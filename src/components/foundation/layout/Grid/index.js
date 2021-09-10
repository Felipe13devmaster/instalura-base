import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';
import convertPropsToStyle from '../../../../theme/utils/convertPropsToStyle';

const Grid = {
  Container: styled.div`
        width: 100%;
        padding-right: 28px;
        padding-left: 28px;
        margin-right: auto;
        margin-left: auto;
        max-width: initial;
        ${breakpointsMedia({
    xs: css`
            max-width: initial;
            padding-right: 28px;
            padding-left: 28px;
            `,
    sm: css`
            max-width: 576px; 
            `,
    md: css`
            max-width: 768px;
            padding-right: 16px;
            padding-left: 16px; 
            `,
    lg: css`
            max-width: 1160px; 
            `,
    xl: css`
            max-width: 1222px;
            `,
  })}

        ${convertPropsToStyle('marginTop')}
        ${convertPropsToStyle('display')}
        ${convertPropsToStyle('flex')}
        ${convertPropsToStyle('alignItems')}
  `,
  Row: styled.div`
        display: flex;
        flex-wrap: wrap;
        margin-right: -16px;
        margin-left: -16px;
        ${convertPropsToStyle('flex')}
        ${convertPropsToStyle('marginLeft')}
        ${convertPropsToStyle('marginRight')}
        ${convertPropsToStyle('marginTop')}
        ${convertPropsToStyle('marginBottom')}
        ${convertPropsToStyle('flexDirection')}
        ${convertPropsToStyle('justifyContent')}
      `,
  Col: styled.div`
        padding-right: 16px;
        padding-left: 16px;
        flex-basis: 0;
        flex-grow: 1;
        max-width: 100%;
        ${({ value }) => {
    if (typeof value === 'number') {
      return css`
                    flex-grow: 0;
                    flex-shrink: 0;
                    flex-basis: ${(100 * value) / 12}%;
                    max-width: ${(100 * value) / 12}%;
                `;
    }

    return breakpointsMedia({
      xs: value?.xs
        ? css`
            flex-grow: 0;
            flex-shrink: 0;
            flex-basis: ${(100 * value.xs) / 12}%;
            max-width: ${(100 * value.xs) / 12}%;
          `
        : '',
      sm: value?.sm
        ? css`
            flex-grow: 0;
            flex-shrink: 0;
            flex-basis: ${(100 * value.sm) / 12}%;
            max-width: ${(100 * value.sm) / 12}%;
          `
        : '',
      md: value?.md
        ? css`
            flex-grow: 0;
            flex-shrink: 0;
            flex-basis: ${(100 * value.md) / 12}%;
            max-width: ${(100 * value.md) / 12}%;
          `
        : '',
      lg: value?.lg
        ? css`
            flex-grow: 0;
            flex-shrink: 0;
            flex-basis: ${(100 * value.lg) / 12}%;
            max-width: ${(100 * value.lg) / 12}%;
          `
        : '',
      xl: value?.xl
        ? css`
            flex-grow: 0;
            flex-shrink: 0;
            flex-basis: ${(100 * value.xl) / 12}%;
            max-width: ${(100 * value.xl) / 12}%;
          `
        : '',
    });
  }}
    
    ${({ offset }) => {
    if (typeof offset === 'number') {
      return css`
            margin-left: ${(100 * offset) / 12}%;
            `;
    }
    return breakpointsMedia({
      xs: offset?.xs
        ? css`
            margin-left: ${(100 * offset.xs) / 12}%;
          `
        : '',
      sm: offset?.sm
        ? css`
            margin-left: ${(100 * offset.sm) / 12}%;
          `
        : '',
      md: offset?.md
        ? css`
            margin-left: ${(100 * offset.md) / 12}%;
          `
        : '',
      lg: offset?.lg
        ? css`
            margin-left: ${(100 * offset.lg) / 12}%;
          `
        : '',
      xl: offset?.xl
        ? css`
            margin-left: ${(100 * offset.xl) / 12}%;
          `
        : '',
    });
  }}

    ${convertPropsToStyle('diplay')}
    ${convertPropsToStyle('alignItems')}
    ${convertPropsToStyle('justifyContent')}
    ${convertPropsToStyle('flexDirection')}
    ${convertPropsToStyle('paddingRight')}
    ${convertPropsToStyle('order')}
    `,
};

export default Grid;
