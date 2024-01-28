import classes from './BacklogCard.module.css';
import { Card } from '@consta/uikit/Card';
import { Text } from '@consta/uikit/Text';
import ContextMenuCustom from '../ContextMenuCustom/ContextMenuCustom';
import { ITask } from '../../types/ITask';

type BacklogCardProps = {
  task: ITask;
};

const BacklogCard = ({ task }: BacklogCardProps) => {
  return (
    <>
      <Card className={classes.card} key={Number(task.id)}>
        <Text>{`${task.title} | ${task.priority} priority`}</Text>
        <ContextMenuCustom task={task} />
      </Card>
    </>
  );
};

export default BacklogCard;
