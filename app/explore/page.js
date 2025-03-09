"use client";

import React, { useState } from "react";
import CourseList from "@/components/course-list";
import SearchBar from "@/components/search-bar";
import { Button } from "@/components/ui/button";
import GenerateTopicModal from "@/components/generate-topic-modal";
import CourseCard from "@/components/course-card";

const courses = [
  { name: "Introduction to Web Development", author: "John Doe", duration: "10 hours" },
  { name: "Mastering JavaScript", author: "Jane Smith", duration: "15 hours" },
  { name: "Python for Beginners", author: "Michael Johnson", duration: "8 hours" },
  { name: "Data Structures & Algorithms", author: "Emily Brown", duration: "20 hours" },
  { name: "Machine Learning Fundamentals", author: "Chris Wilson", duration: "25 hours" },
  { name: "React.js Crash Course", author: "Sarah Lee", duration: "12 hours" },
  { name: "Building APIs with Node.js", author: "David Kim", duration: "18 hours" },
  { name: "Cybersecurity Essentials", author: "Sophia Martinez", duration: "22 hours" },
  { name: "Cloud Computing with AWS", author: "James Anderson", duration: "16 hours" },
  { name: "UI/UX Design Principles", author: "Olivia Thomas", duration: "14 hours" },
];

const ExplorePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredCourses, setFilteredCourses] = useState([]);

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
      <SearchBar onSearchResults={setFilteredCourses} />

      {/* Conditionally Render "Courses Found" Section */}
      {filteredCourses.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-black mb-4">Courses Found</h2>
          <div className="grid grid-cols-2 gap-4">
            {filteredCourses.map((course, index) => (
              <CourseCard
                key={index}
                name={course.name}
                writer={course.author}
                duration={course.duration}
              />
            ))}
          </div>
          <div className="w-full border-t border-gray-300 my-6"></div>
        </div>
      )}

      {/* General Course List */}
      <CourseList />
      
      {/* Modal */}
      <GenerateTopicModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default ExplorePage;
