"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Search, BookOpen, MessageCircle, Video, FileText, ChevronRight } from "lucide-react"

const helpCategories = [
  {
    title: "Getting Started",
    description: "New to Game Coded? Start here!",
    icon: <BookOpen className="w-6 h-6" />,
    articles: 12,
    color: "from-green-400 to-blue-500",
  },
  {
    title: "Games & Challenges",
    description: "How to play games and complete challenges",
    icon: <Video className="w-6 h-6" />,
    articles: 18,
    color: "from-purple-400 to-pink-500",
  },
  {
    title: "Courses & Learning",
    description: "Making the most of your learning journey",
    icon: <FileText className="w-6 h-6" />,
    articles: 15,
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "Account & Settings",
    description: "Manage your profile and preferences",
    icon: <MessageCircle className="w-6 h-6" />,
    articles: 8,
    color: "from-blue-400 to-cyan-500",
  },
]

const popularArticles = [
  {
    title: "How to start your first Python lesson",
    category: "Getting Started",
    views: "2.3k",
    helpful: 156,
  },
  {
    title: "Understanding difficulty levels",
    category: "Games & Challenges",
    views: "1.8k",
    helpful: 124,
  },
  {
    title: "Tracking your progress",
    category: "Courses & Learning",
    views: "1.5k",
    helpful: 98,
  },
  {
    title: "Customizing your profile",
    category: "Account & Settings",
    views: "1.2k",
    helpful: 87,
  },
  {
    title: "Earning achievements and XP",
    category: "Games & Challenges",
    views: "1.1k",
    helpful: 76,
  },
]

const faqs = [
  {
    question: "What age group is Game Coded designed for?",
    answer: "Game Coded is designed for kids aged 8-14 who want to learn programming in a fun, interactive way.",
  },
  {
    question: "Do I need any prior programming experience?",
    answer:
      "No! Game Coded is perfect for complete beginners. Our courses start from the very basics and gradually build up your skills.",
  },
  {
    question: "What programming languages can I learn?",
    answer: "You can learn Python, JavaScript, HTML, and CSS through our interactive games and courses.",
  },
  {
    question: "How do I track my progress?",
    answer:
      "Your progress is automatically saved and you can view it on your dashboard. You'll earn XP, achievements, and level up as you learn!",
  },
  {
    question: "Can I play games offline?",
    answer: "Currently, Game Coded requires an internet connection to save your progress and access all features.",
  },
]

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Link href="/dashboard">
          <Button variant="outline" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Help Center
          </h1>
          <p className="text-gray-600 mt-2">Find answers and get support for your coding journey</p>
        </div>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="p-6">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search for help articles, tutorials, or FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 text-lg"
            />
          </div>
        </CardContent>
      </Card>

      {/* Help Categories */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Browse by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {helpCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
              <div className={`h-20 bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                <div className="text-white">{category.icon}</div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg group-hover:text-purple-600 transition-colors">
                  {category.title}
                </CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{category.articles} articles</span>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-colors" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Popular Articles */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Popular Articles</h2>
        <Card>
          <CardContent className="p-0">
            <div className="divide-y">
              {popularArticles.map((article, index) => (
                <div key={index} className="p-4 hover:bg-gray-50 cursor-pointer group">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold group-hover:text-purple-600 transition-colors">{article.title}</h3>
                      <div className="flex items-center space-x-4 mt-2">
                        <Badge variant="outline">{article.category}</Badge>
                        <span className="text-sm text-gray-500">{article.views} views</span>
                        <span className="text-sm text-gray-500">{article.helpful} found helpful</span>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* FAQs */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <Card key={index} className="cursor-pointer">
              <CardContent className="p-4" onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}>
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{faq.question}</h3>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${expandedFaq === index ? "rotate-90" : ""}`}
                  />
                </div>
                {expandedFaq === index && <p className="mt-3 text-gray-600 leading-relaxed">{faq.answer}</p>}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Contact Support */}
      <Card className="bg-gradient-to-r from-purple-50 to-blue-50">
        <CardContent className="p-6 text-center">
          <h3 className="text-xl font-bold mb-2">Still need help?</h3>
          <p className="text-gray-600 mb-4">Can't find what you're looking for? Our support team is here to help!</p>
          <div className="flex justify-center space-x-4">
            <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
              Contact Support
            </Button>
            <Button variant="outline">Join Community</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
