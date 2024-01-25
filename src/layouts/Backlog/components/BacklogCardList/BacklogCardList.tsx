import { useSelector } from 'react-redux';
import BacklogCard from '../../../../components/BacklogCard/BacklogCard';
import { ResponsesEmptyBox } from '@consta/uikit/ResponsesEmptyBox';
import { Card } from '@consta/uikit/Card';
import classes from './BacklogCardList.module.css';
import { RootState } from '../../../../store';

const BacklogCardList = () => {
  const backlogTaskList = useSelector(
    (state: RootState) => state.backlogReducer
  );
  return (
    <>
      {backlogTaskList.length > 0 ? (
        <Card className={classes.tasksContainer}>
          {backlogTaskList.map((item) => (
            <BacklogCard key={item.id} taskList={item.taskList} />
          ))}
        </Card>
      ) : (
        <div className={classes.empty}>
          <ResponsesEmptyBox size="l" actions={<></>} description={<></>} />
        </div>
      )}
    </>
  );
};

export default BacklogCardList;
