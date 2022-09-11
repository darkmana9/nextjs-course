import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllFeedback, getUserSites, getAllSites } from '@/lib/db-admin';
import Feedback from '@/components/Feedback';
import { useAuth } from '@/lib/auth';
import { Box, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { createFeedback } from '@/lib/db';

export const getStaticProps: GetStaticProps = async (context) => {
   const siteId = context?.params?.siteId;
   const { feedback } = await getAllFeedback(siteId);
   return {
      props: {
         initialFeedback: feedback
      },
      revalidate: 1
   };
};

export const getStaticPaths: GetStaticPaths = async () => {
   const { sites } = await getAllSites();

   const paths = sites.map((site) => ({
      params: {
         siteId: site.id.toString()
      }
   }));
   return {
      paths,
      fallback: false
   };
};

const SiteFeedback = ({ initialFeedback }) => {
   const auth = useAuth();
   const router = useRouter();
   const inputEl = useRef(null);
   const [allFeedback, setAllFeedback] = useState(initialFeedback);

   const onSubmit = (e) => {
      e.preventDefault();

      const newFeedback = {
         author: auth.user.name,
         authorId: auth.user.uid,
         siteId: router.query.siteId,
         text: inputEl.current.value,
         createAt: new Date().toISOString(),
         proveder: auth.user.provider,
         status: 'pending'
      };
      setAllFeedback([newFeedback, ...allFeedback]);
      createFeedback(newFeedback);
   };

   return (
      <Box
         display="flex"
         flexDirection="column"
         width="full"
         maxWidth="700px"
         margin="0 auto"
      >
         <Box as="form" onSubmit={onSubmit}>
            <FormControl my={8}>
               <FormLabel htmlFor="comment">Comment</FormLabel>
               <Input ref={inputEl} type="comment" id="comment" />
               <Button mt={2} fontWeight="medium" type="submit">
                  Add comment
               </Button>
            </FormControl>
         </Box>
         {allFeedback.map((feedback) => (
            <Feedback key={feedback.id} {...feedback} />
         ))}
      </Box>
   );
};

export default SiteFeedback;
