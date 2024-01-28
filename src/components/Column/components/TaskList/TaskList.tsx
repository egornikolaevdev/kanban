import TaskCard from '../../../TaskCard/TaskCard';
import classes from './TaskList.module.css';
import { ITask } from '../../../../types/ITask';

type TaskListProps = {
  taskList: ITask[];
};

const TaskList = ({ taskList }: TaskListProps) => {
  return (
    <div className={classes.list}>
      {taskList?.map((item) => <TaskCard key={item.id} task={item} />)}
    </div>
  );
};

export default TaskList;
