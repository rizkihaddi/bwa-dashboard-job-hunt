import React, { FC } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { JOB_LISTINGS_COLUMNS, JOB_LISTINGS_DATA } from '@/constants';
import { Badge } from '@/components/ui/badge';
import ButtonActionTable from '@/components/organisms/ButtonActionTable';

interface JobListingsPageProps {

};

const JobListingsPage: FC<JobListingsPageProps> = () => {
    return (
        <div className='space-y-4'>
            <div className='font-semibold text-2xl'>Job Listings</div>
            <Table>
                <TableHeader>
                    <TableRow>
                        {JOB_LISTINGS_COLUMNS.map((item: string, i: number) => (
                            <TableHead key={item + i}>{item}</TableHead>
                        ))}
                        <TableHead>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {JOB_LISTINGS_DATA.map((item: any, i: number) => (
                        <TableRow key={item.roles + i}>
                            <TableCell>{item.roles}</TableCell>
                            <TableCell>
                                <Badge>{item.status}</Badge>
                            </TableCell>
                            <TableCell>{item.datePosted}</TableCell>
                            <TableCell>{item.dueDate}</TableCell>
                            <TableCell>
                                <Badge variant="outline">{item.jobType}</Badge>
                            </TableCell>
                            <TableCell>{item.applicants}</TableCell>
                            <TableCell>{item.applicants} / {item.needs}</TableCell>
                            <TableCell>
                                <ButtonActionTable url='/job-detail/1' />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default JobListingsPage;