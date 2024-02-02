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
import { TextField } from '@consta/uikit/TextField/index';

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
                    <TextField
                      value={taskSelected.title}
                      label="Title"
                      className={classes.textLabel}
                      readOnly
                      view="clear"
                      width="full"
                    />
                    <TextField
                      value={taskSelected.status}
                      label="Status"
                      className={classes.textLabel}
                      readOnly
                      view="clear"
                      width="full"
                    />
                    <TextField
                      value={taskSelected.priority}
                      label="Priority"
                      className={classes.textLabel}
                      readOnly
                      view="clear"
                      width="full"
                    />
                    <TextField
                      value={taskSelected?.desc || 'None'}
                      label="Description"
                      className={classes.textLabel}
                      type="textarea"
                      minRows={3}
                      readOnly
                      view="clear"
                      width="full"
                    />
                  </div>
                  <div className={classes.infoBlock}>
                    <TextField
                      value={
                        taskSelected.storyPoints?.toString() === ''
                          ? taskSelected.storyPoints?.toString()
                          : 'Undefined'
                      }
                      label="Story points"
                      className={classes.textLabel}
                      readOnly
                      view="clear"
                      width="full"
                    />
                    <Text className={classes.textLabel} view="secondary">
                      Executor
                    </Text>
                    <User
                      size="l"
                      width="full"
                      name={
                        taskSelected?.executor?.fullName ||
                        'Исполнитель не назначен'
                      }
                      style={{ paddingBottom: 'var(--space-s' }}
                    />
                    <TextField
                      value={
                        taskSelected?.startDate?.toDateString() ||
                        'Date is undefined'
                      }
                      label="Start date"
                      className={classes.textLabel}
                      readOnly
                      view="clear"
                      width="full"
                    />
                    <TextField
                      value={
                        taskSelected?.endDate?.toDateString() ||
                        'Date is undefined'
                      }
                      label="End date"
                      className={classes.textLabel}
                      readOnly
                      view="clear"
                      width="full"
                    />
                  </div>
                </>
              ) : (
                <div className={classes.emptyDetails}>
                  <Text size="xl">Task is not selected</Text>
                </div>
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
