"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Play, Star, Filter } from "lucide-react"

const allGames = [
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
    concept: "Loops & Conditionals",
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
    concept: "DOM Manipulation",
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
    concept: "Debugging",
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
    concept: "Styling & Layout",
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
    concept: "Variables & Functions",
  },
  {
    id: "algorithm-arena",
    title: "Algorithm Arena",
    description: "Battle other coders with sorting and searching algorithms",
    icon: "⚡",
    difficulty: "Advanced",
    language: "Python",
    rating: 4.5,
    players: "800",
    color: "from-red-400 to-orange-500",
    concept: "Algorithms",
  },
  {
    id: "data-explorer",
    title: "Data Explorer",
    description: "Discover patterns in data using Python libraries",
    icon: "📊",
    difficulty: "Intermediate",
    language: "Python",
    rating: 4.4,
    players: "650",
    color: "from-teal-400 to-blue-500",
    concept: "Data Analysis",
  },
  {
    id: "function-factory",
    title: "Function Factory",
    description: "Build and test JavaScript functions in a fun environment",
    icon: "🏭",
    difficulty: "Beginner",
    language: "JavaScript",
    rating: 4.7,
    players: "1.5k",
    color: "from-indigo-400 to-purple-500",
    concept: "Functions",
  },
  {
    id: "object-odyssey",
    title: "Object Odyssey",
    description: "Master object-oriented programming concepts",
    icon: "🚀",
    difficulty: "Advanced",
    language: "Python",
    rating: 4.3,
    players: "420",
    color: "from-cyan-400 to-blue-500",
    concept: "OOP",
  },
]

export default function GamesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [difficultyFilter, setDifficultyFilter] = useState("all")
  const [languageFilter, setLanguageFilter] = useState("all")

  const filteredGames = allGames.filter((game) => {
    const matchesSearch =
      game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.concept.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesDifficulty = difficultyFilter === "all" || game.difficulty === difficultyFilter
    const matchesLanguage = languageFilter === "all" || game.language === languageFilter

    return matchesSearch && matchesDifficulty && matchesLanguage
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Coding Games
        </h1>
        <p className="text-gray-600 mt-2">Learn programming concepts through interactive games</p>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Filter className="w-5 h-5" />
            <span>Find Games</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search games..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Difficulties</SelectItem>
                <SelectItem value="Beginner">Beginner</SelectItem>
                <SelectItem value="Intermediate">Intermediate</SelectItem>
                <SelectItem value="Advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
            <Select value={languageFilter} onValueChange={setLanguageFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Languages</SelectItem>
                <SelectItem value="Python">Python</SelectItem>
                <SelectItem value="JavaScript">JavaScript</SelectItem>
                <SelectItem value="HTML/CSS">HTML/CSS</SelectItem>
                <SelectItem value="CSS">CSS</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Games Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGames.map((game) => (
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
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Badge variant="outline">{game.language}</Badge>
                  <span className="text-sm text-gray-500">{game.players} players</span>
                </div>
                <div className="flex items-center justify-between">
                  <Badge className="bg-blue-100 text-blue-800">{game.concept}</Badge>
                </div>
                <Link href={`/games/${game.id}`}>
                  <Button className="w-full group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-blue-500">
                    <Play className="w-4 h-4 mr-2" />
                    Play Now
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredGames.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <p className="text-gray-500 text-lg">No games found matching your criteria.</p>
            <p className="text-gray-400 mt-2">Try adjusting your search or filters.</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
