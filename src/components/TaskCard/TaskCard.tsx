import {
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
} from 'react-beautiful-dnd';
import classes from './TaskCard.module.css';
import { Text } from '@consta/uikit/Text';
import { Button } from '@consta/uikit/Button';
import { Card } from '@consta/uikit/Card';
import { ContextMenu } from '@consta/uikit/ContextMenu';
import { IconKebab } from '@consta/icons/IconKebab';
import { useRef, useState } from 'react';

type TaskCardProps = {
  id: number;
  title: string;
  description: string;
};
type MenuItem = {
  label: string;
  event: () => void;
};

const toBacklog = (taskId: number) => {
  console.log(`to Backlog task${taskId}`);
};
const deleteTask = (taskId: number) => {
  console.log(`DeleteTask${taskId}`);
};

const TaskCard = ({ id, title, description }: TaskCardProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const menuItems: MenuItem[] = [
    {
      label: 'Вернуть в бэклог',
      event: () => toBacklog(id),
    },
    {
      label: 'Удалить',
      event: () => deleteTask(id),
    },
  ];
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
            <Button
              onlyIcon
              iconLeft={IconKebab}
              size="s"
              view="clear"
              ref={ref}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
            <ContextMenu
              isOpen={isMenuOpen}
              items={menuItems}
              getItemLabel={(item) => item.label}
              getItemOnClick={(item) => item.event}
              anchorRef={ref}
              size="xs"
              onClickOutside={() => setIsMenuOpen(false)}
            />
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
