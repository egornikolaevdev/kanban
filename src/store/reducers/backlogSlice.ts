import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ITask } from '../../types/ITask';
import { IColumn } from '../../types/IColumn';

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
    removeFromBacklog: (state, action) => {},
    addTaskToBacklog: (state, action: PayloadAction<ITask>) => {
      // const newTask: ITask = {
      //   id: 1000 - state.length,
      //   title: action.payload.title,
      //   status: action.payload.status,
      //   desc: action.payload.desc,
      //   priority: action.payload.priority,
      //   startDate: action.payload.startDate,
      //   endDate: action.payload.endDate,
      //   executor: action.payload.executor,
      //   storyPoints: action.payload.storyPoints,
      // };
      const newTask = action.payload;
      newTask.id = 1000 - state.length;
      state[0].taskList.push(newTask);
    },
  },
});

export const { toBacklog, removeFromBacklog, addTaskToBacklog } =
  backlogSlice.actions;
export default backlogSlice.reducer;
