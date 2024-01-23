import classes from './Backlog.module.css';
import BacklogCardList from './components/BacklogCardList/BacklogCardList';

const Backlog = () => {
  return (
    <>
      <div className={classes.container}>
        <BacklogCardList />
      </div>
    </>
  );
};

export default Backlog;
