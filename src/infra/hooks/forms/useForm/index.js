import React from 'react';

export default function useForm({ initialValues, onSubmit }) {
  const [values, setValues] = React.useState(initialValues);

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
  };
}
