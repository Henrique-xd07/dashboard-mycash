# Sequência de Prompts - mycash+

Esta é a sequência completa de prompts para implementação do projeto mycash+.

---

## 📋 PROMPT 0: Análise e Planejamento Inicial ✅

**Objetivo:** Analisar completamente o design do Figma, mapear componentes, tokens e estruturar a arquitetura do projeto.

**Entregáveis:**
- [x] Mapeamento de todos os componentes visuais (Dashboard, Cartões, Transações, Perfil)
- [x] Identificação de variables semânticas e primitivas
- [x] Análise da estrutura de navegação (sidebar expandida/colapsada, header mobile)
- [x] Resumo da arquitetura proposta

**Arquivos:**
- DOCUMENTATION.md (análise completa)
- SEQUENCIA_PROMPTS.md (este arquivo)

---

## 📦 PROMPT 1: Estrutura Base do Projeto

**Objetivo:** Inicializar o projeto com todas as dependências e configurações básicas.

**Tarefas:**
- [ ] Inicializar projeto Vite + React + TypeScript
- [ ] Instalar e configurar Tailwind CSS
- [ ] Configurar React Router para rotas
- [ ] Setup inicial do Supabase (client)
- [ ] Criar estrutura de pastas base
- [ ] Configurar ESLint/Prettier (se necessário)
- [ ] Criar arquivo .env.example
- [ ] Configurar tsconfig.json otimizado

**Arquivos a criar:**
- `package.json`
- `vite.config.ts`
- `tailwind.config.js`
- `tsconfig.json`
- `.env.example`
- `src/main.tsx`
- `src/App.tsx`
- Estrutura básica de pastas

**Build:** Deve passar com sucesso

---

## 🎨 PROMPT 2: Design System e Tokens

**Objetivo:** Criar o sistema de design tokens baseado nas variáveis do Figma.

**Tarefas:**
- [ ] Acessar Figma MCP e extrair todas as variáveis (semânticas e primitivas)
- [ ] Criar arquivo `src/styles/tokens.css` com todas as variáveis CSS
- [ ] Configurar Tailwind para usar os tokens
- [ ] Mapear cores (semânticas → primitivas → conversões)
- [ ] Mapear espaçamentos
- [ ] Mapear tipografia (font-family, sizes, weights)
- [ ] Mapear border-radius e shadows
- [ ] Documentar todas as conversões realizadas

**Arquivos a criar/modificar:**
- `src/styles/tokens.css`
- `src/styles/variables.css`
- `src/styles/globals.css`
- `tailwind.config.js` (atualizar)
- `DOCUMENTATION.md` (seção de tokens atualizada)

**Hierarquia obrigatória:** Semântica → Primitiva → Conversão (NUNCA hardcoded)

**Build:** Deve passar com sucesso

---

## 🧭 PROMPT 3: Layout Desktop (Sidebar + Header)

**Objetivo:** Implementar o layout desktop com sidebar expansível e header.

**Tarefas:**
- [ ] Criar componente `Sidebar` (estados expandido/colapsado)
- [ ] Criar componente `SidebarItem` (reutilizável)
- [ ] Criar componente `SidebarProfile` (perfil do usuário)
- [ ] Criar componente `Header` (desktop)
- [ ] Criar componente `SearchInput`
- [ ] Criar componente `DateRangePicker`
- [ ] Criar componente `Layout` (orquestrador)
- [ ] Criar hook `useSidebar` para gerenciar estado
- [ ] Implementar transições suaves entre estados
- [ ] Garantir que sidebar empurra conteúdo (não sobrepõe)

**Arquivos a criar:**
- `src/components/layout/Sidebar/Sidebar.tsx`
- `src/components/layout/Sidebar/SidebarItem.tsx`
- `src/components/layout/Sidebar/SidebarProfile.tsx`
- `src/components/layout/Header/Header.tsx`
- `src/components/layout/Header/SearchInput.tsx`
- `src/components/layout/Header/DateRangePicker.tsx`
- `src/components/layout/Layout.tsx`
- `src/hooks/useSidebar.ts`

