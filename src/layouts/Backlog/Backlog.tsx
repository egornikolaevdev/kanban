import classes from './Backlog.module.css';
import { Card } from '@consta/uikit/Card';
import BacklogCardList from './components/BacklogCardList/BacklogCardList';

const Backlog = () => {
  return (
    <>
      <div className={classes.container}>
        <Card className={classes.tasks_container}>
          <BacklogCardList />
        </Card>
      </div>
    </>
  );
};

export default Backlog;
