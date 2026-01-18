export type CreditCardTheme = 'black' | 'lime' | 'white';

export interface CreditCard {
  id: string;
  name: string;
  holderId: string;
  closingDay: number; // 1-31
  dueDay: number; // 1-31
  limit: number;
  currentBill: number;
  theme: CreditCardTheme;
  lastDigits?: string; // Últimos 4 dígitos (opcional)
  createdAt: Date;
  updatedAt: Date;
}
