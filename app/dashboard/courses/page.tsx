"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookOpen, Clock, Users, Star, Search, Filter } from "lucide-react"

const allCourses = [
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
    category: "Programming",
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
    category: "Web Development",
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
    category: "Programming",
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
    category: "Design",
  },
  {
    id: "data-science-kids",
    title: "Data Science for Kids",
    description: "Explore data and create visualizations with Python",
    icon: "📊",
    level: "Advanced",
    duration: "8 weeks",
    lessons: 35,
    enrolled: 420,
    rating: 4.5,
    progress: 0,
    color: "from-teal-400 to-blue-500",
    category: "Data Science",
  },
  {
    id: "game-development",
    title: "Game Development Basics",
    description: "Create your own games using Python and Pygame",
    icon: "🎮",
    level: "Intermediate",
    duration: "7 weeks",
    lessons: 28,
    enrolled: 580,
    rating: 4.4,
    progress: 0,
    color: "from-indigo-400 to-purple-500",
    category: "Game Development",
  },
]

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [levelFilter, setLevelFilter] = useState("all")
  const [categoryFilter, setCategoryFilter] = useState("all")

  const filteredCourses = allCourses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesLevel = levelFilter === "all" || course.level === levelFilter
    const matchesCategory = categoryFilter === "all" || course.category === categoryFilter

    return matchesSearch && matchesLevel && matchesCategory
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Coding Courses
        </h1>
        <p className="text-gray-600 mt-2">Structured learning paths to master programming skills</p>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Filter className="w-5 h-5" />
            <span>Find Courses</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={levelFilter} onValueChange={setLevelFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="Beginner">Beginner</SelectItem>
                <SelectItem value="Intermediate">Intermediate</SelectItem>
                <SelectItem value="Advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Programming">Programming</SelectItem>
                <SelectItem value="Web Development">Web Development</SelectItem>
                <SelectItem value="Design">Design</SelectItem>
                <SelectItem value="Data Science">Data Science</SelectItem>
                <SelectItem value="Game Development">Game Development</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCourses.map((course) => (
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
                <Badge
                  variant={
                    course.level === "Beginner"
                      ? "default"
                      : course.level === "Intermediate"
                        ? "secondary"
                        : "destructive"
                  }
                >
                  {course.level}
                </Badge>
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

              <Badge className="bg-blue-100 text-blue-800">{course.category}</Badge>

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

      {filteredCourses.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <p className="text-gray-500 text-lg">No courses found matching your criteria.</p>
            <p className="text-gray-400 mt-2">Try adjusting your search or filters.</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
