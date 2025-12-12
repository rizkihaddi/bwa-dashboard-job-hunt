import React, { FC } from 'react'
import { Button } from '@/components/ui/button';
import { IoMdAdd } from "react-icons/io";

interface HeaverProps {

}

const Header: FC<HeaverProps> = ({ }) => {
    return (
        <div className='pb-3 mb-8 border-b border-border flex flex-row items-center justify-between'>
            <div className=''>
                <div>Company</div>
                <div className='font-semibold'>Mekari</div>
            </div>
            <div>
                <Button className='rounded-lg px-3 py-2'> 
                    <IoMdAdd className='text-lg' />
                    Post a Job
                </Button>
            </div>
        </div>
    )
}

export default Header;