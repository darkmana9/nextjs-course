import { Box, Button, Code, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { useAuth } from '@/lib/auth';
import Head from 'next/head';
import EmptyState from '@/components/EmptyState';

export default function Home() {
   const auth = useAuth();
   return (
      <div>
         <Head>
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
               <Button
                  variant="link"
                  size="sm"
                  onClick={() => auth.signInWithGitHub()}
               >
                  Sign in
               </Button>
            )}
         </Flex>
      </div>
   );
}
