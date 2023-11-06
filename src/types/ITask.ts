export interface ITask {
  id: number;
  title?: string;
  desc?: string;
  status?: 'Q' | 'P' | 'C' | 'D';
}
