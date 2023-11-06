import { Button } from '@consta/uikit/Button';
import classes from './Backlog.module.css';
import { useNavigate } from 'react-router-dom';
import { IconColumns } from '@consta/icons/IconColumns';

const Backlog = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={classes.buttonContainer}>
        <Button
          label="Board"
          view="secondary"
          size="s"
          iconRight={IconColumns}
          onClick={() => navigate('/board')}
        />
      </div>
    </>
  );
};

export default Backlog;
