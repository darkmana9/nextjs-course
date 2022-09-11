import {
   Breadcrumb,
   BreadcrumbItem,
   BreadcrumbLink,
   Flex,
   Heading
} from '@chakra-ui/react';
import { AddSiteModal } from './AddSiteModal';

const SiteTableHeader = () => {
   return (
      <>
         <Breadcrumb color="gray.600">
            <BreadcrumbItem isCurrentPage>
               <BreadcrumbLink>Sites</BreadcrumbLink>
            </BreadcrumbItem>
         </Breadcrumb>
         <Flex justifyContent="space-between">
            <Heading mb="20px">My Sites</Heading>
            <AddSiteModal>+ Add site</AddSiteModal>
         </Flex>
      </>
   );
};

export default SiteTableHeader
