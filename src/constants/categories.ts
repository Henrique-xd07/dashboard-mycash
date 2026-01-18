// Categorias padrão brasileiras para receitas
export const INCOME_CATEGORIES = [
  'Salário',
  'Freelance',
  'Investimentos',
  'Aluguel Recebido',
  'Vendas',
  'Outros',
] as const;

// Categorias padrão brasileiras para despesas
export const EXPENSE_CATEGORIES = [
  'Aluguel',
  'Mercado',
  'Transporte',
  'Academia',
  'Financiamento',
  'Manutenção',
  'Lazer',
  'Saúde',
  'Educação',
  'Contas (Luz, Água, Internet)',
  'Vestuário',
  'Outros',
] as const;

export type IncomeCategory = typeof INCOME_CATEGORIES[number];
export type ExpenseCategory = typeof EXPENSE_CATEGORIES[number];
