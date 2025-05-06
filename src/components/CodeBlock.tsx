
import React from 'react';
import { cn } from '@/lib/utils';

interface CodeBlockProps {
  code: string;
  className?: string;
  isDraggable?: boolean;
  id?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  className,
  isDraggable = false,
  id
}) => {
  const handleDragStart = (e: React.DragEvent) => {
    if (id) {
      e.dataTransfer.setData('text/plain', id);
    }
  };

  return (
    <div
      className={cn(
        'code-block text-sm my-2',
        isDraggable && 'draggable',
        className
      )}
      draggable={isDraggable}
      onDragStart={handleDragStart}
      id={id}
    >
      <pre className="overflow-x-auto">{code}</pre>
    </div>
  );
};

export default CodeBlock;
