# mycash+ — Documentação

## Progresso
- [x] PROMPT 0: Análise e Planejamento Inicial
- [ ] PROMPT 1: Estrutura Base e Configuração
- [ ] PROMPT 2: Sistema de Layout e Navegação Desktop
- [ ] PROMPT 3: Sistema de Layout e Navegação Mobile
- [ ] PROMPT 4: Context Global e Gerenciamento de Estado
- [ ] PROMPT 5: Cards de Resumo Financeiro
- [ ] PROMPT 6: Header do Dashboard com Controles
- [ ] PROMPT 7: Carrossel de Gastos por Categoria
- [ ] PROMPT 8: Gráfico de Fluxo Financeiro
- [ ] PROMPT 9: Widget de Cartões de Crédito
- [ ] PROMPT 10: Widget de Próximas Despesas
- [ ] PROMPT 11: Tabela de Transações Detalhada
- [ ] PROMPT 12: Modal de Nova Transação
- [ ] PROMPT 13: Modal de Adicionar Membro
- [ ] PROMPT 14: Modal de Adicionar Cartão
- [ ] PROMPT 15: Modal de Detalhes do Cartão
- [ ] PROMPT 16: Modal de Filtros Mobile
- [ ] PROMPT 17: View Completa de Cartões
- [ ] PROMPT 18: View Completa de Transações
- [ ] PROMPT 19: View de Perfil - Aba Informações
- [ ] PROMPT 20: View de Perfil - Aba Configurações
- [ ] PROMPT 21: Animações e Transições Globais
- [ ] PROMPT 22: Formatação e Utilitários
- [ ] PROMPT 23: Responsividade e Ajustes Finais
- [ ] PROMPT 24: Testes e Validação Final
- [ ] PROMPT FINAL: Revisão e Entrega

---

## PROMPT 0: Análise e Planejamento Inicial

**Status:** ✅ EM PROGRESSO | **Data:** 2025-01-17 | **Build:** ⏳ Pendente

### 📋 Análise do Design Figma

#### Link do Design
- **Figma URL:** https://www.figma.com/design/05PreQIR2liYAZdH4qx0Xy/Workshop---Do-figma-MCP-ao-Cursor-AI-v.2--Community-?node-id=2006-327&t=Cg92s0RojCdyVCoO-4
- **File Key:** `05PreQIR2liYAZdH4qx0Xy`
- **Node ID:** `2006-327` (Dashboard Principal)

---

## 🎨 ANÁLISE DE COMPONENTES VISUAIS

### 1. **DASHBOARD - Página Principal**

#### 1.1. Header (Top Bar)
- **Logo:** "Mycash+" (posição: esquerda)
- **Campo de Busca:** Input "Pesquisar" com ícone de lupa
- **Ícone de Filtro:** Três linhas horizontais com círculos
- **Seletor de Período:** Botão com calendário "01 Jan - 31 Jan 2026"
- **Avatares de Usuários:** 3 avatares circulares (indicando múltiplos usuários/conta compartilhada)
- **Botão Principal:** "+ Nova transação" (verde brilhante, CTA principal)

#### 1.2. Sidebar (Navegação Lateral)
- **Estado Atual:** Expandida (visível, com texto)
- **Ícone de Colapso:** Seta apontando para esquerda (permite colapsar)
- **Itens de Navegação:**
  - "Home" (ativo - destaque amarelo, ícone casa)
  - "Cartões" (inativo, ícone de cartão)
- **Perfil do Usuário (Bottom):**
  - Avatar circular pequeno
  - Nome: "Henrique Lima"
  - Email: "henriquelima7ph@gmail.com"

#### 1.3. Área de Conteúdo Principal

##### **A. Cards de Resumo de Despesas (Top Row)**
4 cards horizontais com barras de progresso circular:
- **Aluguel:** 26%, R$ 4.000,00
- **Mercado:** 15%, R$ 1.200,00
- **Academia:** 5%, R$ 300,00
- **Financiamento:** 26%, R$ 4.000,00

