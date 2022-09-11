import React from 'react';
import EmptyState from '@/components/EmptyState';
import { SiteTableSkeleton } from '@/components/SiteTableSkeleton';
import DashboardShell from '@/components/DashboardShell';
import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import { FeedbackTable } from '@/components/FeedbackTable';
import { useAuth } from '@/lib/auth';
import FeedbackTableHeader from '../components/FeedbackTableHeader';

export default function MyFeedback() {
   const { user } = useAuth();
   const { data } = useSWR(
      user ? ['/api/feedback', user.token] : null,
      fetcher
   );

   if (!data) {
      return (
         <DashboardShell>
            <FeedbackTableHeader />
            <SiteTableSkeleton />
         </DashboardShell>
      );
   }

   return (
      <DashboardShell>
         <FeedbackTableHeader />
         {data.feedback ? (
            <FeedbackTable allFeedback={data.feedback} />
         ) : (
            <EmptyState />
         )}
      </DashboardShell>
   );
}
