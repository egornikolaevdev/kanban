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

type ModalFields = {
  title: string;
  description: string;
};
type SelectItemsType = {
  key: number;
  label: string;
};
const selectItems: SelectItemsType[] = [
  { key: 1, label: 'Backlog' },
  { key: 2, label: 'To do' },
  { key: 3, label: 'Process' },
  { key: 4, label: 'Check' },
  { key: 5, label: 'Done' },
];
const AddTaskModal = () => {
  const [selectItemValue, setSelectItemValue] =
    useState<SelectItemsType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ModalFields>();

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const submitForm: SubmitHandler<ModalFields> = (data) => {
    //сделать экшен на добавление задачи(Redux)
    console.log(data);
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
          <Select
            label="Статус"
            placeholder="Выберите из списка"
            items={selectItems}
            value={selectItemValue}
            onChange={({ value }) => setSelectItemValue(value)}
            getItemLabel={(item) => item.label}
            getItemKey={(item) => item.key}
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
