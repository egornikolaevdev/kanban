import { Droppable, DroppableProvided } from 'react-beautiful-dnd';
import classes from './Column.module.css';
import TaskList from './components/TaskList/TaskList';

type ColumnProps = {
  id: string;
};
const Column = ({ id }: ColumnProps) => {
  return (
    <div>
      <div className={classes.container}>
        <Droppable droppableId={id}>
          {(provided: DroppableProvided) => (
            <div
              className={classes.taskList}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {id === '1' ? <TaskList /> : []}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </div>
  );
};

export default Column;
