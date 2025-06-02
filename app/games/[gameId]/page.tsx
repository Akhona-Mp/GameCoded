"use client"

import type React from "react"

import { useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, RotateCcw, CheckCircle, Star } from "lucide-react"

// Game data
const gameData = {
  "robot-adventure": {
    title: "Robot Adventure",
    description: "Guide the robot through mazes using Python commands",
    icon: "🤖",
    language: "Python",
    difficulty: "Beginner",
  },
  "web-builder": {
    title: "Web Builder",
    description: "Create amazing websites with HTML and CSS",
    icon: "🏗️",
    language: "HTML/CSS",
    difficulty: "Intermediate",
  },
  "code-detective": {
    title: "Code Detective",
    description: "Find bugs and solve JavaScript puzzles",
    icon: "🕵️",
    language: "JavaScript",
    difficulty: "Advanced",
  },
}

// Drag and drop game component
function DragDropGame() {
  const [draggedItem, setDraggedItem] = useState<string | null>(null)
  const [droppedItems, setDroppedItems] = useState<string[]>([])
  const [score, setScore] = useState(0)
  const [gameComplete, setGameComplete] = useState(false)

  const codeBlocks = [
    { id: "move_forward", text: "robot.move_forward()", correct: true },
    { id: "turn_left", text: "robot.turn_left()", correct: true },
    { id: "pick_up", text: "robot.pick_up()", correct: false },
    { id: "move_forward2", text: "robot.move_forward()", correct: true },
  ]

  const correctSequence = ["move_forward", "turn_left", "move_forward2"]

  const handleDragStart = (e: React.DragEvent, itemId: string) => {
    setDraggedItem(itemId)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    if (draggedItem && !droppedItems.includes(draggedItem)) {
      const newDroppedItems = [...droppedItems, draggedItem]
      setDroppedItems(newDroppedItems)

      // Check if sequence is correct
      if (newDroppedItems.length === correctSequence.length) {
        const isCorrect = newDroppedItems.every((item, index) => item === correctSequence[index])
        if (isCorrect) {
          setScore(100)
          setGameComplete(true)
        }
      }
    }
    setDraggedItem(null)
  }

  const resetGame = () => {
    setDroppedItems([])
    setScore(0)
    setGameComplete(false)
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Game Area */}
        <Card>
          <CardHeader>
            <CardTitle>Robot Maze</CardTitle>
            <CardDescription>Drag the code blocks to guide the robot to the treasure!</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gradient-to-br from-green-100 to-blue-100 p-6 rounded-lg min-h-64 relative">
              {/* Simple maze representation */}
              <div className="grid grid-cols-4 gap-2 h-full">
                <div className="bg-green-500 rounded flex items-center justify-center text-2xl">🤖</div>
                <div className="bg-gray-200 rounded"></div>
                <div className="bg-gray-200 rounded"></div>
                <div className="bg-gray-300 rounded"></div>
                <div className="bg-gray-200 rounded"></div>
                <div className="bg-gray-200 rounded"></div>
                <div className="bg-gray-200 rounded"></div>
                <div className="bg-gray-300 rounded"></div>
                <div className="bg-gray-300 rounded"></div>
                <div className="bg-gray-300 rounded"></div>
                <div className="bg-gray-200 rounded"></div>
                <div className="bg-gray-300 rounded"></div>
                <div className="bg-gray-300 rounded"></div>
                <div className="bg-gray-300 rounded"></div>
                <div className="bg-yellow-500 rounded flex items-center justify-center text-2xl">💎</div>
                <div className="bg-gray-300 rounded"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Code Blocks */}
        <Card>
          <CardHeader>
            <CardTitle>Code Blocks</CardTitle>
            <CardDescription>Drag these blocks to create your program</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium">Available Commands:</h4>
              <div className="space-y-2">
                {codeBlocks.map((block) => (
                  <div
                    key={block.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, block.id)}
                    className={`p-3 bg-purple-100 border-2 border-purple-200 rounded-lg cursor-move hover:bg-purple-200 transition-colors ${
                      droppedItems.includes(block.id) ? "opacity-50" : ""
                    }`}
                  >
                    <code className="text-purple-800 font-mono">{block.text}</code>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium">Your Program:</h4>
              <div
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                className="min-h-32 p-4 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50"
              >
                {droppedItems.length === 0 ? (
                  <p className="text-gray-500 text-center">Drop code blocks here</p>
                ) : (
                  <div className="space-y-2">
                    {droppedItems.map((itemId, index) => {
                      const block = codeBlocks.find((b) => b.id === itemId)
                      return (
                        <div key={index} className="p-2 bg-blue-100 rounded border">
                          <code className="text-blue-800 font-mono">{block?.text}</code>
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            </div>

            <div className="flex space-x-2">
              <Button onClick={resetGame} variant="outline">
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset
              </Button>
              {gameComplete && (
                <Badge className="bg-green-100 text-green-800 px-3 py-1">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Complete!
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Score and Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Game Progress
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-500" />
              <span>{score} XP</span>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={gameComplete ? 100 : (droppedItems.length / correctSequence.length) * 100} />
          <p className="text-sm text-gray-600 mt-2">
            {gameComplete
              ? "Congratulations! You've completed the level!"
              : `${droppedItems.length}/${correctSequence.length} commands placed`}
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default function GamePage() {
  const params = useParams()
  const gameId = params.gameId as string
  const game = gameData[gameId as keyof typeof gameData]

  if (!game) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Game Not Found</h1>
        <Link href="/dashboard">
          <Button>Back to Dashboard</Button>
        </Link>
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
              <span className="text-4xl">{game.icon}</span>
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {game.title}
              </span>
            </h1>
            <p className="text-gray-600 mt-1">{game.description}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline">{game.language}</Badge>
          <Badge
            variant={
              game.difficulty === "Beginner"
                ? "default"
                : game.difficulty === "Intermediate"
                  ? "secondary"
                  : "destructive"
            }
          >
            {game.difficulty}
          </Badge>
        </div>
      </div>

      {/* Game Content */}
      <DragDropGame />
    </div>
  )
}
