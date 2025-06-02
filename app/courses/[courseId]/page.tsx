"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, Play, CheckCircle, Lock, Star, Clock } from "lucide-react"

// Course data
const courseData = {
  "python-fundamentals": {
    title: "Python Fundamentals",
    description: "Learn the basics of Python programming through fun exercises",
    icon: "🐍",
    level: "Beginner",
    duration: "4 weeks",
    lessons: [
      { id: 1, title: "Introduction to Python", duration: "15 min", completed: true, locked: false },
      { id: 2, title: "Variables and Data Types", duration: "20 min", completed: true, locked: false },
      { id: 3, title: "Basic Operations", duration: "18 min", completed: true, locked: false },
      { id: 4, title: "Conditional Statements", duration: "25 min", completed: false, locked: false },
      { id: 5, title: "Loops and Iteration", duration: "30 min", completed: false, locked: true },
      { id: 6, title: "Functions", duration: "35 min", completed: false, locked: true },
    ],
  },
  "web-development": {
    title: "Web Development Basics",
    description: "Build your first website with HTML, CSS, and JavaScript",
    icon: "🌐",
    level: "Beginner",
    duration: "6 weeks",
    lessons: [
      { id: 1, title: "HTML Structure", duration: "20 min", completed: true, locked: false },
      { id: 2, title: "CSS Styling", duration: "25 min", completed: true, locked: false },
      { id: 3, title: "JavaScript Basics", duration: "30 min", completed: false, locked: false },
      { id: 4, title: "Interactive Elements", duration: "35 min", completed: false, locked: true },
    ],
  },
}

