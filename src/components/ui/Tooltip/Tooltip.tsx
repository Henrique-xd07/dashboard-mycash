import { ReactNode } from 'react';

interface TooltipProps {
  children: ReactNode;
  content: string;
  position?: 'left' | 'right' | 'top' | 'bottom';
  delay?: number;
}

export function Tooltip({ children, content, position = 'right', delay = 300 }: TooltipProps) {
  return (
    <div className="group relative inline-flex">
      {children}
      <div
        className={`
          absolute z-50
          px-2 py-1
          text-sm font-medium
          text-white bg-[var(--color-background-dark)]
          rounded-[var(--border-radius-md)]
          whitespace-nowrap
          pointer-events-none
          opacity-0 group-hover:opacity-100
          transition-opacity duration-200 ease-in-out
          ${position === 'right' ? 'left-full ml-2 top-1/2 -translate-y-1/2' : ''}
          ${position === 'left' ? 'right-full mr-2 top-1/2 -translate-y-1/2' : ''}
          ${position === 'top' ? 'bottom-full mb-2 left-1/2 -translate-x-1/2' : ''}
          ${position === 'bottom' ? 'top-full mt-2 left-1/2 -translate-x-1/2' : ''}
        `}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {content}
        {/* Seta do tooltip */}
        <div
          className={`
            absolute w-0 h-0
            ${position === 'right' ? 'right-full top-1/2 -translate-y-1/2 border-r-black border-r-4 border-t-transparent border-t-4 border-b-transparent border-b-4' : ''}
            ${position === 'left' ? 'left-full top-1/2 -translate-y-1/2 border-l-black border-l-4 border-t-transparent border-t-4 border-b-transparent border-b-4' : ''}
          `}
        />
      </div>
    </div>
  );
}
