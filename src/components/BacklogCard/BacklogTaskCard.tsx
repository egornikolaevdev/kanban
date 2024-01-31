import classes from './BacklogTaskCard.module.css';
import { Card } from '@consta/uikit/Card';
import { Text } from '@consta/uikit/Text';
import ContextMenuCustom from '../ContextMenuCustom/ContextMenuCustom';
import { ITask } from '../../types/ITask';
import PriorityIcon from '../../shared/components/PriorityIcon';
type BacklogCardProps = {
  task: ITask;
};

const BacklogTaskCard = ({ task }: BacklogCardProps) => {
  return (
    <>
      <Card
        className={classes.card}
        key={Number(task.id)}
        onClick={() => {
          console.log(`Task ${task.id}`);
        }}
      >
        <PriorityIcon taskPriority={task.priority} />
        <Text>{`${task.title}`}</Text>
        <ContextMenuCustom task={task} />
      </Card>
    </>
  );
};

export default BacklogTaskCard;
