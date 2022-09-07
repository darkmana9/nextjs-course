import { createSite } from '@/lib/db';
import {
   Modal,
   ModalOverlay,
   ModalContent,
   ModalHeader,
   ModalFooter,
   ModalBody,
   ModalCloseButton,
   useDisclosure,
   Button,
   FormControl,
   FormLabel,
   Input,
   useToast
} from '@chakra-ui/react';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '@/lib/auth';

export const AddSiteModal = () => {
   const { isOpen, onOpen, onClose } = useDisclosure();
   const toast = useToast();
   const auth = useAuth();

   const {
      register,
      handleSubmit,
      watch,
      formState: { errors }
   } = useForm();

   const addSite = (values) => {
      createSite({
         aouthorId: auth.user.uid,
         createdAt: new Date().toISOString(),
         ...values
      });
      toast({
         title: 'Succsess!',
         description: 'We`ve added your site.',
         status: 'success',
         duration: 3000,
         isClosable: true
      });
      onClose();
   };

   const initialRef = useRef(null);

   return (
      <>
         <Button maxW="200px" variant="solid" size="md" onClick={onOpen}>
            Add your first site
         </Button>

         <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent as="form" onSubmit={handleSubmit(addSite)}>
               <ModalHeader>Add site</ModalHeader>
               <ModalCloseButton />
               <ModalBody pb={6}>
                  <FormControl>
                     <FormLabel>Name</FormLabel>
                     <Input
                        placeholder="My site"
                        {...register('site', { required: true })}
                     />
                  </FormControl>
                  <FormControl mt={4}>
                     <FormLabel>Link</FormLabel>
                     <Input
                        placeholder="https://website.com"
                        {...register('url', { required: true })}
                     />
                  </FormControl>
               </ModalBody>

               <ModalFooter>
                  <Button color="#194D4C" mr={3} onClick={onClose}>
                     Cancel
                  </Button>
                  <Button
                     type="submit"
                     color="#194D4C"
                     backgroundColor="#99FFFE"
                  >
                     Create
                  </Button>
               </ModalFooter>
            </ModalContent>
         </Modal>
      </>
   );
};
