import BacklogCard from '../../../../components/BacklogCard/BacklogCard';
import { toDoApi } from '../../../../store/services/ToDoApi';
import classes from './BacklogCardList.module.css';

const { useGetToDoListQuery } = toDoApi;

const BacklogCardList = () => {
  const { data } = useGetToDoListQuery();
  const mockTasks = data?.filter((item) => item.id <= 15);

  return (
    <div className={classes.list}>
      {mockTasks?.map((item) => (
        <BacklogCard
          key={item.id}
          title={item.title}
          id={item.id}
          description={item.desc}
        />
      ))}
    </div>
  );
};

export default BacklogCardList;
