import { useState } from 'react';
import { Icon } from '../../ui/Icon';
import { MenuDropdown } from '../MenuDropdown/MenuDropdown';

interface HeaderMobileProps {
  avatarUrl?: string;
}

export function HeaderMobile({ avatarUrl }: HeaderMobileProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleAvatarClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className="
          fixed top-0 left-0 right-0
          w-full h-16
          bg-[var(--color-background-primary)]
          border-b border-[var(--color-border)]
          flex items-center justify-between
          px-4
          z-50
          shadow-[var(--shadow-sm)]
        "
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Icon name="logo" size={24} className="text-[var(--color-text-primary)]" />
          <span
            className="font-[var(--font-weight-bold)] text-[var(--color-text-primary)]"
            style={{
              fontFamily: 'Inter',
              fontSize: '20px',
              lineHeight: '24px',
            }}
          >
            mycash+
          </span>
        </div>

        {/* Avatar clicável */}
        <button
          onClick={handleAvatarClick}
          className="
            flex items-center justify-center
            w-10 h-10
            rounded-[var(--border-radius-full)]
            bg-[var(--gray-200)]
            overflow-hidden
            transition-transform duration-200 ease-in-out
            hover:scale-105
            focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] focus:ring-offset-2
          "
          aria-label="Abrir menu"
          aria-expanded={isMenuOpen}
        >
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt="Avatar do usuário"
              className="w-full h-full object-cover"
            />
          ) : (
            <Icon name="user" size={20} className="text-[var(--color-text-secondary)]" />
          )}
        </button>
      </header>

      {/* Menu Dropdown */}
      <MenuDropdown isOpen={isMenuOpen} onClose={handleCloseMenu} />
    </>
  );
}
