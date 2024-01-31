import classes from './Backlog.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { ResponsesEmptyBox } from '@consta/uikit/ResponsesEmptyBox/index';
import { Card } from '@consta/uikit/Card/index';
import BacklogTaskCard from '../../components/BacklogCard/BacklogTaskCard.tsx';
import { Text } from '@consta/uikit/Text/index';
import { User } from '@consta/uikit/User';
import { ITask } from '../../types/ITask.ts';
import { useState } from 'react';

const Backlog = () => {
  const taskList = useSelector(
    (state: RootState) => state.backlogReducer[0].taskList
  );
  const [taskSelected, setTaskSelected] = useState<ITask | null>(null);
  return (
    <>
      {taskList.length > 0 ? (
        <div className={classes.container}>
          <Card className={classes.tasksContainer}>
            {taskList.map((item) => (
              <BacklogTaskCard
                key={item.id}
                task={item}
                setSelectedTask={setTaskSelected}
              />
            ))}
          </Card>
          <Card className={classes.detailsContainer}>
            <>
              {taskSelected ? (
                <>
                  <div className={classes.infoBlock}>
                    <Text size="l">{taskSelected?.title}</Text>
                  </div>
                  <div className={classes.infoBlock}>
                    <User
                      size="l"
                      width="full"
                      name={
                        taskSelected?.executor?.fullName ||
                        'Исполнитель не назначен'
                      }
                    />
                    <Text size="l"> {taskSelected?.id}</Text>
                  </div>
                </>
              ) : (
                <div className={classes.emptyDetails}>Выберите задачу</div>
              )}
            </>
          </Card>
        </div>
      ) : (
        <div className={classes.empty}>
          <ResponsesEmptyBox size="l" actions={<></>} description={<></>} />
        </div>
      )}
    </>
  );
};

export default Backlog;
