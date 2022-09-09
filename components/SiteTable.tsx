import { Box, Link } from '@chakra-ui/react';
import { Td, Table, Tr, Th } from './Table';
import React from 'react';
import { format, parseISO } from 'date-fns';
import NextLink from 'next/link'

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
               <Box key={site.createdAt} as="tr">
                  <Td>{site.name}</Td>
                  <Td>{site.url}</Td>
                  <Td>
                     <NextLink href='/p/[siteid]' as={`/p/${site.id}`}>
                        <Link>
                           View Feedback
                        </Link>
                     </NextLink>
                  </Td>

                  <Td>{format(parseISO(site.createdAt), 'PPpp')}</Td>
               </Box>
            ))}
         </tbody>
      </Table>
   );
};
