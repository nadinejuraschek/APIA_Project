// REACT
import { useState } from 'react';

// NPM PACKAGES
import { startOfWeek, endOfWeek, addWeeks, subWeeks, format } from 'date-fns';
import moment from 'moment';

// STYLES
import styles from './hours.module.css';

// COMPONENTS
import WeeklyItem from './WeeklyItem';

const WeeklyHours = ({ data }) => {
  // sort array to display Mon - Sun
  const hours = data.sort((a,b)=>a.date-b.date);
  // const currentDate = moment(new Date());
  const currentDate = new Date();
  // const [startWeek, setStartWeek] = useState(moment(currentDate).startOf('week'));
  const [startWeek, setStartWeek] = useState(startOfWeek(currentDate, { weekStartsOn: 1 }));
  // const endWeek = moment(startWeek).endOf('week');
  const [ endWeek, setEndWeek ] = useState(endOfWeek(currentDate, { weekStartsOn: 1 }));
  console.log(endWeek);
  let day = startWeek;

  const week = [];

  // while (day <= endWeek) {
  //   for (let i = 0; i < 7; i++) {
  //   week.push(
  //     <WeeklyItem
  //       day={day}
  //       key={day}
  //       hours={hours}
  //     />
  //   );
  //   day = moment(day).add(1, 'day');
  //  }
  // }

  // TODO: create items for whole week starting with startWeek

  const prev = () => {
    const futureDate = subWeeks(startWeek, 1);
    setStartWeek(futureDate);
    setEndWeek(endOfWeek(futureDate, { weekStartsOn: 1 }));
  }

  const next = () => {
    const futureDate = addWeeks(startWeek, 1);
    setStartWeek(futureDate);
    setEndWeek(endOfWeek(futureDate, { weekStartsOn: 1 }));
  }

  return (
    <div className={styles.weeklyGrid}>
      <div className={styles.chooseDisplay}>
        <div onClick={prev}>
          <i class="chevron left icon"></i>
        </div>
        <h5>{`${format(startWeek, 'MMM dd')} - ${format(endWeek, 'MMM dd')}`}</h5>
        <div onClick={next}>
          <i class="chevron right icon"></i>
        </div>
      </div>
      <ul className={styles.weeklyList}>
        {week}
      </ul>
    </div>
  );
};

export default WeeklyHours;
