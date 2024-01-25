import { Modal } from '@consta/uikit/Modal';
import { TextField } from '@consta/uikit/TextField';
import { Text } from '@consta/uikit/Text';
import { useState } from 'react';
import { cnMixSpace } from '@consta/uikit/MixSpace';
import { IconAdd } from '@consta/icons/IconAdd';
import classes from './AddTaskModal.module.css';
import { Button } from '@consta/uikit/Button';
import { Select } from '@consta/uikit/Select';
import { UserSelect } from '@consta/uikit/UserSelect';
import { DatePicker } from '@consta/uikit/DatePicker';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { addTaskToBacklog } from '../../../store/reducers/backlogSlice';
import { useDispatch } from 'react-redux';
import { addTaskToBoard } from '../../../store/reducers/boardSlice';
import { IEmployee } from '../../../types/IEmployee';
import enLocale from 'date-fns/locale/en-US';

type StatusSelectType = {
  key: number;
  label: string;
  value: 'Q' | 'P' | 'C' | 'D' | 'B';
};

type PrioritySelectType = {
  key: number;
  value: 'Low' | 'Medium' | 'High';
};

type ModalFields = {
  title: string;
  description: string;
  status: StatusSelectType;
  executor: IEmployee;
  startDate: Date;
  endDate: Date;
  storyPoints: string;
  priority: PrioritySelectType;
};

const statusSelectItems: StatusSelectType[] = [
  { key: 1, label: 'Backlog', value: 'B' },
  { key: 2, label: 'To do', value: 'Q' },
  { key: 3, label: 'Process', value: 'P' },
  { key: 4, label: 'Check', value: 'C' },
  { key: 5, label: 'Done', value: 'D' },
];

const prioritySelectItems: PrioritySelectType[] = [
  { key: 1, value: 'Low' },
  { key: 2, value: 'Medium' },
  { key: 3, value: 'High' },
];

