import {
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
} from 'react-beautiful-dnd';
import classes from './TaskCard.module.css';
import { Text } from '@consta/uikit/Text';
import { Card } from '@consta/uikit/Card';
import { Avatar } from '@consta/uikit/Avatar';
import ContextMenuCustom from '../ContextMenuCustom/ContextMenuCustom';
import { ITask } from '../../types/ITask';

type TaskCardProps = {
  task: ITask;
};

const TaskCard = ({ task }: TaskCardProps) => {
  const getPriorityImage = (priority: 'Low' | 'Medium' | 'High') => {
    const lowPriorityImg = (
      <img src="public/assets/low32.png" className={classes.priorityImage} />
    );
    const mediumPriorityImg = (
      <img src="public/assets/medium32.png" className={classes.priorityImage} />
    );
    const highPriorityImg = (
      <img src="public/assets/high32.png" className={classes.priorityImage} />
    );

    if (priority === 'Low') return lowPriorityImg;
    else if (priority === 'Medium') return mediumPriorityImg;
    else return highPriorityImg;
  };
  return (
    <>
      <Draggable
        draggableId={`${task.id}`}
        key={task.id}
        index={Number(task.id)}
      >
        {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
          <Card
            form="square"
            border
            verticalSpace="s"
            horizontalSpace="s"
            className={classes.taskCard}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <div className={classes.taskInfo}>
              <div className={classes.taskTitle}>
                <Text size="s">{`${task.title} ${task.id}`}</Text>
              </div>
              <ContextMenuCustom task={task} />
            </div>
            <div className={classes.bottomContainer}>
              {getPriorityImage(task.priority)}
              <Avatar size="m" name={task.executor?.fullName} />
            </div>
          </Card>
        )}
      </Draggable>
    </>
  );
};

export default TaskCard;
