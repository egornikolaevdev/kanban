import { useContext } from 'react';
import Column from '../../../components/Column/Column';
import { Text } from '@consta/uikit/Text';
import { AppContext, AppContextType } from '../../../store/utils/context';
import classes from './ColumnList.module.css';

const ColumnList = () => {
  const { columns } = useContext(AppContext) as AppContextType;
  return (
    <div className={classes.columns}>
      {columns.map((item, index) => (
        <div>
          <Text weight="semibold" size="m" className={classes.header}>
            {item.title}
          </Text>
          <Column key={index} id={item.id} />
        </div>
      ))}
    </div>
  );
};

export default ColumnList;