**Responsividade:**
- Sidebar apenas renderiza em ≥1280px
- Header Desktop apenas renderiza em ≥1280px

**Build:** Deve passar com sucesso

---

## 📊 PROMPT 4: Dashboard - Componentes de Resumo Financeiro

**Objetivo:** Implementar os cards de resumo financeiro do dashboard.

**Tarefas:**
- [ ] Criar componente `ExpenseSummaryCard` (card com progresso circular)
- [ ] Criar componente `FinancialOverviewCard` (cards de saldo, receitas, despesas)
- [ ] Criar componente `Progress` (barra circular reutilizável)
- [ ] Criar grid responsivo para os cards de despesas (4 cards)
- [ ] Criar grid responsivo para cards de visão geral (3 cards)
- [ ] Implementar responsividade (mobile: 1 coluna, tablet: 2, desktop: 3-4)
- [ ] Integrar dados mockados inicialmente

**Arquivos a criar:**
- `src/components/ui/Progress/Progress.tsx`
- `src/components/dashboard/ExpenseSummaryCard/ExpenseSummaryCard.tsx`
- `src/components/dashboard/FinancialOverviewCard/FinancialOverviewCard.tsx`
- `src/pages/Dashboard.tsx` (estrutura básica)

**Layout responsivo:**
- Mobile: Cards empilhados (1 coluna)
- Tablet: 2 colunas quando possível
- Desktop: 3-4 colunas conforme design

**Build:** Deve passar com sucesso

---

## 💳 PROMPT 5: Dashboard - Cards de Despesas e Contas

**Objetivo:** Implementar a seção de cards e contas vinculadas.

**Tarefas:**
- [ ] Criar componente `AccountCard` (card de conta/cartão)
- [ ] Criar lista de contas com grid responsivo
- [ ] Implementar ações (adicionar conta, navegar para detalhes)
- [ ] Integrar dados mockados
- [ ] Estilizar conforme design (logos dos bancos, valores, vencimentos)

**Arquivos a criar:**
- `src/components/dashboard/AccountCard/AccountCard.tsx`
- `src/components/dashboard/CardsAndAccountsList/CardsAndAccountsList.tsx`

**Build:** Deve passar com sucesso

---

## 📈 PROMPT 6: Dashboard - Gráfico de Fluxo Financeiro

**Objetivo:** Implementar o gráfico de fluxo financeiro.

**Tarefas:**
- [ ] Instalar biblioteca de gráficos (Recharts ou Chart.js)
- [ ] Criar componente `FinancialFlowChart`
- [ ] Implementar gráfico de área com duas séries (Receitas e Despesas)
- [ ] Configurar eixo Y (R$ 0 a R$ 17.500, incrementos de R$ 2.500)
- [ ] Configurar eixo X (meses: JAN a DEZ)
- [ ] Implementar legendas (Receitas verde, Despesas vermelho)
- [ ] Responsividade do gráfico

**Arquivos a criar:**
- `src/components/dashboard/FinancialFlowChart/FinancialFlowChart.tsx`
- Dependência: `recharts` ou `chart.js`

**Build:** Deve passar com sucesso

---

## 📅 PROMPT 7: Dashboard - Próximas Despesas

**Objetivo:** Implementar a seção de próximas despesas.

**Tarefas:**
- [ ] Criar componente `UpcomingExpenseItem` (item da lista)
- [ ] Criar componente `UpcomingExpensesList` (lista completa)
- [ ] Implementar ação de adicionar despesa (ícone +)
- [ ] Implementar ação de marcar como pago (check verde)
- [ ] Layout responsivo

**Arquivos a criar:**
- `src/components/dashboard/UpcomingExpenseItem/UpcomingExpenseItem.tsx`
- `src/components/dashboard/UpcomingExpensesList/UpcomingExpensesList.tsx`

**Build:** Deve passar com sucesso

---

## 📋 PROMPT 8: Dashboard - Extrato Detalhado

**Objetivo:** Implementar a tabela de extrato detalhado com busca e paginação.

