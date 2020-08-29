// REACT
import React from 'react';

// NPM PACKAGES
import moment from 'moment';

// STYLES
import styles from './hours.module.css';

// COMPONENTS
import Primary from '../../Button/Primary';

const WeeklyHours = ({ data }) => {
  // sort array to display Mon - Sun
  const hours = data.sort((a,b)=>a.date-b.date);
  return (
    <div className={styles.weeklyGrid}>
      <div className={styles.chooseDisplay}>
        <i class="chevron left icon"></i>
        <h5>Week of ------</h5>
        <i class="chevron right icon"></i>
      </div>
      <ul className={styles.weeklyList}>
        {
          hours.map((day, index) => (
            <li className={styles.weeklyItem} key={index}>
              <div className={styles.date}>{moment(day.date).format('YYYY-MM-DD')}</div>
              <div className={styles.date}>{moment(day.hours[0].start).format()}</div>
              {
                moment(day.date).format("YY-MM-DD") === moment(new Date()).format("YY-MM-DD")
                ?
                <Primary label="Start" />
                :
                null
              }
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default WeeklyHours;
