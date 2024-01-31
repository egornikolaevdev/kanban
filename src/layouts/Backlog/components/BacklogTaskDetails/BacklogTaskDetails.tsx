import classes from './BacklogTaskDetails.module.css';
import { Text } from '@consta/uikit/Text';
import { Card } from '@consta/uikit/Card';

const BacklogTaskDetails = () => {
  return (
    <Card className={classes.detailsContainer}>
      <div className={classes.infoBlock}>
        <Text size="l">123</Text>
      </div>
      <div className={classes.infoBlock}>
        <Text size="l"> 123 </Text>
        <Text size="l"> 123</Text>
      </div>
    </Card>
  );
};

export default BacklogTaskDetails;
