"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Trophy, Star, Target, Zap, Award, Lock } from "lucide-react"

const achievements = [
  {
    id: 1,
    title: "First Steps",
    description: "Completed your first Python lesson",
    icon: "🎯",
    type: "milestone",
    date: "2 days ago",
    xp: 100,
    unlocked: true,
    rarity: "common",
  },
  {
    id: 2,
    title: "Code Warrior",
    description: "Solved 10 coding challenges",
    icon: "⚔️",
    type: "challenge",
    date: "1 week ago",
    xp: 250,
    unlocked: true,
    rarity: "uncommon",
  },
  {
    id: 3,
    title: "Speed Coder",
    description: "Completed a game in under 5 minutes",
    icon: "⚡",
    type: "speed",
    date: "1 week ago",
    xp: 150,
    unlocked: true,
    rarity: "rare",
  },
  {
    id: 4,
    title: "Streak Master",
    description: "7-day learning streak",
    icon: "🔥",
    type: "streak",
    date: "Today",
    xp: 200,
    unlocked: true,
    rarity: "uncommon",
  },
  {
    id: 5,
    title: "Bug Hunter",
    description: "Found and fixed 25 bugs",
    icon: "🐛",
    type: "challenge",
    date: null,
    xp: 300,
    unlocked: false,
    rarity: "rare",
    progress: 18,
    total: 25,
  },
  {
    id: 6,
    title: "Python Master",
    description: "Complete all Python courses",
    icon: "🐍",
    type: "mastery",
    date: null,
    xp: 500,
    unlocked: false,
    rarity: "epic",
    progress: 2,
    total: 5,
  },
  {
    id: 7,
    title: "Community Helper",
    description: "Help 50 other students",
    icon: "🤝",
    type: "social",
    date: null,
    xp: 400,
    unlocked: false,
    rarity: "rare",
    progress: 12,
    total: 50,
  },
  {
    id: 8,
    title: "Game Creator",
    description: "Build and share your own game",
    icon: "🎮",
    type: "creation",
    date: null,
    xp: 750,
    unlocked: false,
    rarity: "legendary",
    progress: 0,
    total: 1,
  },
]

const getIconComponent = (type: string) => {
  switch (type) {
    case "milestone":
      return <Target className="w-5 h-5 text-blue-500" />
    case "challenge":
      return <Trophy className="w-5 h-5 text-yellow-500" />
    case "speed":
      return <Zap className="w-5 h-5 text-purple-500" />
    case "streak":
      return <Star className="w-5 h-5 text-orange-500" />
    case "mastery":
      return <Award className="w-5 h-5 text-green-500" />
    case "social":
      return <Star className="w-5 h-5 text-pink-500" />
    case "creation":
      return <Trophy className="w-5 h-5 text-red-500" />
    default:
      return <Trophy className="w-5 h-5 text-gray-500" />
  }
}

const getRarityColor = (rarity: string) => {
  switch (rarity) {
    case "common":
      return "bg-gray-100 text-gray-800"
    case "uncommon":
      return "bg-green-100 text-green-800"
    case "rare":
      return "bg-blue-100 text-blue-800"
    case "epic":
      return "bg-purple-100 text-purple-800"
    case "legendary":
      return "bg-yellow-100 text-yellow-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function AchievementsPage() {
  const [filter, setFilter] = useState("all")

  const unlockedAchievements = achievements.filter((a) => a.unlocked)
  const lockedAchievements = achievements.filter((a) => !a.unlocked)

  const filteredAchievements =
    filter === "unlocked" ? unlockedAchievements : filter === "locked" ? lockedAchievements : achievements

  const totalXP = unlockedAchievements.reduce((sum, achievement) => sum + achievement.xp, 0)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Achievements
        </h1>
        <p className="text-gray-600 mt-2">Track your coding milestones and unlock rewards</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Trophy className="w-5 h-5 text-yellow-500" />
              <div>
                <p className="text-sm text-gray-600">Unlocked</p>
                <p className="text-2xl font-bold">{unlockedAchievements.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Lock className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-sm text-gray-600">Locked</p>
                <p className="text-2xl font-bold">{lockedAchievements.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-purple-500" />
              <div>
                <p className="text-sm text-gray-600">Total XP</p>
                <p className="text-2xl font-bold">{totalXP}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Target className="w-5 h-5 text-blue-500" />
              <div>
                <p className="text-sm text-gray-600">Completion</p>
                <p className="text-2xl font-bold">
                  {Math.round((unlockedAchievements.length / achievements.length) * 100)}%
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filter Buttons */}
      <div className="flex space-x-2">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            filter === "all" ? "bg-purple-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          All ({achievements.length})
        </button>
        <button
          onClick={() => setFilter("unlocked")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            filter === "unlocked" ? "bg-purple-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Unlocked ({unlockedAchievements.length})
        </button>
        <button
          onClick={() => setFilter("locked")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            filter === "locked" ? "bg-purple-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Locked ({lockedAchievements.length})
        </button>
      </div>

      {/* Achievements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredAchievements.map((achievement) => (
          <Card
            key={achievement.id}
            className={`hover:shadow-md transition-shadow ${!achievement.unlocked ? "opacity-75" : ""}`}
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      achievement.unlocked ? "bg-gradient-to-r from-purple-100 to-blue-100" : "bg-gray-100"
                    }`}
                  >
                    {achievement.unlocked ? (
                      <span className="text-2xl">{achievement.icon}</span>
                    ) : (
                      <Lock className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                  <div>
                    <CardTitle className="text-base flex items-center space-x-2">
                      <span>{achievement.title}</span>
                      {achievement.unlocked && getIconComponent(achievement.type)}
                    </CardTitle>
                    <CardDescription className="text-sm">{achievement.description}</CardDescription>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Badge className={getRarityColor(achievement.rarity)}>{achievement.rarity}</Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    +{achievement.xp} XP
                  </Badge>
                </div>

                {achievement.unlocked ? (
                  <p className="text-sm text-gray-500">Unlocked {achievement.date}</p>
                ) : achievement.progress !== undefined ? (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>
                        {achievement.progress}/{achievement.total}
                      </span>
                    </div>
                    <Progress value={(achievement.progress / achievement.total) * 100} />
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">Keep coding to unlock!</p>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