##### **B. Cards de Visão Geral Financeira (Middle Row Left)**
3 cards maiores:
- **"Saldo total":** Fundo escuro, ícone cifrão, valor: "R$ 2.000,00"
- **"Receitas":** Fundo branco, seta verde para baixo, valor: "R$ 12.000,00"
- **"Despesas":** Fundo branco, seta vermelha para cima, valor: "R$ 10.000,00"

##### **C. Cards & Contas (Middle Row Right)**
Seção listando contas/cartões vinculados:
- **Nubank:** Logo, R$ 4.000,00, "Vence dia 21", "**** 5400"
- **Inter:** Logo, R$ 2.300,00, "Vence dia 21", "**** 5400"
- **Picpay:** Logo, R$ 1.500,00, "Vence dia 21", "**** 5400"
- **Ações:** Ícone "+" e seta direita no header

##### **D. Fluxo Financeiro (Chart Section)**
- **Título:** "Fluxo financeiro" com ícone de gráfico de linhas
- **Legenda:** "Receitas" (verde), "Despesas" (vermelho)
- **Gráfico:** Área de linhas mostrando Receitas (área amarelo-verde) e Despesas (área vermelha) de JAN a DEZ
- **Eixo Y:** R$ 0,00 a R$ 17.500 (incrementos de R$ 2.500)

##### **E. Próximas Despesas (Right Side)**
- **Título:** "Próximas despesas" com ícone de cartão
- **Ícone "+"** no header (adicionar nova despesa)
- **Lista:** 5 itens idênticos de "Conta de Luz"
  - Valor: R$ 154,00
  - Vencimento: "Vence dia 21"
  - Cartão: "Crédito Nubank **** 58971"
  - Ícone de check verde (pago/confirmado)

##### **F. Extrato Detalhado (Bottom Section)**
- **Título:** "Extrato detalhado" com ícone de lista
- **Barra de Busca/Filtro:**
  - Input: "Buscar lançamentos"
  - Dropdown: "Despesas" (tipo de transação)
- **Tabela com colunas:**
  - Membros (avatares)
  - Datas: "17/01/2026"
  - Descrição: "Conta de água", "Conta de Luz", "Passeio no parque"
  - Categoria: "Manutenção", "Manutenção", "Lazer"
  - Conta/Cartão: "Conta corrente", "Conta corrente", "Cartão XP"
  - Parcelas: "-", "-", "1/1"
  - Valor: "R$ 100,00", "R$ 250,00", "R$ 120,00"
- **Paginação:** "Mostrando 1 a 5 de 17" com setas e números (1, 2, 3, 4, 5)

---

## 🎨 DESIGN SYSTEM - TOKENS E VARIÁVEIS

### **Cores (Inferidas do Design)**

#### **Semânticas (a confirmar no Figma):**
- `--color-primary`: Verde brilhante (botão "+ Nova transação")
- `--color-secondary`: Amarelo (item ativo na sidebar)
- `--color-success`: Verde (receitas, checkmarks)
- `--color-error`: Vermelho (despesas)
- `--color-background-primary`: Branco (fundo principal)
- `--color-background-secondary`: Cinza claro (fundo sidebar, alguns cards)
- `--color-background-dark`: Preto/cinza escuro (card "Saldo total")
- `--color-text-primary`: Preto/cinza escuro (texto principal)
- `--color-text-secondary`: Cinza médio (labels, subtítulos)
- `--color-border`: Cinza claro (bordas de cards, inputs)

#### **Primitivas (a confirmar no Figma):**
- Família de cinzas: `--gray-50`, `--gray-100`, `--gray-200`, `--gray-300`, `--gray-400`, `--gray-500`, `--gray-600`, `--gray-700`, `--gray-800`, `--gray-900`
- Família de verdes: `--green-50` a `--green-900`
- Família de amarelos: `--yellow-50` a `--yellow-900`
- Família de vermelhos: `--red-50` a `--red-900`
- Família de limões (lime): `--lime-50` a `--lime-900`

