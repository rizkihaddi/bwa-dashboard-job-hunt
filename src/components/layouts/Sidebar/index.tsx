import { Button } from '@/components/ui/button'
import React, { FC } from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { FaHotel, FaUsers } from "react-icons/fa";
import { MdOutlineWorkOutline } from "react-icons/md";
import { GrSchedule } from "react-icons/gr";
import { IoSettingsOutline, IoLogInOutline } from "react-icons/io5";


interface SidebarProps {

}

const Sidebar: FC<SidebarProps> = ({ }) => {
    return (
        <div className='pb-12 min-h-screen'>
            <div className='space-y-4 py-4'>
                <div className='px-3 py-2'>
                    <h2 className='mb-2 px-4 text-lg font-semibold'>
                        Dashboard
                    </h2>
                    <div className='space-y-3'>
                        <Button variant='ghost' className='w-full justify-start rounded-none hover:text-primary'>
                            <AiOutlineHome className='mr-2 text-lg' />
                            Home
                        </Button>
                        <Button variant='ghost' className='w-full justify-start rounded-none hover:text-primary'>
                            <BiMessageDetail className='mr-2 text-lg' />
                            Message
                        </Button>
                        <Button variant='ghost' className='w-full justify-start rounded-none hover:text-primary'>
                            <FaHotel className='mr-2 text-lg' />
                            Company Profiles
                        </Button>
                        <Button variant='ghost' className='w-full justify-start rounded-none hover:text-primary'>
                            <FaUsers className='mr-2 text-lg' />
                            All Applicants
                        </Button>
                        <Button variant='ghost' className='w-full justify-start rounded-none hover:text-primary'>
                            <MdOutlineWorkOutline className='mr-2 text-lg' />
                            Job Listings
                        </Button>
                        <Button variant='ghost' className='w-full justify-start rounded-none hover:text-primary'>
                            <GrSchedule className='mr-2 text-lg' />
                            My Schedules
                        </Button>
                    </div>
                </div>
            </div>
            <div className='space-y-4 py-4'>
                <div className='px-3 py-2'>
                    <h2 className='mb-2 px-4 text-lg font-semibold'>
                        Settings
                    </h2>
                    <div className='space-y-3'>
                        <Button variant='ghost' className='w-full justify-start rounded-none hover:text-primary'>
                            <IoSettingsOutline className='mr-2 text-lg' />
                            Settings
                        </Button>
                        <Button variant='ghost' className='w-full text-red-400 hover:text-red-500 justify-start rounded-none'>
                            <IoLogInOutline className='mr-2 text-lg' />
                            Log Out
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar