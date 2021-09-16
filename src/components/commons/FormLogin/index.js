import React from 'react';
import { useRouter } from 'next/router';
import * as yup from 'yup';// Essa lib vai fazer as validações do formulário
import TextField from '../../foms/TextField';
import Button from '../Button';
import useForm from '../../../infra/hooks/forms/useForm';
import loginService from '../../../services/login/loginService';

const loginSchema = yup.object().shape({
  usuario: yup
    .string()
    .required('Usuário é obrigatório')
    .min(3, 'Preencha ao menos 3 caracteres'),
  senha: yup
    .string()
    .required('Senha é obrigatório')
    .min(8, 'Sua senha precisa ter ao menos 8 caracteres'),
});

const LoginForm = () => {
  const router = useRouter();
  const initialValues = {
    usuario: '',
    senha: '',
  };
  const form = useForm({
    initialValues,
    onSubmit: (values) => {
      loginService.login({
        username: values.usuario,
        password: values.senha,
      })
        .then(() => {
          router.push('/app/profile');
        });
    },
    validateSchema: (values) => loginSchema.validate(values, {
      abortEarly: false, // Isso é pra mostrar todos os erros
    }),
  });

  return (
    <form id="formCadastro" onSubmit={form.handleSubmit}>
      <TextField
        placeholder="Usuário"
        name="usuario"
        value={form.values.usuario}
        error={form.errors.usuario}
        isTouched={form.touched.usuario}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />
      <TextField
        placeholder="Senha"
        name="senha"
        type="password"
        value={form.values.senha}
        error={form.errors.senha}
        isTouched={form.touched.senha}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />

      <Button
        type="submit"
        variant="primary.main"
        margin={{
          xs: '0 auto',
          md: 'initial',
        }}
        fullWidth
        disabled={form.isFormDisabled}
      >
        Entrar
      </Button>
    </form>
  );
};

export default LoginForm;
