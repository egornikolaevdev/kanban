import { useSelector } from 'react-redux';
import classes from './Backlog.module.css';
import BacklogTaskList from './components/BacklogTaskList/BacklogTaskList';
import { RootState } from '../../store';
import { Card } from '@consta/uikit/Card';
import { Text } from '@consta/uikit/Text';

const Backlog = () => {
  const taskList = useSelector(
    (state: RootState) => state.backlogReducer[0].taskList
  );
  return (
    <div className={classes.container}>
      <div className={classes.taskList}>
        <BacklogTaskList taskList={taskList} />
      </div>
      <Card className={classes.detailsContainer}>
        <Text size="l"> Details</Text>
      </Card>
    </div>
  );
};

export default Backlog;
