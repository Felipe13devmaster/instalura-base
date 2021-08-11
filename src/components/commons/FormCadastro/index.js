import React from 'react';
import { Lottie } from '@crello/react-lottie';
import successAnimation from '../animations/success.json';
import errorAnimation from '../animations/error.json';
import TextField from '../../foms/TextField';
import Box from '../../foundation/layout/Box';
import Grid from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';
import Button from '../Button';

const FormContent = () => {
  const formStates = {
    DEFAULT: 'DEFAULT',
    LOADING: 'LOADING',
    DONE: 'DONE',
    ERROR: 'ERROR',
  };
  const [isFormSubmited, setFormSubmited] = React.useState(false);
  const [submissionStatus, setsubmissionStatus] = React.useState(formStates.DEFAULT);
  const [userInfo, setUserInfo] = React.useState({
    usuario: '',
    nome: '',
  });

  const handleChange = (event) => {
    const fieldName = event.target.getAttribute('name'); // pega os inputs que tenham o atributo name
    setUserInfo({
      ...userInfo, // espalha tudo o que o bjeto tinha antes e deseja manter aqui.
      [fieldName]: event.target.value,
    });
  };

  const isFormInvalid = userInfo.nome.length < 1 || userInfo.usuario.length < 1;

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setFormSubmited(true);
        const userDTO = {
          username: userInfo.usuario,
          name: userInfo.nome,
        };
        fetch('https://instalura-api.vercel.app/api/users',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userDTO),
          })
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
            throw new Error('Não foi possível cadastrar o usuario agora.');
          })
          .then((responseConvertidaEmObjeto) => {
            setsubmissionStatus(formStates.DONE);
            // eslint-disable-next-line no-console
            console.log(responseConvertidaEmObjeto);
          })
          .catch((error) => {
            setsubmissionStatus(formStates.ERROR);
            // eslint-disable-next-line no-console
            console.log(error);
          });
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
          placeholder="nome"
          name="nome"
          value={userInfo.nome}
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
      {isFormSubmited && submissionStatus === formStates.DONE && (
      <Box
        display="flex"
        justifyContent="center"
      >
        <Lottie
          width="150px"
          height="150px"
          className="lottie-container basic"
          config={{ animationData: successAnimation, loop: false, autoplay: true }}
        />
        {/* https://lottiefiles.com/43920-success-alert-icon */}
      </Box>
      )}
      {isFormSubmited && submissionStatus === formStates.ERROR && (
      <Box
        display="flex"
        justifyContent="center"
        height="205px"
      >
        <Lottie
          width="150px"
          height="150px"
          className="lottie-container basic"
          config={{ animationData: errorAnimation, loop: false, autoplay: true }}
        />
        {/* https://lottiefiles.com/14331-error */}
      </Box>
      )}
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
