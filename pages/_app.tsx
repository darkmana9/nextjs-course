import React from 'react';
import { AuthProvider } from '../lib/auth';
import { ChakraProvider } from ''
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
   return (
      <ChakraProvider>
   <AuthProvider>
         <Component {...pageProps} />
      </AuthProvider>
      </ChakraProvider>
   
   );
}

export default MyApp;
