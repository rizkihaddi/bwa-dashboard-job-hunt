"use client"

import React, { FC } from 'react';
import { Button } from '@/components/ui/button';
import { MoreVertical } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface ButtonActionTableProps {
    url: string
};

const ButtonActionTable: FC<ButtonActionTableProps> = ({ url }) => {
    const router = useRouter();

    return (
        <div>
            <Button onClick={() => router.push(url)} size="icon" variant="outline">
                <MoreVertical className='w-3 h-3' />
            </Button>
        </div>
    );
};

export default ButtonActionTable;