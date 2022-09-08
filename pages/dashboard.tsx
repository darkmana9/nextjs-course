import React from 'react';
import EmptyState from '@/components/EmptyState';
import { SiteTableSkeleton } from '@/components/SiteTableSkeleton';
import DashboardShell from '@/components/DashboardShell';
import useSWR from 'swr';
import  fetcher  from '@/utils/fetcher';
import { SiteTable } from '@/components/SiteTable';

export default function Home() {
   const { data } = useSWR('/api/sites', fetcher);
   
   if (!data) {
      return (
         <DashboardShell>
            <SiteTableSkeleton />
         </DashboardShell>
      );
   }
   return (
      <DashboardShell>
         {data.sites ? <SiteTable sites={data.sites} />  : <EmptyState />}
      </DashboardShell>
   );
   
}
