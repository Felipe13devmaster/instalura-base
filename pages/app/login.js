import React from 'react';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';

const LoginPage = () => (
  <div>
    Página de Login
  </div>
);

export default websitePageHOC(LoginPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Login',
    },
    menuProps: {
      display: false,
    },
  },
});
