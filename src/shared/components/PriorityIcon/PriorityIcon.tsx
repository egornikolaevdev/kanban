import classes from './PriorityIcon.module.css';

type PriorityIconProps = {
  taskPriority: 'Low' | 'Medium' | 'High';
};
const PriorityIcon = ({ taskPriority }: PriorityIconProps) => {
  const getPriorityImage = () => {
    const lowPriorityImg = (
      <img src="/assets/low32.png" className={classes.priorityImage} />
    );
    const mediumPriorityImg = (
      <img src="/assets/medium32.png" className={classes.priorityImage} />
    );
    const highPriorityImg = (
      <img src="/assets/high32.png" className={classes.priorityImage} />
    );

    if (taskPriority === 'Low') return lowPriorityImg;
    else if (taskPriority === 'Medium') return mediumPriorityImg;
    else return highPriorityImg;
  };
  return <>{getPriorityImage()}</>;
};

export default PriorityIcon;
