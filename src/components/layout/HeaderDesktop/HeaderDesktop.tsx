import { useState } from 'react';
import { Icon } from '../../ui/Icon';
import { useFinance } from '../../../contexts';
import { useSidebar } from '../../../hooks/useSidebar';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useNavigate } from 'react-router-dom';

export function HeaderDesktop() {
  const { searchText, setSearchText, dateRange, familyMembers, selectedMember, setSelectedMember } = useFinance();
  const { shouldRender, isExpanded } = useSidebar();
  const navigate = useNavigate();
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showMemberFilter, setShowMemberFilter] = useState(false);

  // Não renderizar em mobile/tablet
  if (!shouldRender) {
    return null;
  }

  // Formatar período para exibição - formato exato: "01 Jan - 31 Jan 2026"
  const formatDateRange = () => {
    if (!dateRange.startDate && !dateRange.endDate) {
      return 'Selecionar período';
    }
    if (dateRange.startDate && dateRange.endDate) {
      const startFormatted = format(dateRange.startDate, 'dd MMM', { locale: ptBR });
      const endFormatted = format(dateRange.endDate, 'dd MMM yyyy', { locale: ptBR });
      return `${startFormatted} - ${endFormatted}`;
    }
    if (dateRange.startDate) {
      return `A partir de ${format(dateRange.startDate, 'dd MMM yyyy', { locale: ptBR })}`;
    }
    if (dateRange.endDate) {
      return `Até ${format(dateRange.endDate, 'dd MMM yyyy', { locale: ptBR })}`;
    }
    return 'Selecionar período';
  };

  // Obter avatares dos membros (máximo 2 conforme design)
  const displayMembers = familyMembers.slice(0, 2);

  const handleAddMember = () => {
    // TODO: Abrir modal de adicionar membro
    console.log('Abrir modal de adicionar membro');
  };

  const handleNewTransaction = () => {
    // TODO: Abrir modal de nova transação
    navigate('/dashboard');
  };

  return (
    <nav
      className="fixed z-30 transition-all duration-300 ease-in-out"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        paddingTop: '8px',
        paddingRight: '8px',
        paddingBottom: '8px',
        paddingLeft: '8px',
        backgroundColor: 'white',
        borderRadius: '50px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '1400px',
        left: isExpanded ? 'calc(300px + 32px)' : 'calc(80px + 32px)',
        right: '32px',
        top: '16px',
        height: 'auto',
        margin: '0 auto',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
      }}
    >
      {/* Container de Busca */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '10px 20px',
          backgroundColor: '#f5f5f5',
          border: '1px solid #e0e0e0',
          borderRadius: '50px',
          flex: '0 0 auto',
          minWidth: '280px',
        }}
      >
        <Icon name="search" size={24} className="text-[#666]" />
        <input
          type="text"
          placeholder="Pesquisar"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{
            border: 'none',
            background: 'transparent',
            outline: 'none',
            fontSize: '15px',
            color: '#333',
            width: '100%',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
          }}
        />
      </div>

      {/* Botão de Filtro */}
      <button
        onClick={() => setShowMemberFilter(!showMemberFilter)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '48px',
          height: '48px',
          backgroundColor: 'white',
          border: '1px solid #e0e0e0',
          borderRadius: '50%',
          cursor: 'pointer',
          transition: 'all 0.2s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#f5f5f5';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'white';
        }}
        aria-label="Filtros"
      >
        <Icon name="filter" size={24} className="text-[#666]" />
      </button>

      {/* Seletor de Data */}
      <button
        onClick={() => setShowDatePicker(!showDatePicker)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '10px 20px',
          backgroundColor: 'white',
          border: '1px solid #e0e0e0',
          borderRadius: '50px',
          cursor: 'pointer',
          transition: 'all 0.2s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#f9f9f9';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'white';
        }}
      >
        <Icon name="calendar" size={20} className="text-[#666]" />
        <span
          style={{
            fontSize: '14px',
            color: '#333',
            whiteSpace: 'nowrap',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
          }}
        >
          {formatDateRange()}
        </span>
      </button>

      {/* Grupo de Avatares */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginLeft: 'auto',
        }}
      >
        {displayMembers.map((member) => {
          const isSelected = selectedMember === member.id;
          return (
            <button
              key={member.id}
              onClick={() => setSelectedMember(isSelected ? null : member.id)}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: `2px solid ${isSelected ? '#d4ff00' : 'white'}`,
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.2s',
                padding: 0,
                background: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
              aria-label={`Membro: ${member.name}`}
              aria-pressed={isSelected}
            >
              {member.avatarUrl ? (
                <img
                  src={member.avatarUrl}
                  alt={member.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              ) : (
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#f5f5f5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon name="user" size={20} className="text-[#666]" />
                </div>
              )}
              {isSelected && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-4px',
                    right: '-4px',
                    width: '16px',
                    height: '16px',
                    backgroundColor: '#d4ff00',
                    borderRadius: '50%',
                    border: '2px solid white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon name="check" size={10} className="text-black" />
                </div>
              )}
            </button>
          );
        })}

        {/* Botão Adicionar */}
        <button
          onClick={handleAddMember}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            backgroundColor: 'white',
            border: '2px solid #e0e0e0',
            borderRadius: '50%',
            cursor: 'pointer',
            fontSize: '20px',
            color: '#666',
            transition: 'all 0.2s',
            padding: 0,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#f5f5f5';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'white';
          }}
          aria-label="Adicionar membro"
        >
          <Icon name="plus" size={20} className="text-[#666]" />
        </button>
      </div>

      {/* Botão Nova Transação */}
      <button
        onClick={handleNewTransaction}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '12px 28px',
          backgroundColor: '#d4ff00',
          border: 'none',
          borderRadius: '50px',
          fontSize: '15px',
          fontWeight: 600,
          color: '#000',
          cursor: 'pointer',
          transition: 'all 0.2s',
          whiteSpace: 'nowrap',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#c5f000';
          e.currentTarget.style.transform = 'translateY(-1px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#d4ff00';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        <Icon name="plus" size={20} className="text-black" />
        <span>Nova transação</span>
      </button>
    </nav>
  );
}
