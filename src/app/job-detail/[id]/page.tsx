import React, { FC } from 'react';
import { ArrowLeftIcon } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from 'next/link';
import Applicants from '@/components/organisms/Applicants';
import JobDetail from '@/components/organisms/JobDetail';

interface jobDetailPageProps {

};

const JobDetailPage: FC<jobDetailPageProps> = ({ }) => {
    return (
        <div>
            <div className='inline-flex items-center gap-5 mb-5'>
                <div>
                    <Link href="/job-listings">
                        <ArrowLeftIcon className='w-8 h-8' />
                    </Link>
                </div>
                <div>
                    <div className='text-2xl font-semibold mb-1'>Solution Engineer</div>
                    <div>Engineer . Full-Time . <span className='text-gray-500'>1/10 Hired</span></div>
                </div>
            </div>

            <Tabs defaultValue="applicants">
                <TabsList className='mb-8'>
                    <TabsTrigger value="applicants">Applicants</TabsTrigger>
                    <TabsTrigger value="jobDetails">Job Details</TabsTrigger>
                </TabsList>
                <TabsContent value="applicants">
                    <Applicants />
                </TabsContent>
                <TabsContent value="jobDetails">
                    <JobDetail/>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default JobDetailPage;