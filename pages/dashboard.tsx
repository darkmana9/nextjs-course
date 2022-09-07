import { Box, Button, Code, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { useAuth } from '@/lib/auth';
import Head from 'next/head';
import EmptyState from '@/components/EmptyState';

export default function Home() {
   const auth = useAuth();
   if (!auth.user) {
      return 'Loading...';
   }
   return <EmptyState />;
}
