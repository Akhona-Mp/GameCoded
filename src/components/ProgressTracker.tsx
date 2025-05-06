
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Trophy, Star } from 'lucide-react';

const ProgressTracker: React.FC = () => {
  const challenges = [
    { name: 'Moving the Robot', completed: true, progress: 100 },
    { name: 'Collecting Stars', completed: false, progress: 65 },
    { name: 'Loops and Repetition', completed: false, progress: 20 },
    { name: 'Conditions', completed: false, progress: 0 },
    { name: 'Functions', completed: false, progress: 0 },
  ];
  
  const badges = [
    { name: 'First Code', icon: <CheckCircle className="h-4 w-4" />, earned: true },
    { name: 'Star Collector', icon: <Star className="h-4 w-4" />, earned: true },
    { name: 'Code Master', icon: <Trophy className="h-4 w-4" />, earned: false },
  ];

  return (
    <div className="bg-white rounded-xl shadow-game p-6">
      <h3 className="text-xl font-bold mb-6">Your Learning Journey</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <h4 className="font-semibold text-gray-700 mb-4">Challenges</h4>
          <div className="space-y-4">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    {challenge.completed && (
                      <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                    )}
                    <h5 className="font-medium">{challenge.name}</h5>
                  </div>
                  <span className="text-sm text-gray-500">{challenge.progress}%</span>
                </div>
                <Progress value={challenge.progress} className="h-2" />
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-700 mb-4">Your Badges</h4>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex flex-wrap gap-3">
              {badges.map((badge, index) => (
                <div 
                  key={index} 
                  className={`
                    rounded-full p-4 flex items-center justify-center
                    ${badge.earned 
                      ? 'bg-gradient-primary text-white' 
                      : 'bg-gray-200 text-gray-400'
                    }
                    ${!badge.earned && 'opacity-50'}
                    transition-transform hover:scale-105
                  `}
                >
                  {badge.icon}
                </div>
              ))}
            </div>
            <div className="mt-4 space-y-2">
              {badges.map((badge, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Badge variant={badge.earned ? "default" : "outline"} className={badge.earned ? "bg-game-purple" : ""}>
                    {badge.earned ? 'Earned' : 'Locked'}
                  </Badge>
                  <span className={badge.earned ? "text-gray-700" : "text-gray-400"}>
                    {badge.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
        <h4 className="text-blue-700 font-medium mb-1">Next Milestone</h4>
        <p className="text-sm text-blue-600">Complete "Collecting Stars" to unlock the Loops module!</p>
      </div>
    </div>
  );
};

export default ProgressTracker;
