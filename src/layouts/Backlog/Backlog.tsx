import { Button } from '@consta/uikit/Button';
import classes from './Backlog.module.css';
import { useNavigate } from 'react-router-dom';
import { IconColumns } from '@consta/icons/IconColumns';
import { cnMixSpace } from '@consta/uikit/MixSpace';

const Backlog = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={classes.buttonContainer}>
        <Button
          className={cnMixSpace({ m: 's' })}
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
