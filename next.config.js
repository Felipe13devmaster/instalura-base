const redirects = require('./config/redirects');

module.exports = {
  trailingSlash: true, // coloca a barra no final da url
  async redirects() {
    return redirects;
  },
  async headers() {
    return [
      {
        source: '/app/:path*/',
        headers: [
          {
            key: 'X-Frame-Options', // Impede que alguem vhame nossa app dentro de um iframe
            value: 'DENY',
          },
        ],
      },
    ];
  },
};
