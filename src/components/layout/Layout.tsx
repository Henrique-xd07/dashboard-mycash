import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { useSidebar } from '../../hooks/useSidebar';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { isExpanded, shouldRender } = useSidebar();

  return (
    <div className="min-h-screen bg-[var(--color-background-secondary)]">
      {shouldRender && <Sidebar />}
      
      <main
        className={`
          min-h-screen w-full
          transition-all duration-300 ease-in-out
          ${shouldRender && isExpanded ? 'lg:ml-[280px]' : ''}
          ${shouldRender && !isExpanded ? 'lg:ml-[80px]' : ''}
        `}
      >
        {children}
      </main>
    </div>
  );
}
