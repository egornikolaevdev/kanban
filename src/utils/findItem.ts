import { ITask } from '../types/ITask';

const findItemByID = (id: number | string, array: ITask[]) => {
  return array.find((item) => item.id === id) as ITask;
};
