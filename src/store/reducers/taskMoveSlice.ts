import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ITask } from '../../types/ITask';
import { removeItemByID } from '../../utils/removeItem';
import { IColumn } from '../../types/IColumn';

type TaskStatusType = {
  status: 'Q' | 'P' | 'C' | 'D';
  fromColumnId: string;
  toColumnId: string;
  task: ITask;
};
const columns: IColumn[] = [
  {
    title: 'TODO',
    id: '0',
    taskList: [],
  },
  {
    title: 'PROCESS',
    id: '1',
    taskList: [],
  },
  {
    title: 'CHECK',
    id: '2',
    taskList: [],
  },
  {
    title: 'DONE',
    id: '3',
    taskList: [],
  },
];

export const taskMoveSlice = createSlice({
  name: 'taskMoveSlice',
  initialState: columns,
  reducers: {
    setColumnsData: (state, action) => {
      state[0].taskList = action.payload;
    },
    changeStatus: (state, action: PayloadAction<TaskStatusType>) => {
      const toColumn = Number(action.payload.toColumnId);
      const fromColumn = Number(action.payload.fromColumnId);
      const task = action.payload.task;
      const taskStatus = action.payload.status;

      const newTask: ITask = {
        id: task.id,
        status: taskStatus,
        desc: task.desc,
        title: task.title,
      };

      state[toColumn].taskList.push(newTask);
      state[fromColumn].taskList = removeItemByID(
        action.payload.task.id,
        state[fromColumn].taskList
      );
    },
  },
});

export const { changeStatus, setColumnsData } = taskMoveSlice.actions;
export default taskMoveSlice.reducer;
