import { Button } from '@consta/uikit/Button';
import classes from './Header.module.css';
import { useNavigate } from 'react-router-dom';
import { IconColumns } from '@consta/icons/IconColumns';
import { cnMixSpace } from '@consta/uikit/MixSpace';
import { IconFolderClosed } from '@consta/icons/IconFolderClosed';
import AddTaskModal from '../../shared/components/AddTaskModal';
import {useContext} from "react";
import {AppContext, AppContextType} from "../../store/utils/context.tsx";

const Header = () => {
  const navigate = useNavigate();
  const {currentPage, setCurrentPage} = useContext(AppContext) as AppContextType

  const clickBoardButton = () => {
    navigate('/board')
      setCurrentPage('board')
      console.log('1')
  }
  const clickBacklogButton = () => {
    navigate('/backlog')
      setCurrentPage('backlog')
      console.log('2')
  }
  console.log(currentPage)
  return (
    <div className={classes.container}>
      <div className={classes.buttonsContainer}>
        <div className={classes.navButtonsContainer}>
          <Button
            className={cnMixSpace({ mT: 's', mR: 'xs', pH: '3xl' })}
            label="Board"
            view="secondary"
            size="s"
            iconRight={IconColumns}
            onClick={() => clickBoardButton()}
          />
          <Button
            className={cnMixSpace({ mT: 's', pH: '3xl' })}
            label="Backlog"
            view="secondary"
            size="s"
            iconRight={IconFolderClosed}
            onClick={() => clickBacklogButton()}
          />
        </div>
        <AddTaskModal />
      </div>
    </div>
  );
};

export default Header;