### **Espaçamento (Inferidos)**

#### **Semânticas (a confirmar no Figma):**
- `--spacing-container`: Padding do conteúdo principal
- `--spacing-card`: Espaçamento interno dos cards
- `--spacing-section`: Espaço entre seções

#### **Primitivas (a confirmar no Figma):**
- `--spacing-xs`: 4px
- `--spacing-sm`: 8px
- `--spacing-md`: 16px
- `--spacing-lg`: 24px
- `--spacing-xl`: 32px
- `--spacing-2xl`: 48px
- `--spacing-3xl`: 64px

### **Tipografia (Inferida)**

#### **Font Family:**
- `--font-family-primary`: Sans-serif (confirmar fonte específica no Figma)

#### **Font Sizes:**
- `--font-size-xs`: 12px
- `--font-size-sm`: 14px
- `--font-size-base`: 16px
- `--font-size-lg`: 18px
- `--font-size-xl`: 20px
- `--font-size-2xl`: 24px
- `--font-size-3xl`: 30px
- `--font-size-4xl`: 36px

#### **Font Weights:**
- `--font-weight-regular`: 400
- `--font-weight-medium`: 500
- `--font-weight-semibold`: 600
- `--font-weight-bold`: 700

### **Shape (Border Radius)**
- `--border-radius-sm`: 4px
- `--border-radius-md`: 8px
- `--border-radius-lg`: 12px
- `--border-radius-xl`: 16px
- `--border-radius-full`: 50% (avatares)

### **Shadows**
- `--shadow-sm`: Sombra sutil nos cards
- `--shadow-md`: Sombra média
- `--shadow-lg`: Sombra grande

---

## 🧭 ESTRUTURA DE NAVEGAÇÃO

### **Desktop (≥1280px):**

#### **Sidebar (Lateral Esquerda)**
- **Estado Expandido:**
  - Largura: ~240-280px (a confirmar)
  - Exibe ícone + texto dos itens
  - Perfil do usuário visível no bottom
  
- **Estado Colapsado:**
  - Largura: ~64-80px (a confirmar)
  - Apenas ícones visíveis
  - Perfil do usuário oculto ou apenas avatar

- **Transição:** Smooth animation entre estados
- **Comportamento:** Empurra conteúdo (não sobrepõe)

#### **Header Desktop (Top Bar)**
- **Sempre visível** quando sidebar está presente
- **Não renderiza** no mobile/tablet

### **Mobile/Tablet (<1024px):**

#### **Header Mobile**
- **Sempre visível** no topo
- **Conteúdo:**
  - Ícone de menu hamburger (abre drawer)
  - Logo "Mycash+"
  - Botão "+ Nova transação"
  - Ações secundárias (busca, filtro)

#### **Drawer de Navegação**
- **Overlay** escuro quando aberto
- **Slide-in** da esquerda
- **Conteúdo:**
  - Itens de navegação (Home, Cartões, Transações, Perfil)
  - Perfil do usuário no bottom
  - Botão de fechar

#### **Sidebar**
- **NÃO renderiza** (condicional: apenas ≥1280px)

### **Transições entre Seções:**
- Navegação suave (sem reload completo)
- Rotas principais: `/dashboard`, `/cards`, `/transactions`, `/profile`, `/goals` (futuro)
- Rotas são gerenciadas pelo React Router

---

## 📊 ENTIDADES PRINCIPAIS DO SISTEMA

O sistema mycash+ é baseado em 5 entidades principais que representam todo o modelo de dados:

### **1. Transaction (Transação)**
Entidade central do sistema que representa movimentações financeiras (receitas e despesas).

