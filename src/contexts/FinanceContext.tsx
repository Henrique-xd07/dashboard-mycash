import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import {
  Transaction,
  Goal,
  CreditCard,
  BankAccount,
  FamilyMember,
} from '../types';
import { mockData } from '../data/mockData';

interface DateRange {
  startDate: Date | null;
  endDate: Date | null;
}

export interface FinanceContextType {
  // Estado das entidades
  transactions: Transaction[];
  goals: Goal[];
  creditCards: CreditCard[];
  bankAccounts: BankAccount[];
  familyMembers: FamilyMember[];

  // Estados de filtros globais
  selectedMember: string | null;
  dateRange: DateRange;
  transactionType: 'all' | 'income' | 'expense';
  searchText: string;

  // Setters de filtros
  setSelectedMember: (memberId: string | null) => void;
  setDateRange: (range: DateRange) => void;
  setTransactionType: (type: 'all' | 'income' | 'expense') => void;
  setSearchText: (text: string) => void;

  // CRUD Transactions
  addTransaction: (transaction: Omit<Transaction, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateTransaction: (id: string, updates: Partial<Transaction>) => void;
  deleteTransaction: (id: string) => void;

  // CRUD Goals
  addGoal: (goal: Omit<Goal, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateGoal: (id: string, updates: Partial<Goal>) => void;
  deleteGoal: (id: string) => void;

  // CRUD CreditCards
  addCreditCard: (card: Omit<CreditCard, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateCreditCard: (id: string, updates: Partial<CreditCard>) => void;
  deleteCreditCard: (id: string) => void;

  // CRUD BankAccounts
  addBankAccount: (account: Omit<BankAccount, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateBankAccount: (id: string, updates: Partial<BankAccount>) => void;
  deleteBankAccount: (id: string) => void;

  // CRUD FamilyMembers
  addFamilyMember: (member: Omit<FamilyMember, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateFamilyMember: (id: string, updates: Partial<FamilyMember>) => void;
  deleteFamilyMember: (id: string) => void;

  // Funções de cálculo derivadas
  getFilteredTransactions: () => Transaction[];
  calculateTotalBalance: () => number;
  calculateIncomeForPeriod: () => number;
  calculateExpensesForPeriod: () => number;
  calculateExpensesByCategory: () => Array<{ category: string; total: number }>;
  calculateCategoryPercentage: (category: string) => number;
  calculateSavingsRate: () => number;
}

const FinanceContext = createContext<FinanceContextType | undefined>(undefined);

interface FinanceProviderProps {
  children: ReactNode;
}

export function FinanceProvider({ children }: FinanceProviderProps) {
  // Estado das entidades (inicializado com dados mock)
  const [transactions, setTransactions] = useState<Transaction[]>(mockData.transactions);
  const [goals, setGoals] = useState<Goal[]>(mockData.goals);
  const [creditCards, setCreditCards] = useState<CreditCard[]>(mockData.creditCards);
  const [bankAccounts, setBankAccounts] = useState<BankAccount[]>(mockData.bankAccounts);
  const [familyMembers, setFamilyMembers] = useState<FamilyMember[]>(mockData.familyMembers);

  // Estados de filtros globais
  const [selectedMember, setSelectedMember] = useState<string | null>(null);
  const [dateRange, setDateRange] = useState<DateRange>({
    startDate: null,
    endDate: null,
  });
  const [transactionType, setTransactionType] = useState<'all' | 'income' | 'expense'>('all');
  const [searchText, setSearchText] = useState<string>('');

  // Função auxiliar para gerar ID único
  const generateId = () => `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

  // CRUD Transactions
  const addTransaction = useCallback(
    (transaction: Omit<Transaction, 'id' | 'createdAt' | 'updatedAt'>) => {
      const now = new Date();
      const newTransaction: Transaction = {
        ...transaction,
        id: generateId(),
        createdAt: now,
        updatedAt: now,
      };
      setTransactions((prev) => [...prev, newTransaction]);
    },
    []
  );

  const updateTransaction = useCallback((id: string, updates: Partial<Transaction>) => {
    setTransactions((prev) =>
      prev.map((t) => (t.id === id ? { ...t, ...updates, updatedAt: new Date() } : t))
    );
  }, []);

  const deleteTransaction = useCallback((id: string) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  }, []);

  // CRUD Goals
  const addGoal = useCallback((goal: Omit<Goal, 'id' | 'createdAt' | 'updatedAt'>) => {
    const now = new Date();
    const newGoal: Goal = {
      ...goal,
      id: generateId(),
      createdAt: now,
      updatedAt: now,
    };
    setGoals((prev) => [...prev, newGoal]);
  }, []);

  const updateGoal = useCallback((id: string, updates: Partial<Goal>) => {
    setGoals((prev) =>
      prev.map((g) => (g.id === id ? { ...g, ...updates, updatedAt: new Date() } : g))
    );
  }, []);

  const deleteGoal = useCallback((id: string) => {
    setGoals((prev) => prev.filter((g) => g.id !== id));
  }, []);

  // CRUD CreditCards
  const addCreditCard = useCallback(
    (card: Omit<CreditCard, 'id' | 'createdAt' | 'updatedAt'>) => {
      const now = new Date();
      const newCard: CreditCard = {
        ...card,
        id: generateId(),
        createdAt: now,
        updatedAt: now,
      };
      setCreditCards((prev) => [...prev, newCard]);
    },
    []
  );

  const updateCreditCard = useCallback((id: string, updates: Partial<CreditCard>) => {
    setCreditCards((prev) =>
      prev.map((c) => (c.id === id ? { ...c, ...updates, updatedAt: new Date() } : c))
    );
  }, []);

  const deleteCreditCard = useCallback((id: string) => {
    setCreditCards((prev) => prev.filter((c) => c.id !== id));
  }, []);

  // CRUD BankAccounts
  const addBankAccount = useCallback(
    (account: Omit<BankAccount, 'id' | 'createdAt' | 'updatedAt'>) => {
      const now = new Date();
      const newAccount: BankAccount = {
        ...account,
        id: generateId(),
        createdAt: now,
        updatedAt: now,
      };
      setBankAccounts((prev) => [...prev, newAccount]);
    },
    []
  );

  const updateBankAccount = useCallback((id: string, updates: Partial<BankAccount>) => {
    setBankAccounts((prev) =>
      prev.map((a) => (a.id === id ? { ...a, ...updates, updatedAt: new Date() } : a))
    );
  }, []);

  const deleteBankAccount = useCallback((id: string) => {
    setBankAccounts((prev) => prev.filter((a) => a.id !== id));
  }, []);

  // CRUD FamilyMembers
  const addFamilyMember = useCallback(
    (member: Omit<FamilyMember, 'id' | 'createdAt' | 'updatedAt'>) => {
      const now = new Date();
      const newMember: FamilyMember = {
        ...member,
        id: generateId(),
        createdAt: now,
        updatedAt: now,
      };
      setFamilyMembers((prev) => [...prev, newMember]);
    },
    []
  );

  const updateFamilyMember = useCallback((id: string, updates: Partial<FamilyMember>) => {
    setFamilyMembers((prev) =>
      prev.map((m) => (m.id === id ? { ...m, ...updates, updatedAt: new Date() } : m))
    );
  }, []);

  const deleteFamilyMember = useCallback((id: string) => {
    setFamilyMembers((prev) => prev.filter((m) => m.id !== id));
  }, []);

  // Função auxiliar para verificar se uma data está no range
  const isDateInRange = (date: Date, startDate: Date | null, endDate: Date | null): boolean => {
    if (!startDate && !endDate) return true;
    if (startDate && !endDate) return date >= startDate;
    if (!startDate && endDate) return date <= endDate;
    if (startDate && endDate) {
      // Ajustar para comparar apenas a data, não a hora
      const dateOnly = new Date(date.getFullYear(), date.getMonth(), date.getDate());
      const startOnly = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
      const endOnly = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
      return dateOnly >= startOnly && dateOnly <= endOnly;
    }
    return true;
  };

  // Funções de cálculo derivadas
  const getFilteredTransactions = useCallback((): Transaction[] => {
    let filtered = [...transactions];

    // Filtro por membro
    if (selectedMember) {
      filtered = filtered.filter((t) => t.memberId === selectedMember);
    }

    // Filtro por tipo
    if (transactionType !== 'all') {
      filtered = filtered.filter((t) => t.type === transactionType);
    }

    // Filtro por período
    if (dateRange.startDate || dateRange.endDate) {
      filtered = filtered.filter((t) =>
        isDateInRange(t.date, dateRange.startDate, dateRange.endDate)
      );
    }

    // Filtro por busca textual
    if (searchText.trim()) {
      const searchLower = searchText.toLowerCase();
      filtered = filtered.filter(
        (t) =>
          t.description.toLowerCase().includes(searchLower) ||
          t.category.toLowerCase().includes(searchLower)
      );
    }

    return filtered;
  }, [transactions, selectedMember, transactionType, dateRange, searchText]);

  const calculateTotalBalance = useCallback((): number => {
    const accountsBalance = bankAccounts.reduce((sum, account) => sum + account.balance, 0);
    const cardsDebt = creditCards.reduce((sum, card) => sum + card.currentBill, 0);
    return accountsBalance - cardsDebt;
  }, [bankAccounts, creditCards]);

  const calculateIncomeForPeriod = useCallback((): number => {
    const filtered = getFilteredTransactions();
    return filtered
      .filter((t) => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0);
  }, [getFilteredTransactions]);

  const calculateExpensesForPeriod = useCallback((): number => {
    const filtered = getFilteredTransactions();
    return filtered
      .filter((t) => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0);
  }, [getFilteredTransactions]);

  const calculateExpensesByCategory = useCallback((): Array<{ category: string; total: number }> => {
    const filtered = getFilteredTransactions();
    const expenses = filtered.filter((t) => t.type === 'expense');
    const categoryMap = new Map<string, number>();

    expenses.forEach((expense) => {
      const current = categoryMap.get(expense.category) || 0;
      categoryMap.set(expense.category, current + expense.amount);
    });

    const result = Array.from(categoryMap.entries())
      .map(([category, total]) => ({ category, total }))
      .sort((a, b) => b.total - a.total);

    return result;
  }, [getFilteredTransactions]);

  const calculateCategoryPercentage = useCallback(
    (category: string): number => {
      const totalIncome = calculateIncomeForPeriod();
      if (totalIncome === 0) return 0;

      const filtered = getFilteredTransactions();
      const categoryExpenses = filtered
        .filter((t) => t.type === 'expense' && t.category === category)
        .reduce((sum, t) => sum + t.amount, 0);

      return (categoryExpenses / totalIncome) * 100;
    },
    [calculateIncomeForPeriod, getFilteredTransactions]
  );

  const calculateSavingsRate = useCallback((): number => {
    const income = calculateIncomeForPeriod();
    if (income === 0) return 0;

    const expenses = calculateExpensesForPeriod();
    return ((income - expenses) / income) * 100;
  }, [calculateIncomeForPeriod, calculateExpensesForPeriod]);

  const value: FinanceContextType = {
    // Estado
    transactions,
    goals,
    creditCards,
    bankAccounts,
    familyMembers,

    // Filtros
    selectedMember,
    dateRange,
    transactionType,
    searchText,

    // Setters de filtros
    setSelectedMember,
    setDateRange,
    setTransactionType,
    setSearchText,

    // CRUD Transactions
    addTransaction,
    updateTransaction,
    deleteTransaction,

    // CRUD Goals
    addGoal,
    updateGoal,
    deleteGoal,

    // CRUD CreditCards
    addCreditCard,
    updateCreditCard,
    deleteCreditCard,

    // CRUD BankAccounts
    addBankAccount,
    updateBankAccount,
    deleteBankAccount,

    // CRUD FamilyMembers
    addFamilyMember,
    updateFamilyMember,
    deleteFamilyMember,

    // Funções de cálculo
    getFilteredTransactions,
    calculateTotalBalance,
    calculateIncomeForPeriod,
    calculateExpensesForPeriod,
    calculateExpensesByCategory,
    calculateCategoryPercentage,
    calculateSavingsRate,
  };

  return <FinanceContext.Provider value={value}>{children}</FinanceContext.Provider>;
}

// Hook customizado
export function useFinance() {
  const context = useContext(FinanceContext);
  if (context === undefined) {
    throw new Error('useFinance must be used within a FinanceProvider');
  }
  return context;
}
