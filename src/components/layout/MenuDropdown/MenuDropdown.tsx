import { useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Icon, IconName } from '../../ui/Icon';
import { ROUTES } from '../../../constants';

interface MenuDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MenuItem {
  icon: IconName;
  label: string;
  to: string;
}

const menuItems: MenuItem[] = [
  { icon: 'home', label: 'Home', to: ROUTES.DASHBOARD },
  { icon: 'cards', label: 'Cartões', to: ROUTES.CARDS },
  { icon: 'transactions', label: 'Transações', to: ROUTES.TRANSACTIONS },
  { icon: 'profile', label: 'Perfil', to: ROUTES.PROFILE },
];

export function MenuDropdown({ isOpen, onClose }: MenuDropdownProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement>(null);

  // Fechar menu ao clicar em um item de navegação
  const handleItemClick = () => {
    onClose();
  };

  // Fechar menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    // Fechar ao pressionar Escape
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
      // Prevenir scroll do body quando menu está aberto
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Logout
  const handleLogout = () => {
    // TODO: Implementar lógica de logout
    console.log('Logout');
    onClose();
    navigate(ROUTES.DASHBOARD);
  };

  return (
    <>
      {/* Overlay escuro semi-transparente */}
      {isOpen && (
        <div
          className="
            fixed inset-0
            bg-black/50
            z-40
            transition-opacity duration-300 ease-in-out
            ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
          "
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Menu Dropdown */}
      <div
        ref={menuRef}
        className={`
          fixed top-16 left-0 right-0
          bg-[var(--color-background-primary)]
          shadow-[var(--shadow-lg)]
          z-50
          max-h-[calc(100vh-4rem)]
          overflow-y-auto
          transition-transform duration-300 ease-out
          ${isOpen ? 'translate-y-0' : '-translate-y-full'}
        `}
        role="menu"
        aria-label="Menu de navegação"
      >
        {/* Header do Menu */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-[var(--color-border)]">
          <h2 className="text-[var(--font-size-lg)] font-[var(--font-weight-bold)] text-[var(--color-text-primary)]">
            Menu
          </h2>
          <button
            onClick={onClose}
            className="
              flex items-center justify-center
              w-8 h-8
              rounded-[var(--border-radius-md)]
              text-[var(--color-text-secondary)]
              hover:bg-[var(--gray-100)]
              transition-colors duration-200 ease-in-out
              focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] focus:ring-offset-2
            "
            aria-label="Fechar menu"
          >
            <Icon name="close" size={20} />
          </button>
        </div>

        {/* Lista de Itens */}
        <nav className="px-4 py-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                onClick={handleItemClick}
                className={`
                  flex items-center gap-3
                  px-4 py-3
                  rounded-[var(--border-radius-lg)]
                  transition-all duration-200 ease-in-out
                  mb-2
                  ${
                    isActive
                      ? 'bg-[var(--color-background-dark)] text-white'
                      : 'bg-transparent text-[var(--color-text-secondary)] hover:bg-[var(--gray-100)] hover:text-[var(--color-text-primary)]'
                  }
                `}
                role="menuitem"
              >
                <Icon
                  name={item.icon}
                  size={20}
                  className={isActive ? 'text-[var(--color-secondary)]' : ''}
                />
                <span
                  className={`font-[var(--font-weight-medium)] ${
                    isActive ? 'text-white' : ''
                  }`}
                  style={{
                    fontFamily: 'Inter',
                    fontSize: '16px',
                    lineHeight: '24px',
                  }}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Botão Sair */}
        <div className="px-4 py-4 border-t border-[var(--color-border)]">
          <button
            onClick={handleLogout}
            className="
              w-full
              flex items-center justify-center gap-2
              px-4 py-3
              bg-[var(--color-error)]
              text-white
              rounded-[var(--border-radius-lg)]
              font-[var(--font-weight-medium)]
              transition-all duration-200 ease-in-out
              hover:bg-[#dc2626]
              focus:outline-none focus:ring-2 focus:ring-[var(--color-error)] focus:ring-offset-2
            "
            style={{
              fontFamily: 'Inter',
              fontSize: '16px',
              lineHeight: '24px',
            }}
          >
            <Icon name="logout" size={20} />
            <span>Sair</span>
          </button>
        </div>
      </div>
    </>
  );
}
