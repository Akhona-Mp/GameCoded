"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Play, Star } from "lucide-react"

const games = [
  {
    id: "robot-adventure",
    title: "Robot Adventure",
    description: "Guide the robot through mazes using Python commands",
    icon: "🤖",
    difficulty: "Beginner",
    language: "Python",
    rating: 4.8,
    players: "2.3k",
    color: "from-green-400 to-blue-500",
  },
  {
    id: "web-builder",
    title: "Web Builder",
    description: "Create amazing websites with HTML and CSS",
    icon: "🏗️",
    difficulty: "Intermediate",
    language: "HTML/CSS",
    rating: 4.9,
    players: "1.8k",
    color: "from-purple-400 to-pink-500",
  },
  {
    id: "code-detective",
    title: "Code Detective",
    description: "Find bugs and solve JavaScript puzzles",
    icon: "🕵️",
    difficulty: "Advanced",
    language: "JavaScript",
    rating: 4.7,
    players: "1.2k",
    color: "from-yellow-400 to-orange-500",
  },
  {
    id: "css-artist",
    title: "CSS Artist",
    description: "Paint beautiful designs with CSS properties",
    icon: "🎨",
    difficulty: "Intermediate",
    language: "CSS",
    rating: 4.6,
    players: "950",
    color: "from-pink-400 to-red-500",
  },
  {
    id: "python-quest",
    title: "Python Quest",
    description: "Embark on an epic adventure learning Python",
    icon: "⚔️",
    difficulty: "Beginner",
    language: "Python",
    rating: 4.9,
    players: "3.1k",
    color: "from-blue-400 to-purple-500",
  },
]

export function GameCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = 3

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + itemsPerView >= games.length ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? Math.max(0, games.length - itemsPerView) : prev - 1))
  }

  const visibleGames = games.slice(currentIndex, currentIndex + itemsPerView)

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" onClick={prevSlide} disabled={currentIndex === 0}>
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={nextSlide}
            disabled={currentIndex + itemsPerView >= games.length}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleGames.map((game) => (
          <Card key={game.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
            <div className={`h-32 bg-gradient-to-r ${game.color} flex items-center justify-center relative`}>
              <span className="text-4xl">{game.icon}</span>
              <div className="absolute top-2 right-2 flex items-center space-x-1 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1">
                <Star className="w-3 h-3 text-yellow-300 fill-current" />
                <span className="text-xs text-white font-medium">{game.rating}</span>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {game.title}
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
              </CardTitle>
              <CardDescription>{game.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <Badge variant="outline">{game.language}</Badge>
                <span className="text-sm text-gray-500">{game.players} players</span>
              </div>
              <Link href={`/games/${game.id}`}>
                <Button className="w-full group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-blue-500">
                  <Play className="w-4 h-4 mr-2" />
                  Play Now
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
