import { Button } from '@consta/uikit/Button';
import { ContextMenu } from '@consta/uikit/ContextMenu';
import { IconKebab } from '@consta/icons/IconKebab';
import { useRef, useState } from 'react';
import classes from './ContextMenuCustom.module.css';

type MenuItemType = {
  label: string;
  event: () => void;
};
type ContextMenuProps = {
  taskID: number;
};

const openDetails = (taskId: number) => {
  console.log(`Open details${taskId}`);
};
const toBacklog = (taskId: number) => {
  console.log(`to Backlog task${taskId}`);
};
const deleteTask = (taskId: number) => {
  console.log(`DeleteTask${taskId}`);
};

const ContextMenuCustom = ({ taskID }: ContextMenuProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const menuItems: MenuItemType[] = [
    {
      label: 'Details',
      event: () => openDetails(taskID),
    },
    {
      label: 'Return to Backlog',
      event: () => toBacklog(taskID),
    },
    {
      label: 'Remove',
      event: () => deleteTask(taskID),
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
