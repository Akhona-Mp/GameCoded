"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowLeft, Star, Send, Heart } from "lucide-react"

export default function FeedbackPage() {
  const [feedbackType, setFeedbackType] = useState("")
  const [rating, setRating] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send to backend
    console.log({ feedbackType, rating, subject, message, email })
    // Reset form
    setFeedbackType("")
    setRating("")
    setSubject("")
    setMessage("")
    setEmail("")
    alert("Thank you for your feedback! We'll review it and get back to you soon.")
  }

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
            Feedback
          </h1>
          <p className="text-gray-600 mt-2">Help us make Game Coded even better for young coders!</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Feedback Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-red-500" />
                <span>Share Your Thoughts</span>
              </CardTitle>
              <CardDescription>
                Your feedback helps us create the best learning experience for young coders
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Feedback Type */}
                <div className="space-y-3">
                  <Label>What type of feedback do you have?</Label>
                  <Select value={feedbackType} onValueChange={setFeedbackType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select feedback type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bug">Bug Report</SelectItem>
                      <SelectItem value="feature">Feature Request</SelectItem>
                      <SelectItem value="improvement">Improvement Suggestion</SelectItem>
                      <SelectItem value="compliment">Compliment</SelectItem>
                      <SelectItem value="complaint">Complaint</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Rating */}
                <div className="space-y-3">
                  <Label>How would you rate your overall experience?</Label>
                  <RadioGroup value={rating} onValueChange={setRating} className="flex space-x-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <div key={star} className="flex items-center space-x-2">
                        <RadioGroupItem value={star.toString()} id={`star-${star}`} />
                        <Label htmlFor={`star-${star}`} className="flex items-center cursor-pointer">
                          <Star className={`w-5 h-5 ${
                            rating && Number.parseInt(rating) >= star ? "text-yellow-500 fill-current" : "text-gray-300"
                          }`} />
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="Brief summary of your feedback"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your experience, suggestions, or any issues you've encountered..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="min-h-32"
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email (optional)</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <p className="text-sm text-gray-500">
                    We'll only use this to follow up on your feedback if needed
                  </p>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                  disabled={!feedbackType || !subject || !message}
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Feedback
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Community Feedback</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">This Month</span>
                <span className="font-bold">247 submissions</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Average Rating</span>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="font-bold">4.8</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Response Time</span>
                <span className="font-bold">&lt; 24 hours</span>
              </div>
            </CardContent>
          </Card>

          {/* Recent Updates */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Updates</CardTitle>
              <CardDescription>Based on your feedback</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">🎮 New Game: Algorithm Arena</h4>
                <p className="text-xs text-gray-600">
                  Added based on requests for more advanced challenges
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">🎨 Dark Mode Support</h4>
                <p className="text-xs text-gray-600">
                  Now available in settings - thanks for the suggestion!
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">🚀 Faster Loading</h4>
                <p className="text-xs text-gray-600">
                  Improved performance based on user reports
                </p>
              </div>
            </CardContent>
          </Card>

          // ...existing code...
          {/* Contact Info */}
          <Card>
            <CardHeader>
              <CardTitle>Other Ways to Reach Us</CardTitle>
              <CardDescription>
                Need more help? Contact us directly.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div>
                <span className="font-medium">Email:</span>{" "}
                <a
                  href="mailto:support@gamecoded.com"
                  className="text-blue-600 underline"
                >
                  support@gamecoded.com
                </a>
              </div>
              <div>
                <span className="font-medium">Discord:</span>{" "}
                <a
                  href="https://discord.gg/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Join our server
                </a>
              </div>
              <div>
                <span className="font-medium">FAQ:</span>{" "}
                <Link href="/help" className="text-blue-600 underline">
                  Visit Help Center
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
