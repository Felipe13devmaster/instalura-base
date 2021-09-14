import breakpointsMedia from '../breakpointsMedia';

function convertPropsToStyle(propName) {
  // eslint-disable-next-line consistent-return
  return (props) => { // Sempre que retornamos uma função, o styled-component executa essa função
    const propValue = props[propName];// prop value pode ser string ou objeto
    if (typeof propValue === 'string' || typeof propValue === 'number') {
      return {
        // textAlign: props.textAlign === linha 20
        [propName]: props[propName], // []: indica que este cara é a chave do objeto
      };
    }

    if (typeof propValue === 'object') {
      const breakpoints = {};

      if (propValue.xs) breakpoints.xs = { [propName]: propValue.xs };
      if (propValue.sm) breakpoints.sm = { [propName]: propValue.sm };
      if (propValue.md) breakpoints.md = { [propName]: propValue.md };
      if (propValue.lg) breakpoints.lg = { [propName]: propValue.lg };
      if (propValue.xl) breakpoints.xl = { [propName]: propValue.xl };

      return breakpointsMedia(breakpoints);
    }
    return {};
  };
}

export default convertPropsToStyle;
