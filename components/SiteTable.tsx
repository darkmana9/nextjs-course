import { Box } from '@chakra-ui/react';
import { Td, Table, Tr, Th } from './Table';
import Link from 'next/link';
import React from 'react';

export const SiteTable = ({ sites }) => {
   return (
      <Table>
         <thead>
            <Tr>
               <Th>Name</Th>
               <Th>Site Link</Th>
               <Th>Feedback Link</Th>
               <Th>Date Added</Th>
               <Th>{''}</Th>
            </Tr>
         </thead>
         <tbody>
            {sites.map((site) => (
               <Box key={site.data.createdAt} as="tr">
                  <Td>{site.data.name}</Td>
                  <Td>{site.data.url}</Td>
                  <Td>
                     <Link href={''}>View Feedback</Link>
                  </Td>
                  <Td>{site.data.createdAt}</Td>
               </Box>
            ))}
         </tbody>
      </Table>
   );
};
