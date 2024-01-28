import { ResponsesEmptyBox } from '@consta/uikit/ResponsesEmptyBox';
import { Card } from '@consta/uikit/Card';
import classes from './BacklogTaskList.module.css';
import { ITask } from '../../../../types/ITask';
import BacklogCard from '../../../../components/BacklogCard/BacklogCard';

type BacklogTaskListProps = {
  taskList: ITask[];
};
const BacklogTaskList = ({ taskList }: BacklogTaskListProps) => {
  return (
    <>
      {taskList.length > 0 ? (
        <Card className={classes.tasksContainer}>
          {taskList.map((item) => (
            <BacklogCard key={item.id} task={item} />
          ))}
        </Card>
      ) : (
        <div className={classes.empty}>
          <ResponsesEmptyBox size="l" actions={<></>} description={<></>} />
        </div>
      )}
    </>
  );
};

export default BacklogTaskList;
