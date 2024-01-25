import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ITask } from '../../types/ITask';

type GetTaskListResponseType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const transformToDoResponse = (
  response: GetTaskListResponseType[]
): ITask[] => {
  return response.map((task) => ({
    id: task.id,
    title: task.title,
    desc: task.title,
    status: 'Q',
    executor: {
      id: 1,
      name: 'Egor',
      surname: 'Nikolaev',
      fullName: 'Nikolaev Egor Aleksandrovich',
      position: 'Middle frontend developer',
    },
    priority: 'Low',
  }));
};
export const toDoApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (build) => ({
    getToDoList: build.query<ITask[], void>({
      query: () => ({
        url: 'https://jsonplaceholder.typicode.com/todos',
        method: 'GET',
      }),
      transformResponse: (response: GetTaskListResponseType[]) => {
        return transformToDoResponse(response);
      },
    }),
  }),
});
