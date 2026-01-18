# mycash+ - Gestão Financeira Familiar

Sistema completo de gestão financeira familiar desenvolvido com React, TypeScript, Tailwind CSS e Supabase.

## 🚀 Tecnologias

- **React 18** com TypeScript
- **Vite** - Build tool
- **Tailwind CSS** - Estilização
- **React Router** - Navegação
- **Supabase** - Backend (integração futura)
- **Recharts** - Gráficos
- **date-fns** - Manipulação de datas

## 📁 Estrutura do Projeto

```
src/
├── components/     # Componentes React organizados por domínio
│   ├── layout/    # Sidebar, Header, Layout
│   ├── ui/        # Componentes reutilizáveis (Button, Card, etc.)
│   ├── dashboard/ # Componentes específicos do dashboard
│   ├── cards/     # Componentes relacionados a cartões
│   └── transactions/ # Componentes relacionados a transações
├── contexts/      # Context providers (FinanceProvider)
├── hooks/         # Custom hooks
├── constants/     # Constantes do sistema (rotas, categorias)
├── types/         # Tipos TypeScript (5 entidades principais)
├── utils/         # Funções utilitárias
├── services/      # Integração com APIs (Supabase)
├── styles/        # Estilos globais e tokens
└── pages/         # Páginas principais (Dashboard, Cards, etc.)
```

## 🎨 Design System

O projeto utiliza um sistema de design tokens baseado no Figma:

- **Variáveis Semânticas:** `--color-primary`, `--spacing-container`, etc.
- **Variáveis Primitivas:** `--gray-900`, `--lime-500`, `--spacing-md`, etc.
- **Hierarquia:** Semântica → Primitiva → Conversão (NUNCA hardcoded)

## 📊 Entidades Principais

1. **Transaction** - Transações financeiras (receitas e despesas)
2. **Goal** - Objetivos financeiros
3. **CreditCard** - Cartões de crédito
4. **BankAccount** - Contas bancárias
5. **FamilyMember** - Membros da família

## 🛠️ Instalação

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

## 📱 Responsividade

- **Mobile (base):** < 768px
- **Tablet:** ≥ 768px e < 1280px
- **Desktop:** ≥ 1280px e < 1920px
- **Wide/4K:** ≥ 1920px

## 📋 Próximos Passos

Consulte `SEQUENCIA_PROMPTS.md` para ver a sequência completa de implementação.

## 📝 Notas Importantes

- ⚠️ **NÃO usar localStorage/sessionStorage** - Todo estado é gerenciado via React Context (em memória)
- ✅ Layout fluido obrigatório (width: 100%, max-width para limitação)
- ✅ Mobile-first approach
- ✅ Sidebar apenas em ≥1280px, Header Mobile apenas em <1024px

## 📄 Licença

Proprietário - mycash+
