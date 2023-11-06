import TaskCard from '../../../TaskCard/TaskCard';
import classes from './TaskList.module.css';
import { toDoApi } from '../../../../store/services/ToDoApi';

const { useGetToDoListQuery } = toDoApi;

const TaskList = () => {
  const { data } = useGetToDoListQuery();
  const mockTasks = data?.filter((item) => item.id <= 15);

  return (
    <div className={classes.list}>
      {mockTasks?.map((item) => (
        <TaskCard
          id={item.id}
          title={item.title || 'Title'}
          description={item.desc || ''}
        />
      ))}
    </div>
  );
};

export default TaskList;
