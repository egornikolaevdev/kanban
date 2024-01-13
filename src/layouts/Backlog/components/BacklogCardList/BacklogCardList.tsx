import { useSelector } from 'react-redux';
import BacklogCard from '../../../../components/BacklogCard/BacklogCard';
import classes from './BacklogCardList.module.css';
import { RootState } from '../../../../store';

const BacklogCardList = () => {
  const backlogTaskList = useSelector(
    (state: RootState) => state.backlogReducer
  );

  return (
    <>
      {backlogTaskList.length > 0 ? (
        <div className={classes.list}>
          {backlogTaskList.map((item) => (
            <BacklogCard key={item.id} task={item} />
          ))}
        </div>
      ) : (
        'No data'
      )}
    </>
  );
};

export default BacklogCardList;
