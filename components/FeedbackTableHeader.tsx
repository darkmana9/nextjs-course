import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Flex,
    Heading
 } from '@chakra-ui/react';
 import { AddSiteModal } from './AddSiteModal';
 
 const FeedbackTableHeader = () => {
    return (
       <>
          <Breadcrumb color="gray.600">
             <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink>Feedback</BreadcrumbLink>
             </BreadcrumbItem>
          </Breadcrumb>
          <Flex justifyContent="space-between">
             <Heading mb="20px">My Feedback</Heading>
          </Flex>
       </>
    );
 };
 
 export default FeedbackTableHeader
 