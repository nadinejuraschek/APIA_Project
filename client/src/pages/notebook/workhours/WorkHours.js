// REACT
import React, { useContext, useState } from 'react';

// NPM PACKAGES
import moment from 'moment';

// COMPONENTS
import WeeklyList from 'components/List/Workhours/Weekly';
import Timer from 'components/Timer';
import AddHours from './components/AddHours';

// CONTEXT
import { WorkhourContext } from 'contexts/WorkhourContext';

// STYLES
import styles from './workhours.module.css';

const Workhours = () => {
  const [tab, setTab] = useState('weekly');
  const { workhours, getWorkhours, todayHours } = useContext(WorkhourContext);

  console.log(todayHours);

  return (
    <main>
      <div className={styles.layout}>
        <h2 className={styles.header}>Your Workhours</h2>
        <div className={styles.tabs}>
          {/* <div
            className={`${styles.tab} ${tab === 'daily' ? styles.active : null}`}
            onClick={() => setTab('daily')}
          >
            Daily
          </div> */}
          <div
            className={`${styles.tab} ${tab === 'weekly' ? styles.active : null}`}
            onClick={() => setTab('weekly')}
          >
            Weekly
          </div>
        </div>
        <div className={styles.tracker}>
          <WeeklyList data={workhours} />
        </div>
        <div className={styles.timer}>
          <Timer time={todayHours} />
        </div>
        <div className={styles.addContainer}>
          <AddHours updateWorkhours={getWorkhours} />
        </div>
        <div className={styles.reminder}>
          <strong>Reminder:</strong><br />
          You can work a maximum of 10 hours a day and 45 hours per week.
        </div>
      </div>
    </main>
  );
};

export default Workhours;
