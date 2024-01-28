import { ITask } from '../types/ITask';

export const findItemByID = (id: number | string, array: ITask[]) => {
  return array.find((item) => item.id === id) as ITask;
};