**Campos principais:**
- `id`: Identificador único
- `type`: Tipo da transação ("income" | "expense")
- `amount`: Valor monetário
- `description`: Descrição da transação
- `category`: Categoria (string)
- `date`: Data da transação
- `accountId`: ID da conta/cartão vinculado
- `memberId`: ID do membro responsável (ou null para família geral)
- `installments`: Número de parcelas (1 = à vista)
- `status`: Status da transação ("completed" | "pending")
- `isRecurring`: Se é despesa recorrente (boolean)
- `isPaid`: Se está paga (boolean)

### **2. Goal (Objetivo/Meta)**
Representa objetivos financeiros que a família deseja alcançar.

**Campos principais:**
- `id`: Identificador único
- `title`: Título do objetivo
- `description`: Descrição detalhada
- `targetAmount`: Valor alvo a ser alcançado
- `currentAmount`: Valor atual acumulado
- `deadline`: Data limite para alcançar
- `memberId`: ID do membro responsável (ou null para objetivo familiar)
- `status`: Status ("active" | "completed" | "cancelled")
- `createdAt`: Data de criação

### **3. CreditCard (Cartão de Crédito)**
Representa cartões de crédito vinculados à família.

**Campos principais:**
- `id`: Identificador único
- `name`: Nome do cartão/banco
- `holderId`: ID do membro titular
- `closingDay`: Dia de fechamento (1-31)
- `dueDay`: Dia de vencimento (1-31)
- `limit`: Limite total do cartão
- `currentBill`: Fatura atual
- `theme`: Tema visual ("black" | "lime" | "white")
- `lastDigits`: Últimos 4 dígitos (opcional)

### **4. BankAccount (Conta Bancária)**
Representa contas bancárias vinculadas à família.

**Campos principais:**
- `id`: Identificador único
- `name`: Nome da conta/banco
- `holderId`: ID do membro titular
- `balance`: Saldo atual da conta
- `type`: Tipo de conta (opcional)

### **5. FamilyMember (Membro da Família)**
Representa os membros da família que utilizam o sistema.

**Campos principais:**
- `id`: Identificador único
- `name`: Nome completo
- `role`: Função na família (ex: "Pai", "Mãe", "Filho")
- `avatarUrl`: URL do avatar (ou URL padrão)
- `email`: Email do membro (opcional)
- `monthlyIncome`: Renda mensal estimada (opcional)

---

## 🏗️ ARQUITETURA PROPOSTA

### **Estrutura de Pastas**

```
mycash-plus/
├── public/
│   └── assets/
│       ├── images/
│       └── icons/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Sidebar/
│   │   │   │   ├── Sidebar.tsx
│   │   │   │   ├── SidebarItem.tsx
│   │   │   │   ├── SidebarProfile.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Header/
│   │   │   │   ├── Header.tsx (desktop)
│   │   │   │   ├── HeaderMobile.tsx
│   │   │   │   ├── HeaderMobileDrawer.tsx
│   │   │   │   ├── SearchInput.tsx
│   │   │   │   ├── DateRangePicker.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Layout.tsx (orquestrador)
│   │   │   └── index.ts
│   │   ├── ui/
│   │   │   ├── Button/
│   │   │   ├── Card/
│   │   │   ├── Input/
│   │   │   ├── Avatar/
│   │   │   ├── Badge/
│   │   │   ├── Progress/
│   │   │   ├── Table/
│   │   │   ├── Pagination/
│   │   │   └── index.ts
│   │   ├── dashboard/
│   │   │   ├── ExpenseSummaryCard/
│   │   │   ├── FinancialOverviewCard/
│   │   │   ├── AccountCard/
│   │   │   ├── FinancialFlowChart/
│   │   │   ├── UpcomingExpenseItem/
│   │   │   ├── DetailedStatementTable/
│   │   │   └── index.ts
│   │   ├── cards/
│   │   ├── transactions/
│   │   └── profile/
│   ├── pages/
│   │   ├── Dashboard.tsx
│   │   ├── Cards.tsx
│   │   ├── Transactions.tsx
│   │   └── Profile.tsx
│   ├── contexts/
│   │   ├── FinanceContext.tsx
│   │   ├── FinanceProvider.tsx
│   │   └── index.ts
│   ├── hooks/
│   │   ├── useSidebar.ts
│   │   ├── useMediaQuery.ts
│   │   ├── useAuth.ts
│   │   └── useFinance.ts
│   ├── constants/
│   │   ├── categories.ts
│   │   ├── routes.ts
│   │   └── index.ts
│   ├── services/
│   │   ├── api/
│   │   │   └── supabase.ts
│   │   └── transactions.ts
│   ├── styles/
│   │   ├── tokens.css (design tokens)
│   │   ├── globals.css
│   │   └── variables.css
│   ├── types/
│   │   ├── transaction.ts
│   │   ├── goal.ts
│   │   ├── creditCard.ts
│   │   ├── bankAccount.ts
│   │   ├── familyMember.ts
│   │   └── index.ts
│   ├── utils/
│   │   ├── formatCurrency.ts
│   │   ├── formatDate.ts
│   │   └── constants.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── DOCUMENTATION.md
```

