import { Icon } from '../../ui/Icon';

interface SidebarProfileProps {
  isExpanded: boolean;
  name?: string;
  email?: string;
  avatarUrl?: string;
}

export function SidebarProfile({ 
  isExpanded, 
  name = 'Henrique Lima',
  email = 'henriquelima7ph@gmail.com',
  avatarUrl 
}: SidebarProfileProps) {
  return (
    <>
      {isExpanded ? (
        <div 
          className="flex flex-row items-start mx-auto"
          style={{ width: '236px', gap: '12px' }}
        >
          {/* Avatar - Lider */}
          <div 
            className="flex items-center justify-center overflow-hidden rounded-full flex-shrink-0"
            style={{ width: '24px', height: '24px' }}
          >
            {avatarUrl ? (
              <img src={avatarUrl} alt={name} className="w-full h-full object-cover rounded-full" />
            ) : (
              <Icon name="user" size={16} className="text-[var(--color-text-primary)]" />
            )}
          </div>

          {/* Dados do usuário */}
          <div 
            className="flex flex-col items-stretch flex-1 min-w-0"
            style={{ width: '198px', gap: '8px' }}
          >
            {/* Nome */}
            <p 
              className="text-[var(--color-text-primary)] truncate"
              style={{
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: '16px',
                lineHeight: '20px',
                letterSpacing: '0.3px',
                width: '198px',
                height: '20px',
              }}
            >
              {name}
            </p>

            {/* Email */}
            <p 
              className="text-[var(--color-text-primary)] truncate"
              style={{
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '14px',
                lineHeight: '20px',
                letterSpacing: '0.3px',
                width: '198px',
                height: '20px',
              }}
            >
              {email}
            </p>
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <div 
            className="flex items-center justify-center overflow-hidden rounded-full"
            style={{ width: '24px', height: '24px' }}
          >
            {avatarUrl ? (
              <img src={avatarUrl} alt={name} className="w-full h-full object-cover rounded-full" />
            ) : (
              <Icon name="user" size={16} className="text-[var(--color-text-primary)]" />
            )}
          </div>
        </div>
      )}
    </>
  );
}
