import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ITask } from '../../types/ITask';
import { IColumn } from '../../types/IColumn';
import { removeItemByID } from '../../shared/utils/removeItem.ts';

const backlogList: IColumn[] = [
  {
    id: '99',
    title: 'BACKLOG',
    taskList: [
      {
        id: 6,
        title: 'Backlog task',
        status: 'B',
        priority: 'Low',
        executor: {
          id: 1,
          name: 'Egor',
          surname: 'Nikolaev',
          fullName: 'Nikolaev Egor Aleksandrovich',
          position: 'Middle frontend developer',
        },
      },
    ],
  },
];

export const backlogSlice = createSlice({
  name: 'backlogSlice',
  initialState: backlogList,
  reducers: {
    toBacklog: (state, action: PayloadAction<ITask>) => {
      state[0].taskList.push(action.payload);
    },
    removeFromBacklog: (state, action: PayloadAction<ITask>) => {
      state[0].taskList = removeItemByID(action.payload.id, state[0].taskList);
    },
    addTaskToBacklog: (state, action: PayloadAction<ITask>) => {
      const newTask = action.payload;
      state[0].taskList.push(newTask);
    },
  },
});

export const { toBacklog, removeFromBacklog, addTaskToBacklog } =
  backlogSlice.actions;
export default backlogSlice.reducer;
