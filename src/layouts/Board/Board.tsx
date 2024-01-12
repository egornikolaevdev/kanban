import {
  DragDropContext,
  DropResult,
  OnDragEndResponder,
} from 'react-beautiful-dnd';
import classes from './Board.module.css';
import ColumnList from './components/ColumnList/ColumnList';
import {
  changeStatus,
  setColumnsData,
} from '../../store/reducers/taskMoveSlice';
import { useDispatch } from 'react-redux';
import { findItemByID } from '../../utils/findItem';
import { toDoApi } from '../../store/services/ToDoApi';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const { useGetToDoListQuery } = toDoApi;

const Board = () => {
  const dispatch = useDispatch();
  const columns = useSelector((state: RootState) => state.taskReducer);
  const { data } = useGetToDoListQuery();

  useEffect(() => {
    if (data) {
      const mockData = data?.filter((item) => item.id <= 5);
      dispatch(setColumnsData(mockData));
    }
  }, [data, dispatch]);

  const handleDragEnd: OnDragEndResponder = (result: DropResult) => {
    const { destination, source, draggableId } = result;
    const task = findItemByID(Number(draggableId), [
      ...columns[Number(source.droppableId)].taskList,
    ]);
    if (source.droppableId === destination?.droppableId) {
      return;
    }
    if (!destination?.droppableId) {
      return;
    }

    //Переписать покрасивее
    if (destination.droppableId === '0') {
      dispatch(
        changeStatus({
          fromColumnId: source.droppableId,
          status: 'Q',
          toColumnId: destination.droppableId,
          task: task,
        })
      );
    } else if (destination.droppableId === '1') {
      dispatch(
        changeStatus({
          fromColumnId: source.droppableId,
          status: 'P',
          toColumnId: destination.droppableId,
          task: task,
        })
      );
    } else if (destination.droppableId === '2') {
      dispatch(
        changeStatus({
          fromColumnId: source.droppableId,
          status: 'C',
          toColumnId: destination.droppableId,
          task: task,
        })
      );
    } else {
      dispatch(
        changeStatus({
          fromColumnId: source.droppableId,
          status: 'D',
          toColumnId: destination.droppableId,
          task: task,
        })
      );
    }
  };
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className={classes.board}>
        <div className={classes.columns}>
          <ColumnList />
        </div>
      </div>
    </DragDropContext>
  );
};

export default Board;
