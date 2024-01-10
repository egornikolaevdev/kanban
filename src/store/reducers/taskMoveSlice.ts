import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ITask } from '../../types/ITask';
import { removeItemByID } from '../../utils/removeItem';

type TaskStatusType = {
  status: 'Q' | 'P' | 'C' | 'D';
  from: ITask[];
  to: ITask[];
  task: ITask;
};
type ColumnsStatesType = {
  toDo: ITask[];
  inProgress: ITask[];
  check: ITask[];
  done: ITask[];
};
const columnsStates: ColumnsStatesType = {
  toDo: [],
  inProgress: [],
  check: [],
  done: [],
};

export const taskMoveSlice = createSlice({
  name: 'taskMoveSlice',
  initialState: columnsStates,
  reducers: {
    changeStatus: (state, action: PayloadAction<TaskStatusType>) => {
      const newTask: ITask = {
        id: action.payload.task.id,
        status: action.payload.status,
        desc: action.payload.task.desc,
        title: action.payload.task.title,
      };
      console.log('task', action.payload.task);
      console.log('FROM', action.payload.from);
      console.log('TO', action.payload.to);
      action.payload.to.push(newTask);
      // state.toDo = removeItemByID(action.payload.task.id, action.payload.from);
    },
  },
});

export const { changeStatus } = taskMoveSlice.actions;
export default taskMoveSlice.reducer;
