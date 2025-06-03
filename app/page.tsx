import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Trophy, Users, Code, Gamepad2, BookOpen, Play, ArrowRight } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Game Coded
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost" className="text-purple-600 hover:text-purple-700">
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
            Learn to Code Through Play!
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Game Coded makes learning Python, JavaScript, HTML, and CSS fun and interactive for kids aged 8-14. Join
            thousands of young coders on their programming journey!
          </p>
          <div className="flex justify-center space-x-4 mb-12">
            <Link href="/signup">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
              >
                Start Learning <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-purple-300 text-purple-600 hover:bg-purple-50">
              <Play className="mr-2 w-4 h-4" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">10,000+</div>
              <div className="text-gray-600">Happy Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Interactive Games</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">4</div>
              <div className="text-gray-600">Programming Languages</div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Scoreboard */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Top Coders Leaderboard</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-yellow-200 bg-gradient-to-r from-yellow-50 to-orange-50">
              <CardHeader>
                <CardTitle className="flex items-center justify-center space-x-2">
                  <Trophy className="w-6 h-6 text-yellow-500" />
                  <span>Weekly Champions</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Alex C.", points: 2450, rank: 1, badge: "Python Master" },
                    { name: "Sam R.", points: 2380, rank: 2, badge: "JS Ninja" },
                    { name: "Jordan M.", points: 2290, rank: 3, badge: "HTML Hero" },
                    { name: "Casey L.", points: 2150, rank: 4, badge: "CSS Artist" },
                    { name: "Riley P.", points: 2080, rank: 5, badge: "Code Explorer" },
                  ].map((player) => (
                    <div key={player.rank} className="flex items-center justify-between p-3 rounded-lg bg-white/70">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                            player.rank === 1
                              ? "bg-yellow-500"
                              : player.rank === 2
                                ? "bg-gray-400"
                                : player.rank === 3
                                  ? "bg-orange-500"
                                  : "bg-blue-500"
                          }`}
                        >
                          {player.rank}
                        </div>
                        <div>
                          <div className="font-semibold">{player.name}</div>
                          <Badge variant="secondary" className="text-xs">
                            {player.badge}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="font-bold">{player.points}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Games */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Interactive Learning Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Robot Adventure",
                description: "Guide the robot through mazes using Python commands",
                icon: "🤖",
                difficulty: "Beginner",
                language: "Python",
                color: "from-green-400 to-blue-500",
              },
              {
                title: "Web Builder",
                description: "Create amazing websites with HTML and CSS",
                icon: "🏗️",
                difficulty: "Intermediate",
                language: "HTML/CSS",
                color: "from-purple-400 to-pink-500",
              },
              {
                title: "Code Detective",
                description: "Find bugs and solve JavaScript puzzles",
                icon: "🕵️",
                difficulty: "Advanced",
                language: "JavaScript",
                color: "from-yellow-400 to-orange-500",
              },
            ].map((game, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className={`h-32 bg-gradient-to-r ${game.color} flex items-center justify-center`}>
                  <span className="text-4xl">{game.icon}</span>
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
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{game.language}</Badge>
                    <Button size="sm" variant="ghost" className="text-purple-600">
                      <Play className="w-4 h-4 mr-1" />
                      Try Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose Game Coded?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Gamepad2 className="w-8 h-8 text-purple-500" />,
                title: "Game-Based Learning",
                description: "Learn through fun, interactive games that keep kids engaged",
              },
              {
                icon: <Code className="w-8 h-8 text-blue-500" />,
                title: "4 Languages",
                description: "Master Python, JavaScript, HTML, and CSS step by step",
              },
              {
                icon: <BookOpen className="w-8 h-8 text-green-500" />,
                title: "Structured Courses",
                description: "Follow guided learning paths designed for young minds",
              },
              {
                icon: <Users className="w-8 h-8 text-orange-500" />,
                title: "Safe Community",
                description: "Connect with other young coders in a moderated environment",
              },
            ].map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Coding Adventure?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of kids who are already learning to code the fun way!
          </p>
          <Link href="/signup">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Get Started Free <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Game Coded</span>
              </div>
              <p className="text-gray-400">Making coding fun and accessible for kids worldwide.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Learn</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Python Basics</li>
                <li>JavaScript Fun</li>
                <li>HTML Adventures</li>
                <li>CSS Magic</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Parent Guide</li>
                <li>Safety</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Careers</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Game Coded. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
