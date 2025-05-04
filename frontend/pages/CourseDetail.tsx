
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AIAssistant from '@/components/AIAssistant';
import CodePlayground from '@/components/CodePlayground';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, PlayCircle, BookOpen, Award, Lock } from 'lucide-react';

interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  completed: boolean;
  locked: boolean;
}

interface CourseDetailData {
  id: string;
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  duration: string;
  totalLessons: number;
  completedLessons: number;
  overview: string;
  whatYouWillLearn: string[];
  lessons: Lesson[];
}

// Demo course data
const courseData: Record<string, CourseDetailData> = {
  "web-basics": {
    id: "web-basics",
    title: "Web Coding Basics",
    description: "Learn the building blocks of web development with fun, interactive lessons.",
    level: "Beginner",
    category: "Web Development",
    duration: "4 weeks",
    totalLessons: 12,
    completedLessons: 3,
    overview: "This course introduces children to the exciting world of web development! Through interactive lessons and fun challenges, kids will learn the basics of HTML and CSS to create their own web pages. The course uses visual blocks that automatically generate code, helping children understand programming concepts without getting overwhelmed by syntax.",
    whatYouWillLearn: [
      "Understand how websites work",
      "Create your first HTML webpage",
      "Style your page with colors and layouts using CSS",
      "Add interactive elements to your page",
      "Build a personal project to showcase your skills"
    ],
    lessons: [
      {
        id: "l1",
        title: "Introduction to Web Pages",
        description: "Learn what makes up a webpage and how the internet works.",
        duration: "15 mins",
        completed: true,
        locked: false
      },
      {
        id: "l2",
        title: "HTML Basics: Your First Page",
        description: "Create your very first webpage with HTML!",
        duration: "20 mins",
        completed: true,
        locked: false
      },
      {
        id: "l3",
        title: "Adding Images and Links",
        description: "Make your page come alive with pictures and clickable links.",
        duration: "25 mins",
        completed: true,
        locked: false
      },
      {
        id: "l4",
        title: "Introduction to CSS",
        description: "Learn how to add colors and styles to your webpage.",
        duration: "30 mins",
        completed: false,
        locked: false
      },
      {
        id: "l5",
        title: "Creating Layouts",
        description: "Organize your content with different layouts.",
        duration: "25 mins",
        completed: false,
        locked: true
      },
      {
        id: "l6",
        title: "Building a Personal Profile Page",
        description: "Put everything together to create your own profile page!",
        duration: "40 mins",
        completed: false,
        locked: true
      }
    ]
  },
  "game-design": {
    id: "game-design",
    title: "Game Design Adventure",
    description: "Design your own games! Learn game mechanics, character design, and basic programming concepts.",
    level: "Beginner",
    category: "Game Development",
    duration: "6 weeks",
    totalLessons: 18,
    completedLessons: 0,
    overview: "Embark on an exciting journey into game development! This course teaches children the fundamentals of game design through hands-on projects. Kids will learn to create simple games while developing problem-solving skills and basic programming concepts.",
    whatYouWillLearn: [
      "Understand game mechanics and rules",
      "Design game characters and environments",
      "Create simple animations",
      "Build interactive games with visual code blocks",
      "Test and improve your games based on feedback"
    ],
    lessons: [
      {
        id: "l1",
        title: "What Makes Games Fun?",
        description: "Explore different types of games and what makes them enjoyable.",
        duration: "20 mins",
        completed: false,
        locked: false
      },
      {
        id: "l2",
        title: "Creating Your First Game Character",
        description: "Design and animate your own game character!",
        duration: "30 mins",
        completed: false,
        locked: false
      },
      {
        id: "l3",
        title: "Game Backgrounds and Worlds",
        description: "Create exciting environments for your games.",
        duration: "25 mins",
        completed: false,
        locked: false
      },
      {
        id: "l4",
        title: "Adding Movement Controls",
        description: "Make your character move using code blocks.",
        duration: "35 mins",
        completed: false,
        locked: true
      }
    ]
  }
};

