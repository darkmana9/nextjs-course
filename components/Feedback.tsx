import { Box, Divider, Heading, Text } from '@chakra-ui/react';
import { parseISO, format } from 'date-fns';

const Feedback = ({ author, text, createAt }) => (
   <Box borderRadius={4} maxWidth="700px" w="full">
      <Heading size="sm" as="h3" mb={0} color="gray">
         {author}
      </Heading>
      <Text color="gray.500" mb={4} fontSize="xs">
         {format(parseISO(createAt), 'PPpp')}
      </Text>
      <Text color="gray.800">{text}</Text>
      <Divider borderColor="gray.200" />
   </Box>
);

export default Feedback;
