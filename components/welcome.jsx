'use client'
import React,{useState} from 'react';
import HelloCard from './hello-card';
import CourseScroll from './course-scroll';
import { Button } from './ui/button';

const Welcome = () => {
    const [type,setType]=useState('ongoing')

    return (
        <div className='flex flex-col basis-1/2 p-10'>
            <HelloCard></HelloCard>
            <div className='mt-5 flex flex-col w-full'>
                <p className='text-2xl text-black font-extrabold'>Lectures</p>
                <div className='flex flex-row gap-3 justify-start items-center mt-5'>
                    <Button  onClick={(e)=>{setType("ongoing")}} variant={type=="ongoing"? 'default':'link'}>Ongoing</Button>
                    <Button  onClick={(e)=>{setType("completed")}} variant={type=="completed"? 'default':'link'}>Completed</Button>
                </div>
                <CourseScroll type={type}></CourseScroll>
            </div>
        </div>
    );
}

export default Welcome;
