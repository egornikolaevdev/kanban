import classes from './BacklogCard.module.css';
import { Card } from '@consta/uikit/Card';
import { Text } from '@consta/uikit/Text';
import ContextMenuCustom from '../ContextMenuCustom/ContextMenuCustom';
import { ITask } from '../../types/ITask';

type BacklogCardProps = {
  taskList: ITask[];
};

const BacklogCard = ({ taskList }: BacklogCardProps) => {
  return (
    <>
      {taskList.map((task, index) => (
        <Card className={classes.card} key={index + Number(task.id)}>
          <Text>{`${task.id} | ${task.title} | ${task.desc}`}</Text>
          <ContextMenuCustom task={task} />
        </Card>
      ))}
    </>
  );
};

export default BacklogCard;
