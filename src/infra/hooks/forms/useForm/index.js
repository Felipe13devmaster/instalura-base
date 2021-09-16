import React from 'react';

export default function useForm({ initialValues, onSubmit, validateSchema }) {
  const [values, setValues] = React.useState(initialValues);
  const [isFormDisabled, setIsFormDisabled] = React.useState(true);
  const [errors, setErrors] = React.useState({});
  const [touched, setTouchedFields] = React.useState({});

  React.useEffect(() => { // Intercepta quando há mudanças de valores(values) no formulário
    validateSchema(values)
      .then(() => {
        // console.log(result);
        setIsFormDisabled(false);
        setErrors({});// Aqui lista de erros volta a ficar vazia
      })
      .catch((err) => {
        const formatedErrors = err.inner.reduce((errorObjettAcc, currentError) => {
          const fieldName = currentError.path;
          const errorMessage = currentError.message;
          // console.log(currentError);
          return {
            ...errorObjettAcc,
            [fieldName]: errorMessage,
          };
        }, {});
        setIsFormDisabled(true);
        setErrors(formatedErrors);
      });

    //   if (values.usuario.length > 0) setIsFormDisabled(false);
    //   else setIsFormDisabled(true);

    //   console.log(values);
  }, [values]);

  return {
    values,
    handleSubmit(event) {
      event.preventDefault();
      onSubmit(values);
    },
    handleChange(event) {
      const nomeDoCampo = event.target.getAttribute('name');
      setValues({
        ...values,
        [nomeDoCampo]: event.target.value,
      });
    },
    // Validação do form
    isFormDisabled,
    errors,
    touched,
    handleBlur(event) {
      const fieldName = event.target.getAttribute('name');
      setTouchedFields({
        ...touched,
        [fieldName]: true, // [usuario ou senha]: true
      });
    },
  };
}
