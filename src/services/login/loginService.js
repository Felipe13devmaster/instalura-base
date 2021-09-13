import { destroyCookie, setCookie } from 'nookies';

async function HttpClient(url, { headers, body, ...options }) {
  return fetch(url, {
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    ...options,
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('Falha em pegar os dados dos servidor.');
    });
}

const loginService = {
  async login({ username, password }) {
    return HttpClient('https://instalura-api-git-master-omariosouto.vercel.app/api/login', {
      method: 'POST',
      body: {
        username,
        password,
      },
    })
      .then((respostaConvertida) => {
        // console.log(respostaConvertida);
        const DAY_IN_SECONDS = 86400;
        const { token } = respostaConvertida.data;
        setCookie(null, 'APP_TOKEN', token, {
          path: '/', // '/' indica que qualquer pagina apartir da raiz tera aceeso a este cookie
          maxAge: DAY_IN_SECONDS * 7,
        });// Esse null passamos quando cahamamos essa função do lado do client
        return {
          token,
        };
      });
  },
  logout() {
    destroyCookie(null, 'APP_TOKEN');
  },
};

export default loginService;
