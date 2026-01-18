export type TransactionType = 'income' | 'expense';
export type TransactionStatus = 'completed' | 'pending';

export interface Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  description: string;
  category: string;
  date: Date;
  accountId: string;
  memberId: string | null;
  installments: number;
  status: TransactionStatus;
  isRecurring: boolean;
  isPaid: boolean;
  createdAt: Date;
  updatedAt: Date;
}
