import { Button } from '@consta/uikit/Button';
import { ContextMenu } from '@consta/uikit/ContextMenu';
import { IconKebab } from '@consta/icons/IconKebab';
import {useContext, useRef, useState} from 'react';
import classes from './ContextMenuCustom.module.css';
import { useDispatch } from 'react-redux';
import { removeTask } from '../../../store/reducers/boardSlice.ts';
import { ITask } from '../../../types/ITask.ts';
import { toBacklog } from '../../../store/reducers/backlogSlice.ts';
import {AppContext, AppContextType} from "../../../store/utils/context.tsx";

type MenuItemType = {
  label: string;
  event: () => void;
};
type ContextMenuProps = {
  task: ITask;
};

const ContextMenuCustom = ({ task }: ContextMenuProps) => {
  const dispatch = useDispatch();
  const {currentPage} = useContext(AppContext) as AppContextType
  const ref = useRef<HTMLButtonElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const openDetails = (task: ITask) => {
    console.log(`${{...task}}`)
  };

  const moveTo = (task: ITask) => {
    if (currentPage === 'board'){
      dispatch(toBacklog(task));
      dispatch(removeTask(task));
    }
    else{
      console.log('To Board Action')
    }
  };
  const deleteTask = (task: ITask) => {
    dispatch(removeTask(task));
  };

  const menuItems: MenuItemType[] = [
    {
      label: 'Details',
      event: () => openDetails(task),
    },
    {
      label: currentPage === 'board' ? 'Move to Backlog' : 'Move to Board' ,
      event: () => moveTo(task),
    },
    {
      label: 'Remove',
      event: () => deleteTask(task),
    },
  ];

  return (
    <div>
      <Button
        className={classes.button}
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
        direction="rightCenter"
        onClickOutside={() => setIsMenuOpen(false)}
      />
    </div>
  );
};

export default ContextMenuCustom;
