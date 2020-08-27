// REACT
import React, { useState } from 'react';

// NPM PACKAGES
import moment from 'moment';

// STYLES
import styles from './countdown.module.css';

const Countdown = ({ startDate, endDate }) => {
  const currentDate = new Date();
  const [ tab, setTab ] = useState('days');

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        <div
          className={styles.tab}
          onClick={() => setTab('days')}
        >
          Days
        </div>
        <div
          className={styles.tab}
          onClick={() => setTab('weeks')}
        >
          Weeks
        </div>
        <div
          className={styles.tab}
          onClick={() => setTab('months')}
        >
          Months
        </div>
      </div>
      <div className={styles.body}>
        Passed: {moment(currentDate).diff(startDate, `${tab}`)}
        Left: {moment(endDate).diff(currentDate, `${tab}`)}
      </div>
    </div>
  );
};

export default Countdown;
