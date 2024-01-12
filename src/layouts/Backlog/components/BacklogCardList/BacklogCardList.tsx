import BacklogCard from '../../../../components/BacklogCard/BacklogCard';
import classes from './BacklogCardList.module.css';

const BacklogCardList = () => {
  const backlogTasks = [
    {
      id: 1,
      title: 'Task ',
      description: 'Task from backlog',
    },
    {
      id: 2,
      title: 'Another task',
      description: 'Another task from backlog',
    },
  ];

  return (
    <div className={classes.list}>
      {backlogTasks.map((item) => (
        <BacklogCard
          key={item.id}
          title={item.title}
          id={item.id}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default BacklogCardList;
