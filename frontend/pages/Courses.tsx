
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Course, { CourseProps } from '@/components/Course';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AIAssistant from '@/components/AIAssistant';

// Sample course data
const coursesData: CourseProps[] = [
  {
    id: "web-basics",
    title: "Web Coding Basics",
    description: "Learn the building blocks of web development with fun, interactive lessons. Create your own webpage!",
    level: "Beginner",
    duration: "4 weeks",
    lessons: 12,
    image: "",
    category: "Web Development",
    color: "purple",
    icon: "code"
  },
  {
    id: "game-design",
    title: "Game Design Adventure",
    description: "Design your own games! Learn game mechanics, character design, and basic programming concepts.",
    level: "Beginner",
    duration: "6 weeks",
    lessons: 18,
    image: "",
    category: "Game Development",
    color: "blue",
    icon: "game"
  },
  {
    id: "robot-challenge",
    title: "Robot Programming Challenge",
    description: "Command virtual robots to complete missions and solve puzzles using block-based coding.",
    level: "Beginner",
    duration: "3 weeks",
    lessons: 9,
    image: "",
    category: "Robotics",
    color: "teal",
    icon: "robot"
  },
  {
    id: "app-inventor",
    title: "App Inventor Workshop",
    description: "Create your own mobile apps! Learn how to build simple applications with fun interactive challenges.",
    level: "Intermediate",
    duration: "5 weeks",
    lessons: 15,
    image: "",
    category: "Mobile Development",
    color: "pink",
    icon: "code"
  },
  {
    id: "creative-coding",
    title: "Creative Coding",
    description: "Combine art and code to create beautiful animations and interactive designs. Express yourself through programming!",
    level: "Intermediate",
    duration: "4 weeks",
    lessons: 12,
    image: "",
    category: "Visual Arts",
    color: "orange",
    icon: "game"
  },
  {
    id: "adventure-python",
    title: "Python Adventure",
    description: "Embark on a coding journey with Python! Solve puzzles and complete quests while learning real programming.",
    level: "Advanced",
    duration: "8 weeks",
    lessons: 24,
    image: "",
    category: "Programming",
    color: "green",
    icon: "code"
  }
];

const Courses: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");
  
  // Filter courses based on selected category
  const filteredCourses = filter === "all" 
    ? coursesData 
    : coursesData.filter(course => {
        if (filter === "beginner") return course.level === "Beginner";
        if (filter === "intermediate") return course.level === "Intermediate";
        if (filter === "advanced") return course.level === "Advanced";
        return course.category.toLowerCase().includes(filter.toLowerCase());
      });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-purple-50 to-white py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Learn to Code with Fun</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Explore our interactive courses designed to teach coding concepts through games, challenges, and creative projects.
            </p>
          </div>
        </section>
        
        {/* Courses Section */}
        <section className="py-12 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Browse Courses</h2>
              
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="mb-6 flex flex-wrap">
                  <TabsTrigger value="all" onClick={() => setFilter("all")}>All Courses</TabsTrigger>
                  <TabsTrigger value="beginner" onClick={() => setFilter("beginner")}>Beginner</TabsTrigger>
                  <TabsTrigger value="intermediate" onClick={() => setFilter("intermediate")}>Intermediate</TabsTrigger>
                  <TabsTrigger value="advanced" onClick={() => setFilter("advanced")}>Advanced</TabsTrigger>
                  <TabsTrigger value="web" onClick={() => setFilter("web")}>Web</TabsTrigger>
                  <TabsTrigger value="game" onClick={() => setFilter("game")}>Games</TabsTrigger>
                </TabsList>
                
                <TabsContent value="all" className="mt-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCourses.map((course) => (
                      <Course key={course.id} {...course} />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="beginner" className="mt-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCourses.map((course) => (
                      <Course key={course.id} {...course} />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="intermediate" className="mt-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCourses.map((course) => (
                      <Course key={course.id} {...course} />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="advanced" className="mt-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCourses.map((course) => (
                      <Course key={course.id} {...course} />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="web" className="mt-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCourses.map((course) => (
                      <Course key={course.id} {...course} />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="game" className="mt-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCourses.map((course) => (
                      <Course key={course.id} {...course} />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-game-purple to-game-blue text-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Coding Journey?</h2>
            <p className="text-lg mb-8 opacity-90">
              Join thousands of young learners discovering the joy of coding with GameCoded's interactive courses.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-game-purple px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                Create Free Account
              </button>
              <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors">
                Explore All Courses
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* AI Assistant */}
      <AIAssistant />
    </div>
  );
};

export default Courses;
