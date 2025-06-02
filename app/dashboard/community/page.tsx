"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Heart, MessageCircle, Share2, Users, TrendingUp, Plus, Search } from "lucide-react"

const communityPosts = [
  {
    id: 1,
    author: "Alex C.",
    avatar: "/placeholder.svg?height=40&width=40",
    badge: "Python Master",
    time: "2 hours ago",
    content:
      "Just finished my first Python game! 🐍🎮 It's a simple snake game but I'm so proud of it. Thanks to everyone who helped me debug the collision detection!",
    image: "/placeholder.svg?height=200&width=300",
    likes: 24,
    comments: 8,
    shares: 3,
    tags: ["python", "game-dev", "beginner"],
  },
  {
    id: 2,
    author: "Sam R.",
    avatar: "/placeholder.svg?height=40&width=40",
    badge: "JS Ninja",
    time: "4 hours ago",
    content:
      "Quick tip for beginners: Always use console.log() to debug your JavaScript! It's like having a conversation with your code 💬",
    likes: 18,
    comments: 12,
    shares: 7,
    tags: ["javascript", "tips", "debugging"],
  },
  {
    id: 3,
    author: "Jordan M.",
    avatar: "/placeholder.svg?height=40&width=40",
    badge: "HTML Hero",
    time: "6 hours ago",
    content:
      "Challenge completed! 🎉 Built a responsive website using only HTML and CSS. No JavaScript needed! Sometimes simple is better.",
    image: "/placeholder.svg?height=200&width=300",
    likes: 31,
    comments: 15,
    shares: 9,
    tags: ["html", "css", "responsive", "challenge"],
  },
  {
    id: 4,
    author: "Casey L.",
    avatar: "/placeholder.svg?height=40&width=40",
    badge: "CSS Artist",
    time: "1 day ago",
    content:
      "Does anyone know how to center a div? 😅 Just kidding! But seriously, CSS Grid has made my life so much easier. Here's a quick tutorial I made:",
    likes: 42,
    comments: 23,
    shares: 18,
    tags: ["css", "tutorial", "grid"],
  },
]

const leaderboard = [
  { name: "Alex C.", points: 2450, badge: "Python Master", avatar: "/placeholder.svg?height=32&width=32" },
  { name: "Sam R.", points: 2380, badge: "JS Ninja", avatar: "/placeholder.svg?height=32&width=32" },
  { name: "Jordan M.", points: 2290, badge: "HTML Hero", avatar: "/placeholder.svg?height=32&width=32" },
  { name: "Casey L.", points: 2150, badge: "CSS Artist", avatar: "/placeholder.svg?height=32&width=32" },
  { name: "Riley P.", points: 2080, badge: "Code Explorer", avatar: "/placeholder.svg?height=32&width=32" },
]

export default function CommunityPage() {
  const [newPost, setNewPost] = useState("")
  const [searchQuery, setSearchQuery] = useState("")

  const handlePost = () => {
    if (newPost.trim()) {
      // In a real app, this would send to backend
      setNewPost("")
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Community
        </h1>
        <p className="text-gray-600 mt-2">Connect with fellow young coders and share your journey</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Feed */}
        <div className="lg:col-span-2 space-y-6">
          {/* Create Post */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Plus className="w-5 h-5" />
                <span>Share Your Progress</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="What are you working on? Share your coding journey..."
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                className="min-h-20"
              />
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
                    #python
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
                    #javascript
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
                    #css
                  </Badge>
                </div>
                <Button onClick={handlePost} disabled={!newPost.trim()}>
                  Post
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Search */}
          <Card>
            <CardContent className="p-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search posts, users, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </CardContent>
          </Card>

          {/* Posts Feed */}
          <div className="space-y-4">
            {communityPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src={post.avatar || "/placeholder.svg"} alt={post.author} />
                      <AvatarFallback>{post.author[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold">{post.author}</h3>
                        <Badge variant="secondary" className="text-xs">
                          {post.badge}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-500">{post.time}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">{post.content}</p>

                  {post.image && (
                    <div className="rounded-lg overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt="Post content"
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        #{tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-red-500 transition-colors">
                        <Heart className="w-4 h-4" />
                        <span className="text-sm">{post.likes}</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500 transition-colors">
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-sm">{post.comments}</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-green-500 transition-colors">
                        <Share2 className="w-4 h-4" />
                        <span className="text-sm">{post.shares}</span>
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Community Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Community Stats</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Active Members</span>
                <span className="font-bold">10,247</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Posts Today</span>
                <span className="font-bold">156</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Projects Shared</span>
                <span className="font-bold">2,834</span>
              </div>
            </CardContent>
          </Card>

          {/* Leaderboard */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5" />
                <span>Top Coders</span>
              </CardTitle>
              <CardDescription>This week's most active members</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {leaderboard.map((user, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold ${
                        index === 0
                          ? "bg-yellow-500"
                          : index === 1
                            ? "bg-gray-400"
                            : index === 2
                              ? "bg-orange-500"
                              : "bg-blue-500"
                      }`}
                    >
                      {index + 1}
                    </div>
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                      <AvatarFallback>{user.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{user.name}</p>
                      <p className="text-xs text-gray-500">{user.badge}</p>
                    </div>
                    <span className="text-sm font-bold">{user.points}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Trending Topics */}
          <Card>
            <CardHeader>
              <CardTitle>Trending Topics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {["#python-basics", "#web-development", "#game-dev", "#debugging-tips", "#css-tricks"].map((topic) => (
                  <Badge key={topic} variant="outline" className="mr-2 mb-2 cursor-pointer hover:bg-gray-100">
                    {topic}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
