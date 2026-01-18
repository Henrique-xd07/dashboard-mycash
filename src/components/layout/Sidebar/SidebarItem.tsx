import { Link, useLocation } from 'react-router-dom';
import { Icon, IconName } from '../../ui/Icon';
import { Tooltip } from '../../ui/Tooltip';

interface SidebarItemProps {
  icon: IconName;
  label: string;
  to: string;
  isExpanded: boolean;
}

export function SidebarItem({ icon, label, to, isExpanded }: SidebarItemProps) {
  const location = useLocation();
  const isActive = location.pathname === to;

  const itemContent = (
    <Link
      to={to}
      className={`
        flex items-center
        transition-all duration-200 ease-in-out
        ${isExpanded ? 'w-full' : 'justify-center w-full'}
        ${isActive 
          ? 'bg-[var(--color-secondary)] text-[var(--color-text-primary)]' 
          : 'bg-transparent text-[var(--color-text-primary)] hover:bg-[var(--gray-100)]'
        }
      `}
      style={{
        padding: isExpanded ? '12px 16px' : '12px',
        gap: isExpanded ? '8px' : '0',
        height: '48px',
        borderRadius: '100px',
      }}
    >
      <Icon 
        name={icon} 
        size={16} 
        className={isActive ? 'text-[var(--color-text-primary)]' : 'text-[var(--color-text-primary)]'}
      />
      {isExpanded && (
        <span 
          className={`text-[var(--color-text-primary)]`}
          style={{
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: isActive ? '600' : '600',
            fontSize: '18px',
            lineHeight: '24px',
            letterSpacing: '0.3px',
          }}
        >
          {label}
        </span>
      )}
    </Link>
  );

  if (!isExpanded) {
    return (
      <Tooltip content={label} position="right" delay={300}>
        {itemContent}
      </Tooltip>
    );
  }

  return itemContent;
}
