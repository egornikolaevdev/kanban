import Column from '../../../../components/Column/Column';
import { Text } from '@consta/uikit/Text';
import classes from './ColumnList.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';

const ColumnList = () => {
  const columns = useSelector((state: RootState) => state.boardReducer);
  return (
    <div className={classes.columns}>
      {columns.map((item, index) => (
        <div key={index}>
          <Text weight="semibold" size="m" className={classes.header}>
            {item.title}
          </Text>
          <Column key={index} id={item.id} taskList={item.taskList} />
        </div>
      ))}
    </div>
  );
};

export default ColumnList;
