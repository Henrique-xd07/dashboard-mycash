export interface FamilyMember {
  id: string;
  name: string;
  role: string; // Ex: "Pai", "Mãe", "Filho", "Filha", "Avô", "Avó", etc.
  avatarUrl: string;
  email?: string;
  monthlyIncome?: number; // Renda mensal estimada (opcional)
  createdAt: Date;
  updatedAt: Date;
}