const users: IEmployee[] = [
  {
    id: 1,
    name: 'Egor',
    surname: 'Nikolaev',
    fullName: 'Nikolaev Egor Aleksandrovich',
    position: 'Middle frontend developer',
  },
  {
    id: 2,
    name: 'Ivan',
    surname: 'Ivanov',
    fullName: 'Ivanov Ivan Ivanovich',
    position: 'Junior frontend developer',
  },
  {
    id: 3,
    name: 'Vasiliy',
    surname: 'Vasiliev',
    fullName: 'Vasiliev Vasiliy Vasilievich',
    position: 'Senior backend developer',
  },
  {
    id: 4,
    name: 'Petr',
    surname: 'Petrov',
    fullName: 'Petrov Petr Petrovich',
    position: 'Team leader',
  },
];
const AddTaskModal = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ModalFields>();

  const closeModal = () => {
    setIsModalOpen(false);
    reset();
  };
  const submitForm: SubmitHandler<ModalFields> = (data) => {
    if (data.status.key === 1) {
      dispatch(
        addTaskToBacklog({
          id: '',
          title: data.title,
          desc: data.description,
          status: data.status.value,
          executor: data.executor,
          startDate: data.startDate,
          endDate: data.endDate,
          storyPoints: Number(data.storyPoints),
          priority: data.priority.value,
        })
      );
      console.log('Backlog', {
        title: data.title,
        desc: data.description,
        status: data.status,
      });
    } else {
      dispatch(
        addTaskToBoard({
          id: '',
          title: data.title,
          desc: data.description,
          status: data.status.value,
          executor: data.executor,
          startDate: data.startDate,
          endDate: data.endDate,
          storyPoints: Number(data.storyPoints),
          priority: data.priority.value,
        })
      );
      console.log('Board', {
        title: data.title,
        desc: data.description,
        status: data.status,
      });
    }
    closeModal();
  };

  return (
    <>
      <Button
        className={cnMixSpace({ mT: 's', pH: '2xl' })}
        label="Create task"
        view="primary"
        size="s"
        iconRight={IconAdd}
        onClick={() => setIsModalOpen(true)}
      />
      <Modal
        className={classes.modal}
        isOpen={isModalOpen}
        onClickOutside={() => closeModal()}
        onEsc={() => closeModal()}
      >
        <Text size="xl" weight="semibold">
          Creating new task
        </Text>

        <form onSubmit={handleSubmit(submitForm)}>
          <Controller
            name="title"
            control={control}
            render={({ field: { value, onChange } }) => (
              <TextField
                className={classes.formField}
                label="Task title"
                placeholder="Enter value"
                width="full"
                required
                value={value}
                {...register('title', { required: true })}
                onChange={({ value }) => {
                  onChange(value);
                }}
                caption={
                  errors.title?.type === 'required' ? 'Field is required' : ''
                }
                status={errors.title?.type === 'required' ? 'alert' : undefined}
              />
            )}
          />
          <Controller
            name="description"
            control={control}
            render={({ field: { value, onChange } }) => (
              <TextField
                label="Description"
                className={classes.formField}
                placeholder="Enter value"
                type="textarea"
                minRows={3}
                width="full"
                value={value}
                {...register('description', { required: true })}
                onChange={({ value }) => {
                  onChange(value);
                }}
              />
            )}
          />

          <Controller
            name="executor"
            control={control}
            render={({ field: { value, onChange } }) => (
              <UserSelect
                className={classes.formField}
                label="Executor"
                placeholder="Select from"
                getItemLabel={(item) => item.fullName}
                getItemKey={(item) => item.id}
                items={users}
                value={value}
                onChange={({ value }) => {
                  onChange(value);
                }}
              />
            )}
          />
          <Controller
            name="storyPoints"
            control={control}
            render={({ field: { value, onChange } }) => (
              <TextField
                label="Story points"
                className={classes.formField}
                placeholder="Enter value"
                type="textarea"
                width="full"
                value={value}
                {...register('storyPoints', { required: true })}
                onChange={({ value }) => {
                  onChange(value);
                }}
              />
            )}
          />
          <div className={classes.dateFieldsContainer}>
            <Controller
              name="startDate"
              control={control}
              render={({ field: { value, onChange } }) => (
                <DatePicker
                  label="Start date"
                  className={classes.formDateField}
                  placeholder="Select date"
                  locale={enLocale}
                  type="date"
                  value={value}
                  onChange={({ value }) => {
                    onChange(value);
                  }}
                />
              )}
            />
            <Controller
              name="endDate"
              control={control}
              render={({ field: { value, onChange } }) => (
                <DatePicker
                  label="End date"
                  className={classes.formDateField}
                  placeholder="Select date"
                  locale={enLocale}
                  type="date"
                  value={value}
                  onChange={({ value }) => {
                    onChange(value);
                  }}
                />
              )}
            />
          </div>
          <Controller
            name="status"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Select
                label="Status"
                className={classes.formField}
                placeholder="Select from"
                getItemLabel={(item) => item.label}
                getItemKey={(item) => item.key}
                items={statusSelectItems}
                value={value}
                onChange={({ value }) => {
                  onChange(value);
                }}
                required
                caption={
                  errors.status?.type === 'required' ? 'Field is required' : ''
                }
                status={
                  errors.status?.type === 'required' ? 'alert' : undefined
                }
              />
            )}
          />
          <Controller
            name="priority"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Select
                label="Priority"
                className={classes.formField}
                placeholder="Select from"
                getItemLabel={(item) => item.value}
                getItemKey={(item) => item.key}
                items={prioritySelectItems}
                value={value}
                onChange={({ value }) => {
                  onChange(value);
                }}
              />
            )}
          />

          <div className={classes.buttonsContainer}>
            <Button
              label="Cancel"
              view="secondary"
              onClick={() => closeModal()}
            />
            <Button label="Create" type="submit" />
          </div>
        </form>
      </Modal>
    </>
  );
};

export default AddTaskModal;
