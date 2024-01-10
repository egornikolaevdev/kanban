import {
  DragDropContext,
  DropResult,
  OnDragEndResponder,
} from 'react-beautiful-dnd';
import classes from './Board.module.css';
import { AppContext } from '../../store/utils/context';
import ColumnList from './components/ColumnList/ColumnList';
import { IColumn } from '../../types/IColumn';
import { changeStatus } from '../../store/reducers/taskMoveSlice';
import { useDispatch, useSelector } from 'react-redux';
import { findItemByID } from '../../utils/findItem';
import { toDoApi } from '../../store/services/ToDoApi';
import { RootState } from '../../store';
import { useEffect, useState } from 'react';
import { ITask } from '../../types/ITask';
import { removeItemByID } from '../../utils/removeItem';

const { useGetToDoListQuery } = toDoApi;

const Board = () => {
  const { data } = useGetToDoListQuery();
  const mockData = data?.filter((item) => item.id <= 5);
  const dispatch = useDispatch();
  const [toDoList, setToDoList] = useState<ITask[]>([]);

  console.log('list', toDoList);

  const columns: IColumn[] = [
    {
      id: '0',
      title: 'TO DO',
      list: toDoList,
    },
    {
      id: '1',
      title: 'PROCESS',
      list: [],
    },
    {
      id: '2',
      title: 'CHECK',
      list: [],
    },
    {
      id: '3',
      title: 'DONE',
      list: [],
    },
  ];

  console.log('mock', mockData);
  const handleDragEnd: OnDragEndResponder = (result: DropResult) => {
    if (mockData) {
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

      if (source.droppableId == '0') {
        setToDoList(removeItemByID(draggableId, columns[0].taskList));
      }

      //Переписать покрасивее
      if (destination.droppableId === '0') {
        console.log('To do', destination.droppableId);
      } else if (destination.droppableId === '1') {
        dispatch(
          changeStatus({
            from: columns[Number(source.droppableId)].taskList,
            status: 'P',
            to: columns[Number(destination.droppableId)].taskList,
            task: task,
          })
        );
      } else if (destination.droppableId === '2') {
        console.log('Check', destination.droppableId);
      } else console.log('Done', destination.droppableId);
    }
  };
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
