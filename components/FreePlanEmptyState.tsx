import React from 'react';
import { Heading, Box, Text, Button } from '@chakra-ui/react';
import DashboardShell from './DashboardShell';
const FreePlanEmptyState = () => (
   <DashboardShell>
      <Box width="100%" backgroundColor="white" borderRadius={4} p={8}>
         <Heading size="md">Get feedback on your site instantly</Heading>
         <Text>Start today</Text>
         <Button variant="solid" size="md">
            Upgade to Starter
         </Button>
      </Box>
   </DashboardShell>
);
export default FreePlanEmptyState;
