import { Box, Button, Code, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { useAuth } from '@/lib/auth';
import Head from 'next/head';
import EmptyState from '@/components/EmptyState';

export default function Home() {
   const auth = useAuth();
   return (
      <Flex
         as="main"
         direction="column"
         align="center"
         justify="center"
         h="100vh"
         maxW="400px"
         margin="0 auto"
      >
         <Head>
            <script
               dangerouslySetInnerHTML={{
                  __html: `
              if (document.cookie && document.cookie.includes('fast-feedback-auth')) {
                window.location.href = "/dashboard"
              }
            `
               }}
            />
            <title>Next.js project</title>
         </Head>
         <Flex
            as="main"
            direction="column"
            align="center"
            justify="center"
            h="100vh"
         >
            {auth.user ? (
               <Button variant="link" size="sm" onClick={(e) => auth.signout()}>
                  Sign Out
               </Button>
            ) : (
               <>
                  <Button
                     backgroundColor="gray.900"
                     color="white"
                     fontWeight="medium"
                     _hover={{ bg: 'gray.700' }}
                     _active={{
                        bg: 'gray.800',
                        transform: 'scale(0.95)'
                     }}
                     mb={4}
                     onClick={() => auth.signInWithGitHub()}
                  >
                     Sign in with Github
                  </Button>
                  <Button
                     backgroundColor="gray.900"
                     color="white"
                     fontWeight="medium"
                     _hover={{ bg: 'gray.700' }}
                     _active={{
                        bg: 'gray.800',
                        transform: 'scale(0.95)'
                     }}
                     onClick={() => auth.signInWithGoogle()}
                  >
                     Sign in with Google
                  </Button>
               </>
            )}
         </Flex>
      </Flex>
   );
}
