import {
  DragDropContext,
  DropResult,
  OnDragEndResponder,
} from 'react-beautiful-dnd';
import classes from './Board.module.css';
import { Button } from '@consta/uikit/Button';
import { IconAdd } from '@consta/icons/IconAdd';
import { IconFolderClosed } from '@consta/icons/IconFolderClosed';
import { cnMixSpace } from '@consta/uikit/MixSpace';
import { AppContext } from '../../store/utils/context';
import ColumnList from './components/ColumnList/ColumnList';
import { IColumn } from '../../types/IColumn';
import AddTaskModal from '../../shared/components/AddTaskModal';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleAddTask = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        columns,
        isModalOpen,
        setIsModalOpen,
        closeModal,
      }}
    >
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className={classes.board}>
          <div className={classes.buttons_container}>
            <Button
              className={cnMixSpace({ m: 's' })}
              label="Backlog"
              view="secondary"
              size="s"
              iconRight={IconFolderClosed}
              onClick={() => navigate('/backlog')}
            />
            <Button
              className={cnMixSpace({ m: 's' })}
              label="Create task"
              view="primary"
              size="s"
              iconRight={IconAdd}
              onClick={() => handleAddTask()}
            />
          </div>
          <div className={classes.columns}>
            <ColumnList />
          </div>
        </div>
      </DragDropContext>
      <AddTaskModal />
    </AppContext.Provider>
  );
};

export default Board;
