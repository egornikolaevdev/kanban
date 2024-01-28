import { ITask } from '../types/ITask';

export const removeItemByID = (id: number | string, array: ITask[]) => {
  return array.filter((item) => item.id !== id);
};
