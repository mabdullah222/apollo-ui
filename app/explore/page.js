"use client";

import React, { useState, useEffect } from "react";
import CourseList from "@/components/course-list";
import SearchBar from "@/components/search-bar";
import { Button } from "@/components/ui/button";
import GenerateTopicModal from "@/components/generate-topic-modal";
import CourseCard from "@/components/course-card";
import { toast } from "sonner";

const ExplorePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredLectures, setFilteredLectures] = useState([]);
  const [allLectures, setAllLectures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all lectures on component mount
  useEffect(() => {
    const fetchLectures = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/lectures`);
        if (!response.ok) {
          throw new Error(`Failed to fetch lectures: ${response.status}`);
        }
        const data = await response.json();
        setAllLectures(data);
      } catch (err) {
        console.error('Error fetching lectures:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLectures();
  }, []);

  const handleSearchResults = (results) => {
    setFilteredLectures(results);
  };

  const refreshLectures = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/lectures');
      if (!response.ok) {
        throw new Error(`Failed to refresh lectures: ${response.status}`);
      }
      const data = await response.json();
      setAllLectures(data);
    } catch (err) {
      console.error('Error refreshing lectures:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // 🟡 Toast function to pass into modal
  const handleLectureQueued = () => {
    toast.success("Lecture has been queued. It will appear shortly.");
  };

  return (
    <div className="w-full min-h-screen flex flex-col p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-black text-2xl font-bold">Explore New Topics</h1>
        <Button
          className="px-4 py-2 rounded-md cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          Generate a New Topic
        </Button>
      </div>

      {/* Search Bar */}
      <SearchBar onSearchResults={handleSearchResults} lectures={allLectures} />

      {loading && <div className="text-center py-4">Loading lectures...</div>}
      {error && <div className="text-center py-4 text-red-500">Error: {error}</div>}

      {filteredLectures.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-black mb-4">Courses Found</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredLectures.map((lecture) => (
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
          </div>
          <div className="w-full border-t border-gray-300 my-6"></div>
        </div>
      )}

      <CourseList lectures={allLectures} loading={loading} error={error} />

      {/* Modal */}
      <GenerateTopicModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSuccess={refreshLectures}
        onQueued={handleLectureQueued} // ⬅️ Pass toast trigger
      />
    </div>
  );
};

export default ExplorePage;
