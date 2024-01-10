import { ITask } from './ITask';

export type IColumn = {
  title: string;
  id: string;
  taskList: ITask[];
};
