import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ITask } from '../../types/ITask';
import { IColumn } from '../../types/IColumn';
import { removeItemByID } from '../../utils/removeItem';

const backlogList: IColumn[] = [
  {
    id: '99',
    title: 'BACKLOG',
    taskList: [
      {
        id: 10,
        title: 'Backlog task',
        status: 'B',
        priority: 'Low',
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
      newTask.id = 1000 - state.length;
      state[0].taskList.push(newTask);
    },
  },
});

export const { toBacklog, removeFromBacklog, addTaskToBacklog } =
  backlogSlice.actions;
export default backlogSlice.reducer;
