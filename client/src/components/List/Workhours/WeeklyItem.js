// REACT
import React from 'react';

// NPM PACKAGES
import moment from 'moment';

// STYLES
import styles from './hours.module.css';

// COMPONENTS
import Primary from '../../Button/Primary';

const WeeklyItem = ({ day, hours }) => {
  return (
    <>
        {/* {
          hours.map((day, index) => ( */}
            <li className={styles.weeklyItem}>
              <div className={styles.date}>
                <div className={styles.weekday}>{moment(day).format('ddd')}</div>
                <div>{moment(day).format('DD')}</div>
              </div>
              <div className={styles.date}>
                hours here
                {/* {moment(day.hours[0].start).format()} */}
              </div>
              {
                moment(day).format("YY-MM-DD") === moment(new Date()).format("YY-MM-DD")
                ?
                <Primary label="Start" />
                :
                null
              }
            </li>
          {/* ))
        } */}
    </>
  );
};

export default WeeklyItem;
