import { deleteFeedback } from '@/lib/db';
import { DeleteIcon } from '@chakra-ui/icons';
import {
   AlertDialog,
   AlertDialogBody,
   AlertDialogFooter,
   AlertDialogHeader,
   AlertDialogContent,
   AlertDialogOverlay,
   Button,
   useDisclosure,
   IconButton
} from '@chakra-ui/react';
import React, { useRef } from 'react';
import { useAuth } from '@/lib/auth';
import { mutate } from 'swr';

export const RemoveButton = ({ feedbackId }) => {
   const { isOpen, onOpen, onClose } = useDisclosure();
   const auth = useAuth();
   const cancelRef = useRef<HTMLInputElement | null>(null);
   const onDeleteFeedback = () => {
      deleteFeedback(feedbackId);
      mutate(
         ['/api/feedback', auth.user.token],
         async (data) => {
            return {
               feedback: data.feedback.filter(
                  (feedback) => feedback.id !== feedbackId
               )
            };
         },
         false
      );
      onClose();
   };

   return (
      <>
         <IconButton
            aria-label="Delete feedback"
            icon={<DeleteIcon />}
            variant="ghost"
            onClick={onOpen}
         />
         <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
         >
            <AlertDialogOverlay>
               <AlertDialogContent>
                  <AlertDialogHeader fontSize="lg" fontWeight="bold">
                     Delete Feedback
                  </AlertDialogHeader>

                  <AlertDialogBody>
                     {'Are you sure? You can`t undo this action afterwards.'}
                  </AlertDialogBody>

                  <AlertDialogFooter>
                     <Button onClick={onClose}>
                        Cancel
                     </Button>
                     <Button
                        colorScheme="red"
                        onClick={onDeleteFeedback}
                        ml={3}
                     >
                        Delete
                     </Button>
                  </AlertDialogFooter>
               </AlertDialogContent>
            </AlertDialogOverlay>
         </AlertDialog>
      </>
   );
};
