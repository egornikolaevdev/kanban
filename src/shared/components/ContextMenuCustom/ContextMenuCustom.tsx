import { Button } from '@consta/uikit/Button';
import { ContextMenu } from '@consta/uikit/ContextMenu';
import { IconKebab } from '@consta/icons/IconKebab';
import {useContext, useRef, useState} from 'react';
import classes from './ContextMenuCustom.module.css';
import { useDispatch } from 'react-redux';
import {addTaskToBoard, removeTask} from '../../../store/reducers/boardSlice.ts';
import { ITask } from '../../../types/ITask.ts';
import {addTaskToBacklog, removeFromBacklog} from '../../../store/reducers/backlogSlice.ts';
import {AppContext, AppContextType} from "../../../store/utils/context.tsx";
import * as React from "react";

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

  const boardMenuItems: MenuItemType[] = [
    {
      label: 'Details',
      event: () => openDetails(task),
    },
    {
      label: 'Move to Backlog' ,
      event: () => moveTo(task),
    },
    {
      label: 'Remove',
      event: () => deleteTask(task),
    },
  ];
  const backlogMenuItems: MenuItemType[] = [
    {
      label: 'Move to Board' ,
      event: () => moveTo(task),
    },
    {
      label: 'Remove',
      event: () => deleteTask(task),
    },
  ];

  const openDetails = (task: ITask) => {
    console.log(`${{...task}}`)
  };

  const moveTo = (task: ITask) => {
    if (currentPage === 'board'){
      dispatch(addTaskToBacklog(task));
      dispatch(removeTask(task));
    }
    else{
      dispatch(addTaskToBoard(task))
      dispatch(removeFromBacklog(task));
    }
  };
  const deleteTask = (task: ITask) => {
    dispatch(removeTask(task));
  };

  const handleClickButton = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation()
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div>
      <Button

        className={classes.button}
        onlyIcon
        iconLeft={IconKebab}
        size="s"
        view="clear"
        ref={ref}
        onClick={(event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleClickButton(event) }
      />
      <ContextMenu
        isOpen={isMenuOpen}
        items={currentPage === 'board' ? boardMenuItems : backlogMenuItems}
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
