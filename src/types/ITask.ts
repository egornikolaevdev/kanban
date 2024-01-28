import { IEmployee } from './IEmployee';

export interface ITask {
  id: number | string;
  title: string;
  desc?: string;
  status: 'Q' | 'P' | 'C' | 'D' | 'B';
  executor?: IEmployee;
  storyPoints?: number;
  priority: 'Low' | 'Medium' | 'High';
  startDate?: Date;
  endDate?: Date;
}
