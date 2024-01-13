export interface ITask {
  id: number | string;
  title?: string;
  desc?: string;
  status: 'Q' | 'P' | 'C' | 'D' | 'B';
}
