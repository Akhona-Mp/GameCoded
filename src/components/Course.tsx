
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Book, Code, Rocket } from 'lucide-react';

export interface CourseProps {
  id: string;
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  lessons: number;
  image: string;
  category: string;
  color: string;
  icon: 'code' | 'game' | 'robot';
}

const Course: React.FC<CourseProps> = ({
  title,
  description,
  level,
  duration,
  lessons,
  image,
  category,
  color,
  icon
}) => {
  const getIcon = () => {
    switch (icon) {
      case 'code':
        return <Code className="h-5 w-5" />;
      case 'robot':
        return <Rocket className="h-5 w-5" />;
      case 'game':
        return <Book className="h-5 w-5" />;
      default:
        return <Code className="h-5 w-5" />;
    }
  };

  const getBadgeColor = () => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-blue-100 text-blue-800';
      case 'Advanced':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg h-full flex flex-col">
      <div 
        className="h-48 bg-cover bg-center" 
        style={{ 
          backgroundImage: `url(${image})`,
          backgroundColor: `var(--${color})` 
        }}
      >
        <div className={`h-full w-full bg-${color}/20 flex items-center justify-center`}>
          {!image && (
            <div className={`text-game-${color} text-4xl`}>
              {getIcon()}
            </div>
          )}
        </div>
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <Badge className={`${getBadgeColor()} ml-2`}>{level}</Badge>
        </div>
        <div className="flex items-center text-sm text-gray-500 gap-2">
          <span>{duration}</span>
          <span>•</span>
          <span>{lessons} Lessons</span>
        </div>
        <Badge variant="outline" className="w-fit">{category}</Badge>
      </CardHeader>
      <CardContent className="pb-4 flex-grow">
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardContent>
      <CardFooter className="pt-0 pb-4">
        <Button className="w-full bg-game-purple hover:bg-game-dark-purple">
          Start Learning
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Course;
