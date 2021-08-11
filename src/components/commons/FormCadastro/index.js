import React from 'react';
import TextField from '../../foms/TextField';
import Box from '../../foundation/layout/Box';
import Grid from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';
import Button from '../Button';

const FormContent = () => {
  const [userInfo, setUserInfo] = React.useState({
    usuario: '',
    email: '',
  });

  const handleChange = (event) => {
    const fieldName = event.target.getAttribute('name'); // pega os inputs que tenham o atributo name
    setUserInfo({
      ...userInfo, // espalha tudo o que o bjeto tinha antes e deseja manter aqui.
      [fieldName]: event.target.value,
    });
  };

  const isFormInvalid = userInfo.email.length < 1 || userInfo.usuario.length < 1;

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        // console.log('Formulário enviado');
      }}
    >
      <Text
        variant="title"
        tag="h1"
        color="tertiary.main"
      >
        Pronto para saber da vida dos outros?
      </Text>
      <Text
        variant="paragraph1"
        tag="p"
        color="tertiary.light"
        marginBottom="32px"
      >
        Você está a um passo de saber tudoo que está
        rolando no bairro, complete seu cadastro agora!
      </Text>

      <div>
        <TextField
          placeholder="Email"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          placeholder="Usuário"
          name="usuario"
          value={userInfo.usuario}
          onChange={handleChange}
        />
      </div>
      <Button
        type="submit"
        variant="primary.main"
        fullWidth
        disabled={isFormInvalid}
      >
        Cadastrar
      </Button>
    </form>
  );
};

// eslint-disable-next-line react/prop-types
const FormCadastro = ({ propsDoModal }) => (
  <Grid.Row
    marginLeft={0}
    marginRight={0}
    flex={1}
    justifyContent="flex-end"
  >
    <Grid.Col
      display="flex"
      paddingRight={{ md: '0' }}
      flex={1}
      value={{ xs: 12, md: 5, lg: 4 }}
    >
      <Box
        boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        flex={1}
        padding={{
          xs: '16px',
          md: '85px',
        }}
        backgroundColor="white"
          // eslint-disable-next-line react/jsx-props-no-spreading
        {...propsDoModal}
      >
        <FormContent />
      </Box>
    </Grid.Col>
  </Grid.Row>
);

export default FormCadastro;