const CourseDetail: React.FC = () => {
  const { courseId = "web-basics" } = useParams<{ courseId: string }>();
  const [activeTab, setActiveTab] = useState("overview");
  const course = courseData[courseId] || courseData["web-basics"];
  
  const progressPercentage = (course.completedLessons / course.totalLessons) * 100;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Course Header */}
        <section className={`bg-game-purple/10 py-12 px-4 md:px-8`}>
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Badge>{course.category}</Badge>
                  <Badge variant="outline" className={
                    course.level === "Beginner" ? "bg-green-100 text-green-800" :
                    course.level === "Intermediate" ? "bg-blue-100 text-blue-800" : 
                    "bg-purple-100 text-purple-800"
                  }>
                    {course.level}
                  </Badge>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
                
                <p className="text-gray-600 text-lg mb-6">{course.description}</p>
                
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    <span>{course.totalLessons} Lessons</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <PlayCircle className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-64">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-4">Your Progress</h3>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>{course.completedLessons} / {course.totalLessons} completed</span>
                      <span>{Math.round(progressPercentage)}%</span>
                    </div>
                    <Progress value={progressPercentage} className="h-2" />
                  </div>
                  <Button className="w-full bg-game-purple hover:bg-game-dark-purple">
                    {course.completedLessons > 0 ? "Continue Learning" : "Start Course"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Course Content */}
        <section className="py-12 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-8">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="lessons">Lessons</TabsTrigger>
                <TabsTrigger value="playground">Try It Out</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h2 className="text-2xl font-bold mb-4">About This Course</h2>
                    <p className="text-gray-600 mb-8">{course.overview}</p>
                    
                    <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
                    <ul className="space-y-2 mb-8">
                      {course.whatYouWillLearn.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-4">Course Includes:</h3>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                          <BookOpen className="h-5 w-5 text-game-purple" />
                          <span>{course.totalLessons} interactive lessons</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <PlayCircle className="h-5 w-5 text-game-purple" />
                          <span>Video tutorials</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <Award className="h-5 w-5 text-game-purple" />
                          <span>Completion certificate</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="lessons" className="mt-0">
                <h2 className="text-2xl font-bold mb-6">Course Lessons</h2>
                <div className="space-y-4">
                  {course.lessons.map((lesson, index) => (
                    <div 
                      key={lesson.id} 
                      className={`border rounded-lg p-4 transition-all ${
                        lesson.locked 
                          ? 'bg-gray-50 opacity-70' 
                          : 'bg-white hover:shadow-md'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            lesson.completed 
                              ? 'bg-green-100 text-green-600' 
                              : lesson.locked 
                                ? 'bg-gray-100 text-gray-400' 
                                : 'bg-game-purple/10 text-game-purple'
                          }`}>
                            {lesson.completed ? (
                              <CheckCircle className="h-4 w-4" />
                            ) : lesson.locked ? (
                              <Lock className="h-4 w-4" />
                            ) : (
                              <span>{index + 1}</span>
                            )}
                          </div>
                          <div>
                            <h3 className={`font-medium ${lesson.locked ? 'text-gray-500' : ''}`}>
                              {lesson.title}
                            </h3>
                            <p className="text-sm text-gray-500">{lesson.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-gray-500">{lesson.duration}</span>
                          {!lesson.locked && (
                            <Button 
                              variant={lesson.completed ? "outline" : "default"}
                              className={lesson.completed 
                                ? "border-game-purple text-game-purple hover:bg-game-purple/10" 
                                : "bg-game-purple hover:bg-game-dark-purple"
                              }
                              size="sm"
                            >
                              {lesson.completed ? "Review" : "Start"}
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="playground" className="mt-0">
                <h2 className="text-2xl font-bold mb-6">Interactive Playground</h2>
                <p className="text-gray-600 mb-8">
                  Try out what you've learned in this interactive coding playground. 
                  Drag and drop blocks to create code and see the results instantly!
                </p>
                
                <CodePlayground />
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* AI Assistant */}
      <AIAssistant />
    </div>
  );
};

export default CourseDetail;
