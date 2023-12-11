import {
  DragDropContext,
  DropResult,
  OnDragEndResponder,
} from 'react-beautiful-dnd';
import classes from './Board.module.css';
import { AppContext } from '../../store/utils/context';
import ColumnList from './components/ColumnList/ColumnList';
import { IColumn } from '../../types/IColumn';

const columns: IColumn[] = [
  {
    id: '1',
    title: 'TO DO',
  },
  {
    id: '2',
    title: 'PROCESS',
  },
  {
    id: '3',
    title: 'CHECK',
  },
  {
    id: '4',
    title: 'DONE',
  },
];

const handleDragEnd: OnDragEndResponder = (result: DropResult) => {
  const { destination, source, draggableId } = result;
  if (source.droppableId === destination?.droppableId) {
    return;
  }
  if (!destination?.droppableId) {
    return;
  }
};
const Board = () => {
  return (
    <AppContext.Provider
      value={{
        columns,
      }}
    >
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className={classes.board}>
          <div className={classes.columns}>
            <ColumnList />
          </div>
        </div>
      </DragDropContext>
    </AppContext.Provider>
  );
};

export default Board;
