import { Box, Skeleton } from '@chakra-ui/react';
import { Td, Table, Tr, Th } from './Table';

const SkeletonRow = ({ width }) => {
   return (
      <Box as="tr">
         <Td>
            <Skeleton height="10px" w={width} my={4} />
         </Td>
         <Td>
            <Skeleton height="10px" w={width} my={4} />
         </Td>
         <Td>
            <Skeleton height="10px" w={width} my={4} />
         </Td>
         <Td>
            <Skeleton height="10px" w={width} my={4} />
         </Td>
      </Box>
   );
};

export const SiteTableSkeleton = () => {
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
            <SkeletonRow width="75px" />
            <SkeletonRow width="125px" />
            <SkeletonRow width="50px" />
            <SkeletonRow width="100px" />
            <SkeletonRow width="75px" />
         </tbody>
      </Table>
   );
};


