import classes from './BacklogCard.module.css';
import { Card } from '@consta/uikit/Card';
import { Text } from '@consta/uikit/Text';
import ContextMenuCustom from '../ContextMenuCustom/ContextMenuCustom';

type BacklogCardProps = {
  id: number;
  title?: string;
  description?: string;
};

const BacklogCard = ({ title, id, description }: BacklogCardProps) => {
  return (
    <>
      <Card className={classes.card}>
        <Text>{`${id} ${title} ${description}`}</Text>
        <ContextMenuCustom taskID={id} />
      </Card>
    </>
  );
};

export default BacklogCard;
