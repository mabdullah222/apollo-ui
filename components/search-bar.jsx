import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

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

const SearchBar = ({ onSearchResults }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [searchSubmitted, setSearchSubmitted] = useState(false);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setSearchSubmitted(false); // Reset search state until Enter or button is clicked

    if (value.trim() === "") {
      setSuggestions([]);
    } else {
      const results = courses.filter((course) =>
        course.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(results);
    }
  };

  const handleSearchSubmit = () => {
    if (query.trim() === "") return;
    
    const results = courses.filter((course) =>
      course.name.toLowerCase().includes(query.toLowerCase())
    );

    setSuggestions([]); // Hide dropdown
    setSearchSubmitted(true); // Ensure "Courses Found" appears
    onSearchResults(results);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearchSubmit();
    }
  };

  return (
    <div className="relative w-[70%] mx-auto mt-6">
      {/* Search Input */}
      <div className="w-full flex items-center space-x-2 relative z-10">
        <Input
          type="text"
          placeholder="Search for lectures..."
          className="w-full p-4 text-lg rounded-full shadow-md text-black"
          value={query}
          onChange={handleSearchChange}
          onKeyDown={handleKeyPress}
          onBlur={() => setSuggestions([])} // Hide suggestions when clicking outside
        />
        <Button
          className="p-4 rounded-full bg-black hover:bg-gray-700 text-white cursor-pointer"
          onClick={handleSearchSubmit}
        >
          <Search className="w-5 h-5" />
        </Button>
      </div>

      {/* Suggestions Dropdown (Hovering over course list) */}
      {suggestions.length > 0 && (
        <ul className="absolute top-full left-0 w-full bg-white shadow-lg rounded-md mt-1 z-20 max-h-60 overflow-y-auto border border-gray-300">
          {suggestions.map((course, index) => (
            <li
              key={index}
              className="p-3 cursor-pointer hover:bg-gray-200 text-black"
              onMouseDown={() => {
                setQuery(course.name);
                setSuggestions([]);
                setSearchSubmitted(true);
                onSearchResults([course]); // Show selected course
              }}
            >
              {course.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
