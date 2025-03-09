import CourseCard from "./course-card"

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


const CourseList = () => {
  return (
    <div className="flex flex-col mx-auto">
        <h2 className="text-xl font-semibold text-black mt-4">All Courses</h2>
        <div className="w-[95%] mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 gap-1">
            {courses.map((course, index) => (
                <CourseCard 
                    key={index} 
                    name={course.name} 
                    writer={course.writer} 
                    duration={course.duration} 
            />
            ))}
        </div>
    </div>
  )
}

export default CourseList