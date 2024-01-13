import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ITask } from '../../types/ITask';

const backlogList: ITask[] = [];

export const backlogSlice = createSlice({
  name: 'backlogSlice',
  initialState: backlogList,
  reducers: {
    toBacklog: (state, action: PayloadAction<ITask>) => {
      state.push(action.payload);
    },
    removeFromBacklog: () => {},
    addTaskToBacklog: (state, action: PayloadAction<ITask>) => {
      const newTask: ITask = {
        id: `${state.length + 1}Y`,
        title: action.payload.title,
        status: action.payload.status,
        desc: action.payload.desc,
      };
      state.push(newTask);
    },
  },
});

export const { toBacklog, removeFromBacklog, addTaskToBacklog } =
  backlogSlice.actions;
export default backlogSlice.reducer;
