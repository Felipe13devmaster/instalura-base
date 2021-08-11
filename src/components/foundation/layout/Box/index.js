import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';
import convertPropsToStyle from '../../../../theme/utils/convertPropsToStyle';

const Box = styled.div`
  ${convertPropsToStyle('flex')}
  ${convertPropsToStyle('display')}
  ${convertPropsToStyle('flexDirection')}
  ${convertPropsToStyle('justifyContent')}
  ${convertPropsToStyle('flexWrap')}
  ${convertPropsToStyle('backgroundImage')}
  ${convertPropsToStyle('backgroundRepeat')}
  ${convertPropsToStyle('backgroundPosition')}
  ${convertPropsToStyle('backgroundColor')}
  ${convertPropsToStyle('boxShadow')}
  ${convertPropsToStyle('padding')}
  ${convertPropsToStyle('height')}
  ${breakpointsMedia({
    xs: css`
            height: 50%
          `,
    md: css`
            height: 100%
          `,
  })}
`;

export default Box;
