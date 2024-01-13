import {
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
} from 'react-beautiful-dnd';
import classes from './TaskCard.module.css';
import { Text } from '@consta/uikit/Text';
import { Card } from '@consta/uikit/Card';
import ContextMenuCustom from '../ContextMenuCustom/ContextMenuCustom';
import { ITask } from '../../types/ITask';

type TaskCardProps = {
  id: number;
  title: string;
  description: string;
  taskObj: ITask;
};

const TaskCard = ({ id, title, description, taskObj }: TaskCardProps) => {
  return (
    <Draggable draggableId={`${id}`} key={id} index={id}>
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
          <div className={classes.taskID}>
            <Text size="s">{id}</Text>
            <ContextMenuCustom task={taskObj} />
          </div>
          <Text className={classes.taskTitle} size="s">
            {title}
          </Text>
          <Text className={classes.taskDesc} size="s">
            {description}
          </Text>
        </Card>
      )}
    </Draggable>
  );
};

export default TaskCard;