### **Hierarquia de Componentes**

```
App
└── Layout
    ├── Sidebar (desktop ≥1280px)
    │   ├── SidebarItem[]
    │   └── SidebarProfile
    ├── Header (desktop) OU HeaderMobile (<1280px)
    │   ├── SearchInput
    │   ├── FilterIcon
    │   ├── DateRangePicker
    │   ├── UserAvatars
    │   └── NewTransactionButton
    └── MainContent (conteúdo principal - fluido)
        └── [CurrentPage]
            ├── Dashboard
            │   ├── ExpenseSummaryGrid (4 cards)
            │   ├── FinancialOverviewCards (3 cards)
            │   ├── CardsAndAccountsList
            │   ├── FinancialFlowChart
            │   ├── UpcomingExpensesList
            │   └── DetailedStatementTable
            ├── Cards
            ├── Transactions
            └── Profile
```

### **Estratégia de Componentização**

#### **1. Atomic Design (Parcial)**
- **Atoms:** Button, Input, Avatar, Icon, Badge
- **Molecules:** SearchInput, DateRangePicker, SidebarItem
- **Organisms:** Sidebar, Header, FinancialOverviewCards
- **Templates:** Layout, Dashboard layout
- **Pages:** Dashboard, Cards, Transactions, Profile

#### **2. Separação de Responsabilidades**
- **Componentes de UI:** Apenas apresentação (props-based)
- **Páginas:** Composição de componentes, sem lógica
- **Hooks:** Lógica de negócio e estado
- **Services:** Integração com API (Supabase)

#### **3. Theming e Estilos**
- **CSS Variables (Design Tokens):** Todas as cores, espaçamentos, tipografia
- **Tailwind CSS:** Utility classes baseadas nos tokens
- **Hierarquia de tokens:** Semântica → Primitiva → Conversão
- **NUNCA valores hardcoded**

#### **4. Responsividade**
- **Mobile-First:** Estilos base para mobile
- **Breakpoints Principais:**
  - **Mobile (base):** < 768px
  - **Tablet:** ≥ 768px e < 1280px
  - **Desktop:** ≥ 1280px e < 1920px
  - **Wide/4K:** ≥ 1920px
- **Breakpoints Específicos:**
  - **Sidebar:** Renderiza apenas ≥1280px (conforme rules)
  - **Header Mobile:** Renderiza apenas <1024px (conforme prompts)
  - **Outros componentes Desktop:** ≥1024px (conforme prompts)
- **Layout condicional:** Sidebar e Header Mobile nunca coexistem

