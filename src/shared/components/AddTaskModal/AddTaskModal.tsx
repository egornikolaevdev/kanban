import { Modal } from '@consta/uikit/Modal';
import { TextField } from '@consta/uikit/TextField';
import { Text } from '@consta/uikit/Text';
import { useContext } from 'react';
import { AppContext, AppContextType } from '../../../store/utils/context';
import classes from './AddTaskModal.module.css';
import { Button } from '@consta/uikit/Button';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

type ModalFields = {
  id: string;
  title: string;
  description: string;
};
const AddTaskModal = () => {
  const { isModalOpen, closeModal } = useContext(AppContext) as AppContextType;
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ModalFields>();

  const submitForm: SubmitHandler<ModalFields> = (data) => {
    //сделать экшен на добавление задачи(Redux)
    console.log(data);
  };
  return (
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
          name="id"
          control={control}
          render={({ field: { value, onChange } }) => (
            <TextField
              label="ID"
              placeholder="Введите значение"
              size="m"
              width="full"
              required
              value={value}
              {...register('id', { required: true })}
              onChange={({ value }) => {
                onChange(value);
              }}
              caption={
                errors.id?.type === 'required'
                  ? 'Поле обязательно для заполнения'
                  : ''
              }
              status={errors.id?.type === 'required' ? 'alert' : undefined}
            />
          )}
        />
        <Controller
          name="title"
          control={control}
          render={({ field: { value, onChange } }) => (
            <TextField
              label="Заголовок"
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
  );
};

export default AddTaskModal;
