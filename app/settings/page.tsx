"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { ArrowLeft, Palette, Type, Moon, Sun, Volume2 } from "lucide-react"

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    theme: "default",
    darkMode: false,
    fontSize: [16],
    fontFamily: "inter",
    soundEffects: true,
    notifications: true,
    autoSave: true,
  })

  const themes = [
    { value: "default", label: "Default", colors: "from-purple-500 to-blue-500" },
    { value: "forest", label: "Forest", colors: "from-green-500 to-teal-500" },
    { value: "sunset", label: "Sunset", colors: "from-orange-500 to-pink-500" },
    { value: "ocean", label: "Ocean", colors: "from-blue-500 to-cyan-500" },
    { value: "galaxy", label: "Galaxy", colors: "from-purple-500 to-indigo-500" },
  ]

  const fonts = [
    { value: "inter", label: "Inter" },
    { value: "roboto", label: "Roboto" },
    { value: "comic", label: "Comic Sans" },
    { value: "mono", label: "Monospace" },
  ]

  const handleSettingChange = (key: string, value: any) => {
    setSettings((prev) => ({ ...prev, [key]: value }))
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
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Settings
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Appearance Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Palette className="w-5 h-5" />
              <span>Appearance</span>
            </CardTitle>
            <CardDescription>Customize how Game Coded looks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Theme Selection */}
            <div className="space-y-3">
              <Label>Theme</Label>
              <div className="grid grid-cols-2 gap-3">
                {themes.map((theme) => (
                  <div
                    key={theme.value}
                    onClick={() => handleSettingChange("theme", theme.value)}
                    className={`p-3 rounded-lg border-2 cursor-pointer transition-colors ${
                      settings.theme === theme.value
                        ? "border-purple-500 bg-purple-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className={`w-full h-8 bg-gradient-to-r ${theme.colors} rounded mb-2`}></div>
                    <p className="text-sm font-medium text-center">{theme.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Dark Mode */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {settings.darkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                <Label>Dark Mode</Label>
              </div>
              <Switch
                checked={settings.darkMode}
                onCheckedChange={(checked) => handleSettingChange("darkMode", checked)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Typography Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Type className="w-5 h-5" />
              <span>Typography</span>
            </CardTitle>
            <CardDescription>Adjust text appearance</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Font Family */}
            <div className="space-y-2">
              <Label>Font Family</Label>
              <Select value={settings.fontFamily} onValueChange={(value) => handleSettingChange("fontFamily", value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {fonts.map((font) => (
                    <SelectItem key={font.value} value={font.value}>
                      {font.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Font Size */}
            <div className="space-y-3">
              <Label>Font Size: {settings.fontSize[0]}px</Label>
              <Slider
                value={settings.fontSize}
                onValueChange={(value) => handleSettingChange("fontSize", value)}
                max={24}
                min={12}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>Small</span>
                <span>Large</span>
              </div>
            </div>

            {/* Preview */}
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">Preview:</p>
              <p
                style={{
                  fontSize: `${settings.fontSize[0]}px`,
                  fontFamily:
                    settings.fontFamily === "comic"
                      ? "Comic Sans MS"
                      : settings.fontFamily === "mono"
                        ? "monospace"
                        : settings.fontFamily,
                }}
                className="font-medium"
              >
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Audio Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Volume2 className="w-5 h-5" />
              <span>Audio</span>
            </CardTitle>
            <CardDescription>Sound and audio preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Sound Effects</Label>
              <Switch
                checked={settings.soundEffects}
                onCheckedChange={(checked) => handleSettingChange("soundEffects", checked)}
              />
            </div>
          </CardContent>
        </Card>

        {/* General Settings */}
        <Card>
          <CardHeader>
            <CardTitle>General</CardTitle>
            <CardDescription>App behavior and preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Notifications</Label>
              <Switch
                checked={settings.notifications}
                onCheckedChange={(checked) => handleSettingChange("notifications", checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label>Auto-save Progress</Label>
              <Switch
                checked={settings.autoSave}
                onCheckedChange={(checked) => handleSettingChange("autoSave", checked)}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
          Save All Settings
        </Button>
      </div>
    </div>
  )
}
