// REACT
import React, { useState, useContext } from 'react';

// NPM PACKAGES
import axios from 'axios';
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
  const hours = [
    {
      date: moment(Date.now()),
      hours: [
        {
          start: 1598644800,
          end: 1598652000,
          duration: moment(1598652000).diff(1598644800, "minutes"),
        }
      ],
      total: 360
    },
    {
      date: moment(Date.now()).subtract(1, "days"),
      hours: [
        {
            start: 1598544000,
            end: 1598565600,
            duration: moment(1598565600).diff(1598544000, "minutes"),
        }
      ],
      total: 360
    },
    {
      date: moment(Date.now()).subtract(2, "days"),
      hours: [
        {
          start: 1598457600,
          end: 1598479200,
          duration: moment(1598479200).diff(1598457600, "minutes"),
        }
      ],
      total: 360
    },
    {
      date: moment(Date.now()).subtract(3, "days"),
      hours: [
        {
          start: 1598371200,
          end: 1598392800,
          duration: moment(1598392800).diff(1598371200, "minutes"),
        }
      ],
      total: 360
    }
  ];

  return (
    <main>
      <div className={styles.layout}>
        <h2 className={styles.header}>Your Workhours</h2>
        <div className={styles.tabs}>
          <div
            className={`${styles.tab} ${tab === 'daily' ? styles.active : null}`}
            onClick={() => setTab('daily')}
          >
            Daily
          </div>
          <div
            className={`${styles.tab} ${tab === 'weekly' ? styles.active : null}`}
            onClick={() => setTab('weekly')}
          >
            Weekly
          </div>
        </div>
        <div className={styles.tracker}>
          <WeeklyList data={hours} />
        </div>
        <div className={styles.timer}>
          <Timer time={423} />
        </div>
        <div className={styles.addContainer}>
          <AddHours />
        </div>
        <div className={styles.reminder}>
          Reminder: 10 hours / day, 45 hours / week, and 1.5 days off every week!
        </div>
      </div>
    </main>
  );
};

export default Workhours;
