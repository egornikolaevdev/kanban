import { Button } from '@consta/uikit/Button';
import { ContextMenu } from '@consta/uikit/ContextMenu';
import { IconKebab } from '@consta/icons/IconKebab';
import { useRef, useState } from 'react';
import classes from './ContextMenuCustom.module.css';
import { useDispatch } from 'react-redux';
import { removeTask, showDetails } from '../../store/reducers/boardSlice';
import { ITask } from '../../types/ITask';
import { toBacklog } from '../../store/reducers/backlogSlice';

type MenuItemType = {
  label: string;
  event: () => void;
};
type ContextMenuProps = {
  task: ITask;
};

const ContextMenuCustom = ({ task }: ContextMenuProps) => {
  const dispatch = useDispatch();
  const ref = useRef<HTMLButtonElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const openDetails = (task: ITask) => {
    dispatch(showDetails(task));
  };

  const moveTo = (task: ITask) => {
    dispatch(toBacklog(task));
    dispatch(removeTask(task));
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
      label: 'Move to Backlog/Board',
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
