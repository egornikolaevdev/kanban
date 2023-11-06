import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ITask } from '../../types/ITask';

type GetToDoListResponseType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const transformToDoResponse = (
  response: GetToDoListResponseType[]
): ITask[] => {
  return response.map((task) => ({
    id: task.id,
    title: task.title,
    desc: task.title,
    status: 'Q',
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
      transformResponse: (response: GetToDoListResponseType[]) => {
        return transformToDoResponse(response);
      },
    }),
  }),
});
