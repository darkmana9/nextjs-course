import React, { Children } from 'react';
import {
   Flex,
   Link,
   Stack,
   Avatar,
   Breadcrumb,
   BreadcrumbItem,
   BreadcrumbLink,
   Heading,
   Box,
   Text,
   Button
} from '@chakra-ui/react';
import { RepeatIcon } from '@chakra-ui/icons';
import { useAuth } from '@/lib/auth';
import { transform } from 'framer-motion';
import { AddSiteModal } from './AddSiteModal';

const DashboardShell = ({ children }) => {
   const auth = useAuth();

   return (
      <Flex flexDirection="column">
         <Flex
            flexDirection="row"
            backgroundColor="white"
            justifyContent="space-between"
            alignItems="center"
            padding="20px"
            py={4}
            px={8}
         >
            <Stack align="center" spacing={2} isInline>
               <RepeatIcon mr="8px" />
               <Link>Feedback</Link>
               <Link>Sites</Link>
            </Stack>
            <Flex align="center">
               {auth.user && (
                  <Button variant="ghost" onClick={() => auth.signout()} mr={2}>
                     Sign out
                  </Button>
               )}
               <Avatar size="sm" src={auth?.user?.photoUrl} />
            </Flex>
         </Flex>
         <Flex backgroundColor="gray.100" p={8} height="100%">
            <Flex width="100%" maxWidth="800px" ml="auto" mr="auto">
               <Flex width="100%" flexDirection="column">
                  <Breadcrumb color="gray.600">
                     <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink>Sites</BreadcrumbLink>
                     </BreadcrumbItem>
                  </Breadcrumb>
                  <Flex justifyContent="space-between">
                     <Heading mb="20px">My Sites</Heading>
                     <AddSiteModal>
                        + Add site
                     </AddSiteModal>
                  </Flex>
                  {children}
               </Flex>
            </Flex>
         </Flex>
      </Flex>
   );
};

export default DashboardShell;
