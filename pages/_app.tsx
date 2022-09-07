import React from 'react';
import { AuthProvider } from '../lib/auth';
import { ChakraProvider } from '@chakra-ui/react';
import '../styles/globals.css';

import customTheme from '../styles/theme';
import { Global, css } from '@emotion/react';

const GlobalStyle = () => {
   return (
      <>
         <Global
            styles={css`
               html {
                  min-width: 360px;
                  scroll-behavor: smooth;
               }

               #__next {
                  display: flex;
                  flex-direction: column;
                  min-height: 100vh;
               }
            `}
         />
      </>
   );
};

function MyApp({ Component, pageProps }) {
   return (
      <ChakraProvider theme={customTheme} resetCSS>
         <AuthProvider>
            <GlobalStyle />
            <Component {...pageProps} />
         </AuthProvider>
      </ChakraProvider>
   );
}

export default MyApp;