#### **5. Data Flow**
- **Estado Global:** React Context (FinanceProvider) - **CRÍTICO: NÃO usar localStorage/sessionStorage**
- **Estado em Memória:** Todo estado via React state (useState, useReducer) apenas durante sessão
- **Estado Local:** useState para UI state (sidebar collapsed, drawer open, modais)
- **Funções de Cálculo:** Derivadas do estado global com filtros aplicados automaticamente
- **Data Fetching:** Hooks customizados (futura integração com Supabase)

---

## 📋 SEQUÊNCIA DE PROMPTS

A sequência completa de prompts está documentada detalhadamente em `SEQUENCIA_PROMPTS.md`.

**Resumo da Sequência:**
- **PROMPT 0:** Análise e Planejamento Inicial ✅
- **PROMPT 1:** Estrutura Base e Configuração
- **PROMPT 2:** Sistema de Layout e Navegação Desktop
- **PROMPT 3:** Sistema de Layout e Navegação Mobile
- **PROMPT 4:** Context Global e Gerenciamento de Estado
- **PROMPT 5:** Cards de Resumo Financeiro
- **PROMPT 6:** Header do Dashboard com Controles
- **PROMPT 7:** Carrossel de Gastos por Categoria
- **PROMPT 8:** Gráfico de Fluxo Financeiro
- **PROMPT 9:** Widget de Cartões de Crédito
- **PROMPT 10:** Widget de Próximas Despesas
- **PROMPT 11:** Tabela de Transações Detalhada
- **PROMPT 12:** Modal de Nova Transação
- **PROMPT 13:** Modal de Adicionar Membro
- **PROMPT 14:** Modal de Adicionar Cartão
- **PROMPT 15:** Modal de Detalhes do Cartão
- **PROMPT 16:** Modal de Filtros Mobile
- **PROMPT 17:** View Completa de Cartões
- **PROMPT 18:** View Completa de Transações
- **PROMPT 19:** View de Perfil - Aba Informações
- **PROMPT 20:** View de Perfil - Aba Configurações
- **PROMPT 21:** Animações e Transições Globais
- **PROMPT 22:** Formatação e Utilitários
- **PROMPT 23:** Responsividade e Ajustes Finais
- **PROMPT 24:** Testes e Validação Final
- **PROMPT FINAL:** Revisão e Entrega

Para detalhes completos de cada prompt, consulte `SEQUENCIA_PROMPTS.md`.

---

## ✅ PRÓXIMOS PASSOS

**PROMPT 0: CONCLUÍDO ✅**

A análise completa do design foi realizada com base na descrição da imagem e no link do Figma fornecido.

**Aguardando:**
- Confirmação do mapeamento de tokens (precisa acessar Figma para validar variáveis)
- Aprovação da arquitetura proposta
- Início da implementação (PROMPT 1)

**Aviso:** Algumas informações de tokens foram inferidas do design visual. É necessário acessar o Figma MCP para validar as variáveis exatas (semânticas e primitivas) e atualizar este documento antes de prosseguir com PROMPT 2.

---

## 📝 NOTAS IMPORTANTES

1. **Hierarquia de Variáveis OBRIGATÓRIA:**
   - 1º: Semântica (--color-primary)
   - 2º: Primitiva (--gray-900)
   - 3º: Conversão inteligente (#E5E5E5 → --gray-200)
   - 4º: NUNCA hardcoded

2. **Layout Fluido:**
   - Width 100% em containers principais
   - Max-width para limitação (não width fixo)
   - Mobile-first approach

3. **Sidebar:**
   - Desktop apenas: ≥1280px
   - Estados: Expanded / Collapsed
   - NÃO renderiza no mobile/tablet

4. **Header Mobile:**
   - Mobile/Tablet apenas: <1024px (conforme prompts)
   - Drawer para navegação (MenuDropdown)
   - NÃO renderiza no desktop
   - **Nota:** Sidebar usa breakpoint ≥1280px (conforme rules), mas Header Mobile usa <1024px (conforme prompts)

5. **Build obrigatório antes de cada commit**
