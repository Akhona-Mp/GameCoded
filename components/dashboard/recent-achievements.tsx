import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Star, Target, Zap } from "lucide-react"

const achievements = [
  {
    id: 1,
    title: "First Steps",
    description: "Completed your first Python lesson",
    icon: "🎯",
    type: "milestone",
    date: "2 days ago",
    xp: 100,
  },
  {
    id: 2,
    title: "Code Warrior",
    description: "Solved 10 coding challenges",
    icon: "⚔️",
    type: "challenge",
    date: "1 week ago",
    xp: 250,
  },
  {
    id: 3,
    title: "Speed Coder",
    description: "Completed a game in under 5 minutes",
    icon: "⚡",
    type: "speed",
    date: "1 week ago",
    xp: 150,
  },
  {
    id: 4,
    title: "Streak Master",
    description: "7-day learning streak",
    icon: "🔥",
    type: "streak",
    date: "Today",
    xp: 200,
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
    default:
      return <Trophy className="w-5 h-5 text-gray-500" />
  }
}

export function RecentAchievements() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {achievements.map((achievement) => (
        <Card key={achievement.id} className="hover:shadow-md transition-shadow">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-lg">{achievement.icon}</span>
                </div>
                <div>
                  <CardTitle className="text-base">{achievement.title}</CardTitle>
                  <CardDescription className="text-sm">{achievement.description}</CardDescription>
                </div>
              </div>
              {getIconComponent(achievement.type)}
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">{achievement.date}</span>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                +{achievement.xp} XP
              </Badge>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
