import classes from './Backlog.module.css';
import { useSelector } from 'react-redux';
import BacklogTaskList from './components/BacklogTaskList/BacklogTaskList';
import { RootState } from '../../store';
import BacklogTaskDetails from './components/BacklogTaskDetails/BacklogTaskDetails.tsx';

const Backlog = () => {
  const taskList = useSelector(
    (state: RootState) => state.backlogReducer[0].taskList
  );
  return (
    <div className={classes.container}>
      <BacklogTaskList taskList={taskList} />
      <BacklogTaskDetails />
    </div>
  );
};

export default Backlog;
