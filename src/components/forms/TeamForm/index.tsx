"use client"

import FieldInput from '@/components/organisms/FieldInput';
import React, { FC } from 'react';
import { FaFacebook, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import DialogAddTeam from './DialogAddTeam';

interface TeamFormProps {

};

const TeamForm: FC<TeamFormProps> = ({ }) => {
    return (
        <FieldInput title='Basic Information' subtitle='Add team members of your company'>
            <div className='w-[65%]'>
                <div className='flex flex-row justify-between items-center'>
                    <div className='text-lg font-semibold'>
                        3 Members
                    </div>
                    <DialogAddTeam/>

                </div>
                <div className='grid grid-cols-3 gap-5 my-6'>
                    {[0, 1, 2].map((item: number) => (
                        <div key={item} className='p-3 bg-gray-100 rounded-sm'>
                            <div className='w-13 h-13 rounded-full bg-gray-400 mx-auto' />
                            <div className='mt-3 text-center'>Rizki Haddi Prayoga</div>
                            <div className='text-center text-sm text-gray-500'>Solution Engineer</div>

                            <div className='mt-5 flex gap-3 mx-auto justify-between text-gray-500'>
                                <GrInstagram className='w-5 h-5 cursor-pointer hover:text-primary' />
                                <FaFacebook className='w-5 h-5 cursor-pointer hover:text-primary' />
                                <FaTwitter className='w-5 h-5 cursor-pointer hover:text-primary' />
                                <FaLinkedinIn className='w-5 h-5 cursor-pointer hover:text-primary' />
                                <FaYoutube className='w-5 h-5 cursor-pointer hover:text-primary' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </FieldInput>
    );
};

export default TeamForm;