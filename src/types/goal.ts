export type GoalStatus = 'active' | 'completed' | 'cancelled';

export interface Goal {
  id: string;
  title: string;
  description: string;
  targetAmount: number;
  currentAmount: number;
  deadline: Date;
  memberId: string | null;
  status: GoalStatus;
  createdAt: Date;
  updatedAt: Date;
}
