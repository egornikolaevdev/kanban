import { ITask } from '../../types/ITask.ts';

export const removeItemByID = (id: number | string, array: ITask[]) => {
  return array.filter((item) => item.id !== id);
};
