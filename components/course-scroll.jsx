import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area"
import CourseCard from './course-card';

const courses=[
    {
      "name": "Introduction to Web Development",
      "author": "John Doe",
      "duration": "10 hours"
    },
    {
      "name": "Mastering JavaScript",
      "author": "Jane Smith",
      "duration": "15 hours"
    },
    {
      "name": "Python for Beginners",
      "author": "Michael Johnson",
      "duration": "8 hours"
    },
    {
      "name": "Data Structures & Algorithms",
      "author": "Emily Brown",
      "duration": "20 hours"
    },
    {
      "name": "Machine Learning Fundamentals",
      "author": "Chris Wilson",
      "duration": "25 hours"
    },
    {
      "name": "React.js Crash Course",
      "author": "Sarah Lee",
      "duration": "12 hours"
    },
    {
      "name": "Building APIs with Node.js",
      "author": "David Kim",
      "duration": "18 hours"
    },
    {
      "name": "Cybersecurity Essentials",
      "author": "Sophia Martinez",
      "duration": "22 hours"
    },
    {
      "name": "Cloud Computing with AWS",
      "author": "James Anderson",
      "duration": "16 hours"
    },
    {
      "name": "UI/UX Design Principles",
      "author": "Olivia Thomas",
      "duration": "14 hours"
    }
  ]
  

const CourseScroll = ({type}) => {
    return (
        <ScrollArea className="w-full h-[500px]">
            {courses.map((e,index)=>{
                return <CourseCard key={index} name={e.name} writer={e.author} duration={e.duration}/>
            })}
        </ScrollArea>
    );
}

export default CourseScroll;
