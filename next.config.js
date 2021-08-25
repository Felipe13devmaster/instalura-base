const redirects = require('./config/redirects');

module.exports = {
  trailingSlash: true, // coloca a barra no final da url
  async redirects() {
    return redirects;
  },
};
