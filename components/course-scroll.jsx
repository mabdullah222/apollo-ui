import React, { useState, useEffect } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import CourseCard from './course-card';

const CourseScroll = ({ type }) => {
    const [lectures, setLectures] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLectures = async () => {
            try {
                setLoading(true);
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/lectures`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch lectures: ${response.status}`);
                }
                const data = await response.json();
                setLectures(data);
            } catch (err) {
                console.error('Error fetching lectures:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchLectures();
    }, []);

    if (loading) {
        return <div className="w-full text-center py-8">Loading lectures...</div>;
    }

    if (error) {
        return <div className="w-full text-center py-8 text-red-500">Error: {error}</div>;
    }

    if (lectures.length === 0) {
        return <div className="w-full text-center py-8">No lectures found. Generate a new lecture!</div>;
    }

    return (
        <ScrollArea className="w-full h-[500px]">
            {lectures.map((lecture) => (
                <CourseCard 
                    key={lecture.lecture_id}
                    id={lecture.lecture_id}
                    name={lecture.data?.topic || 'Untitled Lecture'}
                    writer={lecture.data?.subject || 'Unknown Subject'}
                    duration={lecture.data?.grade_level || 'N/A'}
                    status={lecture.status}
                    progress={lecture.progress}
                />
            ))}
        </ScrollArea>
    );
};

export default CourseScroll;