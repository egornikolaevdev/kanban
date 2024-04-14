import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ITask } from '../../types/ITask';
import { IColumn } from '../../types/IColumn';
import { removeItemByID } from '../../shared/utils/removeItem.ts';

const backlogList: IColumn[] = [
  {
    id: '99',
    title: 'BACKLOG',
    taskList: [],
  },
];

export const backlogSlice = createSlice({
  name: 'backlogSlice',
  initialState: backlogList,
  reducers: {
    removeFromBacklog: (state, action: PayloadAction<ITask>) => {
      state[0].taskList = removeItemByID(action.payload.id, state[0].taskList);
    },
    addTaskToBacklog: (state, action: PayloadAction<ITask>) => {
      const newTask = { ...action.payload };
      newTask.status = 'B';
      state[0].taskList.push(newTask);
    },
  },
});

export const { removeFromBacklog, addTaskToBacklog } = backlogSlice.actions;
export default backlogSlice.reducer;
