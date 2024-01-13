import { Modal } from '@consta/uikit/Modal';
import { TextField } from '@consta/uikit/TextField';
import { Text } from '@consta/uikit/Text';
import { useState } from 'react';
import { cnMixSpace } from '@consta/uikit/MixSpace';
import { IconAdd } from '@consta/icons/IconAdd';
import classes from './AddTaskModal.module.css';
import { Button } from '@consta/uikit/Button';
import { Select } from '@consta/uikit/Select';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { addTaskToBacklog } from '../../../store/reducers/backlogSlice';
import { useDispatch } from 'react-redux';
import { addTaskToBoard } from '../../../store/reducers/boardSlice';

type ModalFields = {
  title: string;
  description: string;
  status: SelectItemsType;
};
type SelectItemsType = {
  key: number;
  label: string;
  status: 'Q' | 'P' | 'C' | 'D' | 'B';
};
const selectItems: SelectItemsType[] = [
  { key: 1, label: 'Backlog', status: 'B' },
  { key: 2, label: 'To do', status: 'Q' },
  { key: 3, label: 'Process', status: 'P' },
  { key: 4, label: 'Check', status: 'C' },
  { key: 5, label: 'Done', status: 'D' },
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
          status: data.status.status,
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
          status: data.status.status,
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
        className={cnMixSpace({ m: 's' })}
        label="Create new task"
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
          Добавить задачу
        </Text>

        <form onSubmit={handleSubmit(submitForm)}>
          <Controller
            name="title"
            control={control}
            render={({ field: { value, onChange } }) => (
              <TextField
                label="Название"
                placeholder="Введите значение"
                width="full"
                required
                value={value}
                {...register('title', { required: true })}
                onChange={({ value }) => {
                  onChange(value);
                }}
                caption={
                  errors.title?.type === 'required'
                    ? 'Поле обязательно для заполнения'
                    : ''
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
                label="Описание"
                placeholder="Введите значение"
                type="textarea"
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
            name="status"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Select
                label="Статус"
                placeholder="Выберите из списка"
                getItemLabel={(item) => item.label}
                getItemKey={(item) => item.key}
                items={selectItems}
                value={value}
                onChange={({ value }) => {
                  onChange(value);
                }}
                required
                caption={
                  errors.status?.type === 'required'
                    ? 'Поле обязательно для заполнения'
                    : ''
                }
                status={
                  errors.status?.type === 'required' ? 'alert' : undefined
                }
              />
            )}
          />
          <div className={classes.buttonsContainer}>
            <Button
              label="Отмена"
              view="secondary"
              onClick={() => closeModal()}
            />
            <Button label="Добавить" type="submit" />
          </div>
        </form>
      </Modal>
    </>
  );
};

export default AddTaskModal;
