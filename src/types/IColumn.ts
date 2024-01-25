import { ITask } from './ITask';

export interface IColumn {
  title: string;
  id: string;
  taskList: ITask[];
}
