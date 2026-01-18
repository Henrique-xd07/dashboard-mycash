export type BankAccountType = 'checking' | 'savings' | 'investment';

export interface BankAccount {
  id: string;
  name: string;
  holderId: string;
  balance: number;
  type?: BankAccountType;
  createdAt: Date;
  updatedAt: Date;
}
