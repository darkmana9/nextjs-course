import React from 'react';
import { Heading, Box, Text, Button, Flex } from '@chakra-ui/react';
import DashboardShell from './DashboardShell';
import { AddSiteModal } from './AddSiteModal';
const EmptyState = () => (
   <DashboardShell>
      <Flex
         width="100%"
         backgroundColor="white"
         borderRadius={4}
         p={8}
         align="center"
         justify="center"
         direction="column"
      >
         <Heading mb="2" size="md">
            You haven`t added any sites
         </Heading>
         <Text mb="2">Welcome</Text>
         <AddSiteModal />
      </Flex>
   </DashboardShell>
);
export default EmptyState;
