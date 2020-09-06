// REACT
import React, { useEffect, useState } from 'react';

// NPM PACKAGES
import moment from 'moment';

// STYLES
import styles from './hours.module.css';

// COMPONENTS
import Primary from '../../Button/Primary';

const WeeklyItem = ({ day, hours }) => {
  const [displayHours, setDisplayHours] = useState([]);

  useEffect(() => {
    hours.map(item => {
      moment(item.date).format('YY-MM-DD') === moment(day).format('YY-MM-DD')
      ?
      setDisplayHours(item.hours)
      :
      console.log("no match")
    })
  }, [hours]);

  console.log(displayHours);

  return (
    <li className={styles.weeklyItem}>
      <div className={styles.date}>
        <div className={styles.weekday}>{moment(day).format('ddd')}</div>
        <div>{moment(day).format('DD')}</div>
      </div>
      <div className={styles.date}>
        {
          displayHours.map((item, index) => <div key={index}>{item.duration}</div>)
        }
      </div>
      {moment(day).format('YY-MM-DD') ===
      moment(new Date()).format('YY-MM-DD') ? (
        <Primary label='Start' />
      ) : null}
    </li>
  );
};

export default WeeklyItem;
