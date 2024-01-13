import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { toDoApi } from './services/ToDoApi';
import boardReducer from './reducers/boardSlice';
import backlogReducer from './reducers/backlogSlice';

const rootReducer = combineReducers({
  [toDoApi.reducerPath]: toDoApi.reducer,
  boardReducer: boardReducer,
  backlogReducer: backlogReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(toDoApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
