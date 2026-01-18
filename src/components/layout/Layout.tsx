import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { HeaderMobile } from './HeaderMobile';
import { HeaderDesktop } from './HeaderDesktop';
import { useSidebar } from '../../hooks/useSidebar';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { isExpanded, shouldRender } = useSidebar();

  return (
    <div className="min-h-screen bg-[var(--color-background-secondary)]">
      {/* Sidebar - apenas em desktop (≥1280px) */}
      {shouldRender && <Sidebar />}
      
      {/* HeaderDesktop - apenas em desktop (≥1280px) */}
      {shouldRender && <HeaderDesktop />}
      
      {/* HeaderMobile - apenas em mobile/tablet (<1280px) */}
      {!shouldRender && <HeaderMobile />}
      
      <main
        className={`
          min-h-screen w-full
          transition-all duration-300 ease-in-out
          ${shouldRender && isExpanded ? 'lg:ml-[300px]' : ''}
          ${shouldRender && !isExpanded ? 'lg:ml-[80px]' : ''}
          pt-16
        `}
      >
        {children}
      </main>
    </div>
  );
}
