// REACT
import React, { useState } from 'react';

// NPM PACKAGES
import moment from 'moment';

// STYLES
import styles from './countdown.module.css';

const Countdown = ({ startDate }) => {
  const [ passed, setPassed ] = useState(daysPassed);
  const [ left, setLeft ] = useState(daysLeft);
  const currentDate = moment();
  const daysPassed = currentDate.diff(startDate, 'days');
  const weeksPassed = currentDate.diff(startDate, 'weeks');
  const monthsPassed = currentDate.diff(startDate, 'months');
  const daysLeft = moment(startDate).diff(currentDate, 'days');
  const weeksLeft = moment(startDate).diff(currentDate, 'weeks');
  const monthsLeft = moment(startDate).diff(currentDate, 'months');

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        <div
          className={styles.tab}
          
        >
          Days
        </div>
        <div
          className={styles.tab}
        >
          Weeks
        </div>
        <div
          className={styles.tab}
        >
          Months
        </div>
      </div>
      <div className={styles.body}>
        Passed: {passed}
        Left: {left}
      </div>
    </div>
  );
};

export default Countdown;
