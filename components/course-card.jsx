import React from 'react';
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useRouter } from 'next/navigation';

const CourseCard = ({ id, name, writer, duration, status, progress = 100 }) => {
    const router = useRouter();

    const getStatusBadge = () => {
        switch (status) {
            case 'completed':
                return <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Completed</span>;
            case 'processing':
                return <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Processing</span>;
            case 'failed':
                return <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">Failed</span>;
            default:
                return null;
        }
    };

    const handleClick = () => {
        router.push(`/lecture/${id}`);
    };

    return (
        <Card 
            className="p-4 mb-4 hover:shadow-md transition-shadow cursor-pointer"
            onClick={handleClick}
        >
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-medium">{name}</h3>
                {getStatusBadge()}
            </div>
            <div className="text-sm text-gray-500 mb-1">Subject: {writer}</div>
            <div className="text-sm text-gray-500 mb-3">Grade Level: {duration}</div>
            {status === 'processing' && (
                <div className="w-full">
                    <Progress value={progress} className="h-2" />
                    <div className="text-xs text-gray-500 mt-1 text-right">{progress}% complete</div>
                </div>
            )}
        </Card>
    );
};

export default CourseCard;