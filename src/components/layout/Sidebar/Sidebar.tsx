import { useSidebar } from '../../../hooks/useSidebar';
import { SidebarItem } from './SidebarItem';
import { SidebarProfile } from './SidebarProfile';
import { Icon } from '../../ui/Icon';
import { ROUTES } from '../../../constants';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className = '' }: SidebarProps) {
  const { isExpanded, shouldRender, toggle } = useSidebar();

  if (!shouldRender) {
    return null;
  }

  return (
    <aside
      className={`
        fixed left-0 top-0 h-screen
        bg-[var(--color-background-primary)]
        flex flex-col
        justify-between
        items-stretch
        p-8
        isolation-isolate
        transition-all duration-300 ease-in-out
        will-change-[width]
        z-40
        ${isExpanded ? 'w-[300px]' : 'w-[80px]'}
        ${className}
      `}
      style={{
        gap: isExpanded ? '92px' : '0',
      }}
    >
      {/* Frame 162 - Header com Logo e Menu */}
      {isExpanded && (
        <div 
          className="flex flex-col items-stretch mx-auto"
          style={{ width: '236px', gap: '56px' }}
        >
          {/* Logo */}
          <div 
            className="flex items-center"
            style={{ width: '236px', height: '36px' }}
          >
            <Icon name="logo" size={32} className="text-[var(--color-text-primary)]" />
            <span 
              className="font-[var(--font-weight-bold)] text-[var(--color-text-primary)]"
              style={{
                fontFamily: 'Inter',
                fontSize: '32px',
                lineHeight: '34px',
                marginLeft: '16px',
              }}
            >
              mycash+
            </span>
          </div>

          {/* Menu Sidebar */}
          <nav 
            className="flex flex-col items-stretch"
            style={{ width: '236px', gap: '16px' }}
          >
            <SidebarItem
              icon="home"
              label="Home"
              to={ROUTES.DASHBOARD}
              isExpanded={isExpanded}
            />
            <SidebarItem
              icon="cards"
              label="Cartões"
              to={ROUTES.CARDS}
              isExpanded={isExpanded}
            />
          </nav>
        </div>
      )}
      
      {!isExpanded && (
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center justify-center">
            <Icon name="logo" size={32} className="text-[var(--color-text-primary)]" />
          </div>
          <nav className="flex flex-col items-center gap-2">
            <SidebarItem
              icon="home"
              label="Home"
              to={ROUTES.DASHBOARD}
              isExpanded={isExpanded}
            />
            <SidebarItem
              icon="cards"
              label="Cartões"
              to={ROUTES.CARDS}
              isExpanded={isExpanded}
            />
          </nav>
        </div>
      )}

      {/* Perfil do Usuário - Frame 161 */}
      <SidebarProfile isExpanded={isExpanded} />

      {/* Botão de Toggle - Component 1 */}
      <button
        onClick={toggle}
        className="absolute flex items-center justify-center transition-colors duration-200 ease-in-out z-20"
        style={{
          width: '24px',
          height: '24px',
          left: isExpanded ? '288px' : '68px',
          top: '73px',
          background: 'var(--color-toggle-bg)',
          boxShadow: 'var(--shadow-toggle)',
          borderRadius: '100px',
        }}
        aria-label={isExpanded ? 'Colapsar sidebar' : 'Expandir sidebar'}
      >
        <Icon 
          name={isExpanded ? 'chevron-left' : 'chevron-right'} 
          size={16} 
          className="text-[var(--color-text-primary)]"
        />
      </button>
    </aside>
  );
}
