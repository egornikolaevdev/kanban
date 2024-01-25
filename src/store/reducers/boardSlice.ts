import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ITask } from '../../types/ITask';
import { removeItemByID } from '../../utils/removeItem';
import { IColumn } from '../../types/IColumn';

type TaskStatusType = {
  status: 'Q' | 'P' | 'C' | 'D' | 'B';
  fromColumnId: string;
  toColumnId?: string;
  task: ITask;
};
type TaskStatusesMapType = {
  Q: string;
  P: string;
  C: string;
  D: string;
  B: string;
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

const TASK_STATUSES_MAP: TaskStatusesMapType = {
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
      const task = action.payload.task;
      const taskStatus = action.payload.status;

      const newTask: ITask = {
        id: task.id,
        status: taskStatus,
        desc: task.desc,
        title: task.title,
        priority: task.priority,
        storyPoints: task.storyPoints,
        startDate: task.startDate,
        endDate: task.endDate,
        executor: task.executor,
      };

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
    showDetails: (state, action: PayloadAction<ITask>) => {
      console.log(
        action.payload.id,
        action.payload.title,
        action.payload.desc,
        action.payload.status,
        action.payload.priority,
        action.payload.storyPoints,
        action.payload.startDate,
        action.payload.endDate,
        action.payload.executor?.fullName,
        action.payload.executor?.position
      );
    },
    addTaskToBoard: (state, action: PayloadAction<ITask>) => {
      const toColumn = Number(TASK_STATUSES_MAP[action.payload.status]);
      const newTask: ITask = {
        id:
          [
            ...state[0].taskList,
            ...state[1].taskList,
            ...state[2].taskList,
            ...state[3].taskList,
          ].length + 1,
        title: action.payload.title,
        desc: action.payload.desc,
        status: action.payload.status,
        priority: action.payload.priority,
        storyPoints: action.payload.storyPoints,
        startDate: action.payload.startDate,
        endDate: action.payload.endDate,
        executor: action.payload.executor,
      };
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
