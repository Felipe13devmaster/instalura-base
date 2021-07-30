import { breakpointsMedia } from "./breakpointsMedia";

export function convertPropsToStyle(propName) {
    return (props) => {//Sempre que retornamos uma função, o styled-component executa essa função
        const propValue = props[propName];//prop value pode ser string ou objeto
        if (typeof propValue === 'string') {
            return {
                //textAlign: props.textAlign === linha 20
                [propName]: props[propName]//[]: indica que este cara é a chave do objeto
            }
        }

        if (typeof propValue === 'object') {
            return breakpointsMedia({
                xs: {
                    [propName]: propValue.xs
                },
                sm: {
                    [propName]: propValue.sm
                },
                md: {
                    [propName]: propValue.md
                },
                lg: {
                    [propName]: propValue.lg
                },
                xl: {
                    [propName]: propValue.xl
                },
            });
        }
    }
}