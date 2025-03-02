import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import { FaClock } from "react-icons/fa6";

const CourseCard = ({name,writer,duration}) => {
    return (
        <div className='p-2 m-3 flex flex-row bg-gray-100 text-neutral-800 rounded-md min-h-[100px] max-h-[100px]'>
            <div className='p-3 basis-1/6 flex flex-col items-center justify-center'>
                <Image className='rounded-md h-full w-full' src="/figma.jpg" width={100} height={100} alt='subject'></Image>
            </div>
            <div className='basis-2/6 p-4 flex flex-col grow justify-center'>
                <p className='font-extrabold text-sm'>{name}</p>
                <p className='text-sm'>by {writer}</p>
            </div>
            <div className='basis-2/6 p-4 grow flex flex-row justify-center items-center'>
                <FaClock className='mr-2'></FaClock>
                <p className='text-neutral-700 text-sm'>{duration}</p>
            </div>
            <div className='basis-1/6 flex justify-center items-center'>
                <Button variant="default" className="p-4">View Course</Button>
            </div>
        </div>
    );
}

export default CourseCard;