**Tarefas:**
- [ ] Criar componente `Table` (genérico e reutilizável)
- [ ] Criar componente `DetailedStatementTable` (específico para extrato)
- [ ] Criar componente `Pagination`
- [ ] Implementar barra de busca ("Buscar lançamentos")
- [ ] Implementar dropdown de filtro (tipo de transação)
- [ ] Implementar paginação funcional
- [ ] Integrar dados mockados

**Arquivos a criar:**
- `src/components/ui/Table/Table.tsx`
- `src/components/dashboard/DetailedStatementTable/DetailedStatementTable.tsx`
- `src/components/ui/Pagination/Pagination.tsx`

**Build:** Deve passar com sucesso

---

## 📱 PROMPT 9: Layout Mobile (Header Mobile + Drawer)

**Objetivo:** Implementar o layout mobile com header e drawer de navegação.

**Tarefas:**
- [ ] Criar componente `HeaderMobile` (<1280px)
- [ ] Criar componente `HeaderMobileDrawer` (drawer de navegação)
- [ ] Implementar overlay escuro quando drawer aberto
- [ ] Implementar animação slide-in da esquerda
- [ ] Implementar lógica condicional de renderização:
  - Desktop: Sidebar + Header Desktop
  - Mobile/Tablet: Header Mobile (sem Sidebar)
- [ ] Garantir que drawer fecha ao clicar fora ou em item de navegação
- [ ] Criar hook `useMediaQuery` para detectar breakpoints

**Arquivos a criar:**
- `src/components/layout/Header/HeaderMobile.tsx`
- `src/components/layout/Header/HeaderMobileDrawer.tsx`
- `src/hooks/useMediaQuery.ts`
- Modificar `src/components/layout/Layout.tsx`

**Regras críticas:**
- NUNCA renderizar Sidebar + Header Mobile juntos
- Header Mobile apenas <1280px
- Sidebar apenas ≥1280px

**Build:** Deve passar com sucesso

---

## 💳 PROMPT 10: Página Cartões

**Objetivo:** Implementar a página completa de gerenciamento de cartões.

**Tarefas:**
- [ ] Criar página `Cards.tsx`
- [ ] Criar layout da página (header, lista de cartões)
- [ ] Implementar lista de cartões com ações (editar, excluir)
- [ ] Implementar formulário de adicionar/editar cartão
- [ ] Implementar modal ou drawer para formulário
- [ ] Integrar com dados (mock inicialmente)

**Arquivos a criar:**
- `src/pages/Cards.tsx`
- `src/components/cards/CardList/CardList.tsx`
- `src/components/cards/CardForm/CardForm.tsx`

**Build:** Deve passar com sucesso

---

## 💸 PROMPT 11: Página Transações

**Objetivo:** Implementar a página completa de transações.

**Tarefas:**
- [ ] Criar página `Transactions.tsx`
- [ ] Criar layout da página
- [ ] Implementar filtros avançados (data, categoria, tipo, conta)
- [ ] Implementar lista de transações (reutilizar Table)
- [ ] Implementar formulário de nova transação (modal/drawer)
- [ ] Implementar ações (editar, excluir, duplicar)
- [ ] Integrar com dados (mock inicialmente)

**Arquivos a criar:**
- `src/pages/Transactions.tsx`
- `src/components/transactions/TransactionList/TransactionList.tsx`
- `src/components/transactions/TransactionForm/TransactionForm.tsx`
- `src/components/transactions/TransactionFilters/TransactionFilters.tsx`

**Build:** Deve passar com sucesso

---

## 👤 PROMPT 12: Página Perfil

**Objetivo:** Implementar a página de perfil do usuário.

**Tarefas:**
- [ ] Criar página `Profile.tsx`
- [ ] Criar layout da página
- [ ] Implementar seção de informações do usuário
- [ ] Implementar seção de configurações
- [ ] Implementar botão de logout
- [ ] Implementar upload de avatar (opcional)
- [ ] Integrar com dados do usuário

