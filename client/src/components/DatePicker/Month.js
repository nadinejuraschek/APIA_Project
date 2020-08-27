// REACT
import React from 'react';

// NPM PACKAGES
import moment from 'moment';

// STYLES
import styles from './datepicker.module.css';

const Month = ({ handleCurrentDate, currentDate }) => {
  const monthFormat = 'MMMM';
  const displayMonth = moment(currentDate).format(monthFormat);

  // TEST
  // console.log(displayMonth);

  const prevMonth = () => {
    const pastDate = moment(currentDate).subtract(1, 'months');
    handleCurrentDate(pastDate);
  };

  const nextMonth = () => {
    const futureDate = moment(currentDate).add(1, 'months');
    handleCurrentDate(futureDate);
  };

  return (
    <div className={styles.month}>
      <div className={styles.icon} onClick={prevMonth}>
        <i class="chevron left icon"></i>
      </div>
      <div className={styles.monthName}>
          <span>{displayMonth}</span>
      </div>
      <div className={styles.icon} onClick={nextMonth}>
        <i class="chevron right icon"></i>
      </div>
    </div>
  );
};

export default Month;