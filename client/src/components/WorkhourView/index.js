// REACT
import React from 'react';

// STYLES
import styles from './workhour.module.css';

// COMPONENTS
import Button from 'components/Button/Primary';

const WorkhourView = () => {
  return (
    <div className={styles.container}>
      <h3>This Week</h3>
      <div className={styles.soon}>
        <Button link="/notebook/workhours" label="Log Workhours" />
      </div>
    </div>
  );
};

export default WorkhourView;