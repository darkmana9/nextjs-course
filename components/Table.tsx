import { Box, Text } from '@chakra-ui/react';

export const Th = (props) => {
   return (
      <Text
         as="th"
         textTransform="uppercase"
         fontSize="xs"
         fontWeight="medium"
         color="gray.500"
         px={4}
         {...props}
      />
   );
};

export const Td = (props) => {
   return (
      <Box
         as="td"
         borderBottom="1px solid"
         borderBottomColor="gray.200"
         p={4}
         color="gray.900"
         {...props}
      />
   );
};

export const Tr = (props) => {
   return (
      <Box
         as="tr"
         backgroundColor="gray.50"
         borderTopLeftRadius={8}
         borderTopRightRadius={8}
         borderBottom="1px solid"
         borderBottomColor="gray.200"
         height="40px"
         {...props}
      />
   );
};

export const Table = (props) => {
   return (
      <Box
         as="table"
         textAlign="left"
         backgroundColor="white"
         ml="0"
         mr="0"
         borderRadius="8"
         boxShadow="0px 4px 10px rgba(0,0,0,0.05)"
         {...props}
      />
   );
};
