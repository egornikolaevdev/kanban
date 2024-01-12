import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { toDoApi } from './services/ToDoApi';
import taskReducer from './reducers/taskMoveSlice';

const rootReducer = combineReducers({
  [toDoApi.reducerPath]: toDoApi.reducer,
  taskReducer: taskReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(toDoApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
