import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Clock, Users, Star } from "lucide-react"

const courses = [
  {
    id: "python-fundamentals",
    title: "Python Fundamentals",
    description: "Learn the basics of Python programming through fun exercises",
    icon: "🐍",
    level: "Beginner",
    duration: "4 weeks",
    lessons: 20,
    enrolled: 1250,
    rating: 4.9,
    progress: 0,
    color: "from-green-400 to-blue-500",
  },
  {
    id: "web-development",
    title: "Web Development Basics",
    description: "Build your first website with HTML, CSS, and JavaScript",
    icon: "🌐",
    level: "Beginner",
    duration: "6 weeks",
    lessons: 30,
    enrolled: 980,
    rating: 4.8,
    progress: 68,
    color: "from-purple-400 to-pink-500",
  },
  {
    id: "javascript-adventures",
    title: "JavaScript Adventures",
    description: "Interactive JavaScript learning with games and projects",
    icon: "⚡",
    level: "Intermediate",
    duration: "5 weeks",
    lessons: 25,
    enrolled: 750,
    rating: 4.7,
    progress: 0,
    color: "from-yellow-400 to-orange-500",
  },
  {
    id: "css-mastery",
    title: "CSS Design Mastery",
    description: "Create beautiful and responsive designs with CSS",
    icon: "🎨",
    level: "Intermediate",
    duration: "4 weeks",
    lessons: 18,
    enrolled: 650,
    rating: 4.6,
    progress: 0,
    color: "from-pink-400 to-red-500",
  },
]

export function CoursesList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {courses.map((course) => (
        <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
          <div className={`h-24 bg-gradient-to-r ${course.color} flex items-center justify-center relative`}>
            <span className="text-3xl">{course.icon}</span>
            <div className="absolute top-2 right-2 flex items-center space-x-1 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1">
              <Star className="w-3 h-3 text-yellow-300 fill-current" />
              <span className="text-xs text-white font-medium">{course.rating}</span>
            </div>
          </div>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              {course.title}
              <Badge variant={course.level === "Beginner" ? "default" : "secondary"}>{course.level}</Badge>
            </CardTitle>
            <CardDescription>{course.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center space-x-1">
                <BookOpen className="w-4 h-4" />
                <span>{course.lessons} lessons</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4" />
                <span>{course.enrolled}</span>
              </div>
            </div>

            {course.progress > 0 && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{course.progress}%</span>
                </div>
                <Progress value={course.progress} />
              </div>
            )}

            <Link href={`/courses/${course.id}`}>
              <Button className="w-full">{course.progress > 0 ? "Continue Course" : "Start Course"}</Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