**Arquivos a criar:**
- `src/pages/Profile.tsx`
- `src/components/profile/UserInfo/UserInfo.tsx`
- `src/components/profile/Settings/Settings.tsx`

**Build:** Deve passar com sucesso

---

## 🔌 PROMPT 13: Integração com Supabase

**Objetivo:** Conectar o frontend com o backend Supabase.

**Tarefas:**
- [ ] Configurar client Supabase
- [ ] Criar schema do banco de dados (tabelas: users, transactions, accounts, cards)
- [ ] Criar hooks para queries (useTransactions, useAccounts, useUser)
- [ ] Implementar autenticação (login, logout, registro)
- [ ] Implementar CRUD de transações
- [ ] Implementar CRUD de contas/cartões
- [ ] Substituir dados mockados por queries reais
- [ ] Implementar tratamento de erros

**Arquivos a criar/modificar:**
- `src/services/api/supabase.ts` (configuração)
- `src/hooks/useTransactions.ts`
- `src/hooks/useAccounts.ts`
- `src/hooks/useAuth.ts`
- `src/services/transactions.ts`
- `src/services/accounts.ts`
- Schema SQL do Supabase

**Build:** Deve passar com sucesso

---

## ✅ PROMPT 14: Responsividade e Testes

**Objetivo:** Garantir que a aplicação funcione perfeitamente em todos os breakpoints.

**Tarefas:**
- [ ] Testar em 375px (mobile pequeno)
- [ ] Testar em 768px (tablet)
- [ ] Testar em 1280px (desktop)
- [ ] Testar em 1920px (wide/4K)
- [ ] Corrigir problemas de overflow horizontal
- [ ] Ajustar tipografia responsiva
- [ ] Ajustar espaçamentos por breakpoint
- [ ] Validar touch targets (mínimo 44x44px)
- [ ] Validar inputs no mobile (altura mínima 48px, font-size 16px)
- [ ] Testar navegação em todos os dispositivos

**Build:** Deve passar com sucesso

---

## 🎨 PROMPT 15: Polimento e Otimizações

**Objetivo:** Finalizar o projeto com otimizações de performance, acessibilidade e UX.

**Tarefas:**
- [ ] Implementar lazy loading de componentes pesados
- [ ] Adicionar memoization onde necessário (React.memo, useMemo, useCallback)
- [ ] Implementar ARIA labels em componentes interativos
- [ ] Garantir navegação por teclado
- [ ] Adicionar loading states e skeletons
- [ ] Adicionar tratamento de erros visuais
- [ ] Otimizar imagens e assets
- [ ] Adicionar animações finais (transições suaves)
- [ ] Corrigir bugs finais
- [ ] Atualizar documentação completa

**Build:** Deve passar com sucesso

---

## 📝 Notas Gerais

### **Regras Obrigatórias:**
1. ✅ Build obrigatório antes de cada commit
2. ✅ Hierarquia de variáveis: Semântica → Primitiva → Conversão (NUNCA hardcoded)
3. ✅ Layout fluido: width 100%, max-width para limitação
4. ✅ Mobile-first: estilos base para mobile
5. ✅ Sidebar apenas desktop (≥1280px), Header Mobile apenas mobile/tablet (<1280px)

### **Fluxo de Execução:**
1. Reler rules + documentação
2. Consultar Figma (layout + variáveis)
3. Executar prompt
4. `npm run build` (até sucesso)
5. Informar e aguardar aprovação
6. Documentar + Commit
7. Avançar para próximo prompt

### **Formato de Resposta (após cada prompt):**
- ✅ PROMPT [N]: [Nome] — CONCLUÍDO
- 📚 PRÉ-EXECUÇÃO (checklist)
- 📦 IMPLEMENTADO (lista)
- 🎨 TOKENS (utilizados e conversões)
- 📁 ARQUIVOS (criados/modificados)
- 🔨 BUILD STATUS
- 💾 COMMIT
- 🤔 PRÓXIMOS PASSOS

---

**Status:** PROMPT 0 ✅ CONCLUÍDO | Próximo: PROMPT 1
