import { Droppable, DroppableProvided } from 'react-beautiful-dnd';
import classes from './Column.module.css';
import TaskList from './components/TaskList/TaskList';
import { ITask } from '../../types/ITask';

type ColumnProps = {
  id: string;
  taskList: ITask[];
};

const Column = ({ id, taskList }: ColumnProps) => {
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
              {<TaskList taskList={taskList} />}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </div>
  );
};

export default Column;
