import { Button } from '@consta/uikit/Button';
import classes from './Header.module.css';
import { useNavigate } from 'react-router-dom';
import { IconColumns } from '@consta/icons/IconColumns';
import { cnMixSpace } from '@consta/uikit/MixSpace';
import { IconFolderClosed } from '@consta/icons/IconFolderClosed';
import AddTaskModal from '../../shared/components/AddTaskModal';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.container}>
      <div className={classes.buttonsContainer}>
        <div className={classes.navButtonsContainer}>
          <Button
            className={cnMixSpace({ m: 's' })}
            label="Board"
            view="secondary"
            size="s"
            iconRight={IconColumns}
            onClick={() => navigate('/board')}
          />
          <Button
            className={cnMixSpace({ m: 's' })}
            label="Backlog"
            view="secondary"
            size="s"
            iconRight={IconFolderClosed}
            onClick={() => navigate('/backlog')}
          />
        </div>
        <AddTaskModal />
      </div>
    </div>
  );
};

export default Header;
