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
          className={`${styles.tab} ${tab === 'days' ? styles.active : null}`}
          onClick={() => setTab('days')}
        >
          Days
        </div>
        <div
          className={`${styles.tab} ${tab === 'weeks' ? styles.active : null}`}
          onClick={() => setTab('weeks')}
        >
          Weeks
        </div>
        <div
          className={`${styles.tab} ${tab === 'months' ? styles.active : null}`}
          onClick={() => setTab('months')}
        >
          Months
        </div>
      </div>
      <div className={styles.body}>
        <p>
          {tab.charAt(0).toUpperCase() + tab.slice(1) + " since arrival: " + moment(currentDate).diff(startDate, `${tab}`)}
        </p>
        <p>
          {tab.charAt(0).toUpperCase() + tab.slice(1) + " left: " + moment(endDate).diff(currentDate, `${tab}`)}
        </p>
      </div>
    </div>
  );
};

export default Countdown;
