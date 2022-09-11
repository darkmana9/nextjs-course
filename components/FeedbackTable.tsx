import { Box, Code, IconButton, Switch } from '@chakra-ui/react';
import { Td, Table, Tr, Th } from './Table';
import React from 'react';
import { DeleteIcon } from '@chakra-ui/icons';
import { RemoveButton } from './REmoveButton';

export const FeedbackTable = ({ allFeedback }) => {
   return (
      <Table>
         <thead>
            <Tr>
               <Th>Name</Th>
               <Th>Feedback</Th>
               <Th>Route</Th>
               <Th>Visible</Th>
               <Th>{''}</Th>
            </Tr>
         </thead>
         <tbody>
            {allFeedback.map((feedback) => (
               <Box key={feedback.id} as="tr">
                  <Td>{feedback.author}</Td>
                  <Td>{feedback.text}</Td>
                  <Td>
                     <Code>{'/'}</Code>
                  </Td>
                  <Td>
                     <Switch
                        defaultChecked={feedback.status === 'active'}
                     ></Switch>
                  </Td>
                  <Td>
                     <RemoveButton feedbackId={feedback.id} />
                  </Td>
               </Box>
            ))}
         </tbody>
      </Table>
   );
};
