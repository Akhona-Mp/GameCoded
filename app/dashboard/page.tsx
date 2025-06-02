import { GameCarousel } from "@/components/dashboard/game-carousel"
import { CoursesList } from "@/components/dashboard/courses-list"
import { RecentAchievements } from "@/components/dashboard/recent-achievements"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Star, Trophy, Target, Clock } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Welcome back, Alex! 👋
          </h1>
          <p className="text-gray-600 mt-2">Ready to continue your coding adventure?</p>
        </div>
        <div className="flex items-center space-x-4">
          <Card className="p-4">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="font-bold">2,450 XP</span>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center space-x-2">
              <Trophy className="w-5 h-5 text-orange-500" />
              <span className="font-bold">Level 12</span>
            </div>
          </Card>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Games Completed</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">+3 from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Learning Streak</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7 days</div>
            <p className="text-xs text-muted-foreground">Keep it up!</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Course Progress</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68%</div>
            <Progress value={68} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      {/* Continue Learning */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <span>Continue Learning</span>
            <Badge variant="secondary">In Progress</Badge>
          </CardTitle>
          <CardDescription>Pick up where you left off</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">🐍</span>
              </div>
              <div>
                <h3 className="font-semibold">Python Basics - Lesson 5</h3>
                <p className="text-sm text-gray-600">Variables and Data Types</p>
                <Progress value={75} className="w-48 mt-2" />
              </div>
            </div>
            <Badge className="bg-green-100 text-green-800">75% Complete</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Games Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Featured Games</h2>
        <GameCarousel />
      </div>

      {/* Courses Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Available Courses</h2>
        <CoursesList />
      </div>

      {/* Recent Achievements */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Recent Achievements</h2>
        <RecentAchievements />
      </div>
    </div>
  )
}
