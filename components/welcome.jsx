'use client'
import React,{useState} from 'react';
import HelloCard from './hello-card';
import CourseScroll from './course-scroll';
import { Button } from './ui/button';
import { useUser } from '@clerk/nextjs';

const Welcome = () => {
    const [type,setType]=useState('ongoing')
    const {user}=useUser()

    return (
        <div className='flex flex-col basis-1/2 p-10'>
            <HelloCard name={user?.firstName || ""}></HelloCard>
            <div className='mt-5 flex flex-col w-full'>
                <p className='text-2xl text-black font-extrabold'>Lectures</p>
                <div className='flex flex-row gap-3 justify-start items-center mt-5'>
                    <Button className="cursor-pointer" onClick={(e)=>{setType("ongoing")}} variant={type=="ongoing"? 'default':'link'}>Ongoing</Button>
                    <Button className="cursor-pointer" onClick={(e)=>{setType("completed")}} variant={type=="completed"? 'default':'link'}>Completed</Button>
                </div>
                <CourseScroll type={type}></CourseScroll>
            </div>
        </div>
    );
}

export default Welcome;
