// REACT
import React, { useEffect, useState } from 'react';

// NPM PACKAGES
import moment from 'moment';

// STYLES
import styles from './countdown.module.css';

const Countdown = ({ startDate, endDate, setMessage }) => {
  const currentDate = new Date();
  const [tab, setTab] = useState('days');
  const dayNum = moment(currentDate).diff(startDate, 'days');

  useEffect(() => {
    if (dayNum === 1) {
      setMessage('Welcome to the USA!');
    } else if (dayNum === 2) {
      setMessage('Have you made new friends, yet?')
    } else if (dayNum === 3) {
      setMessage('Are you ready to meet your host family?')
    } else if (dayNum >= 28 && dayNum <= 31) {
      setMessage('Congratulations! You have already spent a whole month in the US!');
    } else if (dayNum === 90){
      setMessage('You have made it through the first quarter of your Au Pair experience!');
    } else if (dayNum === 180) {
      setMessage("Halftime! Review the goals you have set for the year and make sure you make plans for the ones you haven't completed yet!");
    } else if (dayNum >= 270 && dayNum <= 330) {
      setMessage("Time to think of extension! Add your planned departure date on your profile page.");
    } else if (dayNum >= 351) {
      setMessage("Make the most of your last few days!")
    } else {
      setMessage('');
    }
  }, [dayNum]);

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
          {tab.charAt(0).toUpperCase() +
            tab.slice(1) +
            ' since arrival: ' +
            moment(currentDate).diff(startDate, `${tab}`)}
        </p>
        <p>
          {tab.charAt(0).toUpperCase() +
            tab.slice(1) +
            ' left: ' +
            moment(endDate).diff(currentDate, `${tab}`)}
        </p>
      </div>
    </div>
  );
};

export default Countdown;
