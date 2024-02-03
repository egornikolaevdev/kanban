import { ITask } from '../../types/ITask.ts';

export const findItemByID = (id: number | string, array: ITask[]) => {
  return array.find((item) => item.id === id) as ITask;
};
