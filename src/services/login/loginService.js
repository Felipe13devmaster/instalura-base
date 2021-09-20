/* eslint-disable max-len */
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
  async login({ username, password }, setCookieModule = setCookie, HttpClientModule = HttpClient) { // Este parametro module é apenas para facilitar a injeção de dependecis nos testes
    return HttpClientModule('https://instalura-api-git-master-omariosouto.vercel.app/api/login', {
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
        const hasToken = token;

        if (!hasToken) throw new Error('Failed to login');

        setCookieModule(null, 'APP_TOKEN', token, {
          path: '/', // '/' indica que qualquer pagina apartir da raiz tera aceeso a este cookie
          maxAge: DAY_IN_SECONDS * 7,
        });// Esse null passamos quando cahamamos essa função do lado do client
        return {
          token,
        };
      });
  },
  async logout(destroyCookieModule = destroyCookie) { // Este parametro module é apenas para facilitar a injeção de dependecis nos testes
    destroyCookieModule(null, 'APP_TOKEN');
  },
};

export default loginService;