// Interactive lesson component
function InteractiveLesson({ lessonId }: { lessonId: number }) {
  const [currentStep, setCurrentStep] = useState(0)
  const [code, setCode] = useState('print("Hello, World!")')
  const [output, setOutput] = useState("")

  const lessonSteps = [
    {
      title: "Welcome to Python!",
      content:
        "Let's start with the classic 'Hello, World!' program. This is traditionally the first program you write in any language.",
      instruction: "Click 'Run Code' to see what happens!",
      code: 'print("Hello, World!")',
      expectedOutput: "Hello, World!",
    },
    {
      title: "Variables",
      content:
        "Variables are like containers that store data. In Python, you can create a variable by giving it a name and a value.",
      instruction: "Try changing the name in the variable below:",
      code: 'name = "Alex"\nprint("Hello, " + name + "!")',
      expectedOutput: "Hello, Alex!",
    },
    {
      title: "Numbers",
      content:
        "Python can work with numbers too! You can do math operations like addition, subtraction, multiplication, and division.",
      instruction: "Try changing the numbers and see what happens:",
      code: 'age = 10\nnext_year = age + 1\nprint("Next year I will be", next_year)',
      expectedOutput: "Next year I will be 11",
    },
  ]

  const currentLesson = lessonSteps[currentStep]

  const runCode = () => {
    // Simulate code execution
    if (code.includes('print("Hello, World!")')) {
      setOutput("Hello, World!")
    } else if (code.includes('print("Hello, " + name + "!")')) {
      setOutput("Hello, Alex!")
    } else if (code.includes('print("Next year I will be", next_year)')) {
      setOutput("Next year I will be 11")
    } else {
      setOutput("Code executed successfully!")
    }
  }

  const nextStep = () => {
    if (currentStep < lessonSteps.length - 1) {
      setCurrentStep(currentStep + 1)
      setCode(lessonSteps[currentStep + 1].code)
      setOutput("")
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      setCode(lessonSteps[currentStep - 1].code)
      setOutput("")
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">{currentLesson.title}</h3>
        <Badge variant="outline">
          {currentStep + 1} of {lessonSteps.length}
        </Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Learn</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-4">{currentLesson.content}</p>
          <p className="text-sm text-blue-600 font-medium">{currentLesson.instruction}</p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Code Editor</CardTitle>
          </CardHeader>
          <CardContent>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-32 p-3 font-mono text-sm border rounded-lg bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Write your code here..."
            />
            <Button onClick={runCode} className="mt-3 bg-green-600 hover:bg-green-700">
              <Play className="w-4 h-4 mr-2" />
              Run Code
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Output</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-32 p-3 bg-black text-green-400 font-mono text-sm rounded-lg overflow-auto">
              {output || "Click 'Run Code' to see output here..."}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-between">
        <Button onClick={prevStep} disabled={currentStep === 0} variant="outline">
          Previous
        </Button>
        <Button
          onClick={nextStep}
          disabled={currentStep === lessonSteps.length - 1}
          className="bg-purple-600 hover:bg-purple-700"
        >
          Next Step
        </Button>
      </div>

      <Progress value={((currentStep + 1) / lessonSteps.length) * 100} />
    </div>
  )
}

export default function CoursePage() {
  const params = useParams()
  const courseId = params.courseId as string
  const course = courseData[courseId as keyof typeof courseData]
  const [selectedLesson, setSelectedLesson] = useState<number | null>(null)

  if (!course) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Course Not Found</h1>
        <Link href="/dashboard">
          <Button>Back to Dashboard</Button>
        </Link>
      </div>
    )
  }

  const completedLessons = course.lessons.filter((lesson) => lesson.completed).length
  const progressPercentage = (completedLessons / course.lessons.length) * 100

  if (selectedLesson) {
    return (
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <Button onClick={() => setSelectedLesson(null)} variant="outline" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Course
          </Button>
          <h1 className="text-2xl font-bold">
            Lesson {selectedLesson}: {course.lessons.find((l) => l.id === selectedLesson)?.title}
          </h1>
        </div>
        <InteractiveLesson lessonId={selectedLesson} />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/dashboard">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold flex items-center space-x-3">
              <span className="text-4xl">{course.icon}</span>
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {course.title}
              </span>
            </h1>
            <p className="text-gray-600 mt-1">{course.description}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline">{course.duration}</Badge>
          <Badge variant="default">{course.level}</Badge>
        </div>
      </div>

      {/* Progress Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Course Progress
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-500" />
              <span>
                {completedLessons}/{course.lessons.length} completed
              </span>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={progressPercentage} className="mb-2" />
          <p className="text-sm text-gray-600">{Math.round(progressPercentage)}% complete • Keep up the great work!</p>
        </CardContent>
      </Card>

      {/* Lessons List */}
      <Card>
        <CardHeader>
          <CardTitle>Course Lessons</CardTitle>
          <CardDescription>Click on a lesson to start learning</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {course.lessons.map((lesson) => (
              <div
                key={lesson.id}
                className={`flex items-center justify-between p-4 rounded-lg border-2 transition-colors ${
                  lesson.locked
                    ? "bg-gray-50 border-gray-200 opacity-60"
                    : lesson.completed
                      ? "bg-green-50 border-green-200 hover:bg-green-100 cursor-pointer"
                      : "bg-blue-50 border-blue-200 hover:bg-blue-100 cursor-pointer"
                }`}
                onClick={() => !lesson.locked && setSelectedLesson(lesson.id)}
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      lesson.locked ? "bg-gray-300" : lesson.completed ? "bg-green-500" : "bg-blue-500"
                    }`}
                  >
                    {lesson.locked ? (
                      <Lock className="w-4 h-4 text-gray-600" />
                    ) : lesson.completed ? (
                      <CheckCircle className="w-4 h-4 text-white" />
                    ) : (
                      <span className="text-white font-bold text-sm">{lesson.id}</span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold">{lesson.title}</h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Clock className="w-3 h-3" />
                      <span>{lesson.duration}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {lesson.completed && <Badge className="bg-green-100 text-green-800">Completed</Badge>}
                  {lesson.locked && <Badge variant="secondary">Locked</Badge>}
                  {!lesson.locked && !lesson.completed && (
                    <Button size="sm">
                      <Play className="w-3 h-3 mr-1" />
                      Start
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
