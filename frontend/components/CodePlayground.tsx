
import React, { useState } from 'react';
import CodeBlock from './CodeBlock';
import { Button } from '@/components/ui/button';
import { Play, RefreshCw, CheckCircle, XCircle } from 'lucide-react';

const CodePlayground: React.FC = () => {
  const [dropTargets, setDropTargets] = useState({
    target1: '',
    target2: '',
    target3: ''
  });
  const [isRunning, setIsRunning] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    const target = e.target as HTMLElement;
    if (target.classList.contains('drop-target')) {
      target.classList.add('active');
    }
  };

  const handleDragLeave = (e: React.DragEvent) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains('drop-target')) {
      target.classList.remove('active');
    }
  };

  const handleDrop = (e: React.DragEvent, targetId: 'target1' | 'target2' | 'target3') => {
    e.preventDefault();
    const target = e.target as HTMLElement;
    target.classList.remove('active');
    
    const blockId = e.dataTransfer.getData('text/plain');
    
    setDropTargets(prev => ({
      ...prev,
      [targetId]: blockId
    }));
  };

  const handleRun = () => {
    setIsRunning(true);
    
    // Simulate code execution
    setTimeout(() => {
      setIsRunning(false);
      setIsComplete(true);
      
      const correctSequence = 
        dropTargets.target1 === 'moveForward' && 
        dropTargets.target2 === 'collectStar' && 
        dropTargets.target3 === 'moveForward';
      
      setShowSuccess(correctSequence);
    }, 1500);
  };

  const handleReset = () => {
    setDropTargets({
      target1: '',
      target2: '',
      target3: ''
    });
    setIsRunning(false);
    setIsComplete(false);
    setShowSuccess(false);
  };

  const renderBlock = (targetId: 'target1' | 'target2' | 'target3') => {
    const blockId = dropTargets[targetId];
    
    switch(blockId) {
      case 'moveForward':
        return <CodeBlock code="moveForward();" />;
      case 'turnLeft':
        return <CodeBlock code="turnLeft();" />;
      case 'turnRight':
        return <CodeBlock code="turnRight();" />;
      case 'collectStar':
        return <CodeBlock code="collectStar();" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-game p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold">Coding Challenge</h3>
        <div className="bg-game-yellow/20 text-game-orange font-medium text-sm px-3 py-1 rounded-full">
          Help the Robot
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <h4 className="font-semibold text-gray-700 mb-2">Available Commands</h4>
            <div className="space-y-2">
              <CodeBlock code="moveForward();" isDraggable id="moveForward" />
              <CodeBlock code="turnLeft();" isDraggable id="turnLeft" />
              <CodeBlock code="turnRight();" isDraggable id="turnRight" />
              <CodeBlock code="collectStar();" isDraggable id="collectStar" />
            </div>
          </div>
        </div>
        
        <div className="md:col-span-2">
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <h4 className="font-semibold text-gray-700 flex items-center gap-2 mb-4">
              Your Code
              {isComplete && (
                showSuccess ? (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-500" />
                )
              )}
            </h4>
            
            <div className="bg-[#2a2a3c] text-white rounded-lg p-4 font-mono">
              <p className="text-gray-400 mb-2">// Drag and drop commands below</p>
              
              <div 
                className="drop-target mb-2"
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={(e) => handleDrop(e, 'target1')}
              >
                {renderBlock('target1')}
              </div>
              
              <div 
                className="drop-target mb-2"
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={(e) => handleDrop(e, 'target2')}
              >
                {renderBlock('target2')}
              </div>
              
              <div 
                className="drop-target"
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={(e) => handleDrop(e, 'target3')}
              >
                {renderBlock('target3')}
              </div>
            </div>
          </div>
          
          <div className="flex justify-end gap-2">
            <Button 
              variant="outline" 
              onClick={handleReset}
              disabled={isRunning}
            >
              <RefreshCw className="w-4 h-4 mr-1" /> Reset
            </Button>
            <Button 
              onClick={handleRun} 
              disabled={isRunning}
              className="bg-game-purple hover:bg-game-dark-purple"
            >
              <Play className="w-4 h-4 mr-1" /> Run Code
            </Button>
          </div>
          
          {isComplete && (
            <div className={`mt-4 p-3 rounded-lg text-white ${showSuccess ? 'bg-green-500' : 'bg-red-500'}`}>
              {showSuccess ? (
                <p>Great job! You've completed the challenge!</p>
              ) : (
                <p>Not quite right. Try a different combination!</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CodePlayground;
