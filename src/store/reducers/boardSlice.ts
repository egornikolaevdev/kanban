import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ITask } from '../../types/ITask';
import { removeItemByID } from '../../shared/utils/removeItem.ts';
import { IColumn } from '../../types/IColumn';

type TaskStatusType = {
  status: 'Q' | 'P' | 'C' | 'D' | 'B';
  fromColumnId: string;
  toColumnId?: string;
  task: ITask;
};

const columns: IColumn[] = [
  {
    title: 'QUEUE',
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

const TASK_STATUSES_MAP = {
  Q: '0',
  P: '1',
  C: '2',
  D: '3',
  B: '4',
};

export const boardSlice = createSlice({
  name: 'taskMoveSlice',
  initialState: columns,
  reducers: {
    setColumnsData: (state, action: PayloadAction<ITask[]>) => {
      state[0].taskList = action.payload;
    },
    changeStatus: (state, action: PayloadAction<TaskStatusType>) => {
      const toColumn = Number(action.payload.toColumnId);
      const fromColumn = Number(action.payload.fromColumnId);
      // const task = action.payload.task;
      const taskStatus = action.payload.status;

      const newTask: ITask = action.payload.task
      newTask.status = taskStatus

      state[toColumn].taskList.push(newTask);
      state[fromColumn].taskList = removeItemByID(
        action.payload.task.id,
        state[fromColumn].taskList
      );
    },
    removeTask: (state, action: PayloadAction<ITask>) => {
      const fromColumn = Number(TASK_STATUSES_MAP[action.payload.status]);
      state[fromColumn].taskList = removeItemByID(
        action.payload.id,
        state[fromColumn].taskList
      );
    },
    showDetails: () => {

    },
    addTaskToBoard: (state, action: PayloadAction<ITask>) => {
      const toColumn = Number(TASK_STATUSES_MAP[action.payload.status]);
      const newTask: ITask = action.payload;
      state[toColumn].taskList.push(newTask);
    },
  },
});

export const {
  changeStatus,
  setColumnsData,
  removeTask,
  showDetails,
  addTaskToBoard,
} = boardSlice.actions;
export default boardSlice.reducer;
