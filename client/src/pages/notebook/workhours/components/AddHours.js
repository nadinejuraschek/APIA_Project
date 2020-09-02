// REACT
import React, { useState } from 'react';

// NPM PACKAGES
import moment from 'moment';
import axios from 'axios';

// COMPONENTS
import Add from 'components/Button/Add';
import Date from 'components/Input/Date';
import Time from 'components/Input/Time';

// STYLES
import styles from '../workhours.module.css';

// HOOKS
import { duration } from 'hooks/useTime';

// CONTEXTS
// import { WorkhourContext } from 'contexts/WorkhourContext';

const AddHours = () => {
  const today = moment();
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const [date, setDate] = useState(today);

  const handleSubmit = event => {
    event.preventDefault();
    const hours = [];
    const days = [];
    if (days.find(date) != undefined) {
      days.push({ date: date, hours: null, total: 0 });
      hours.push({ start: start, end: end, duration: duration(start, end), id: date });
    } else {
      hours.push({ start: start, end: end, duration: duration(start, end), id: date });
    }
    // const newHours = {
    //   date: date,
    //   hours: [{
    //     start: start,
    //     end: end,
    //     duration: duration(start, end)
    //   }],
    //   total: ,
    // };
    // axios.post('/api/workhours', newHours).then(workhours => {
    //   console.log("Hours have been added successfully!", workhours);
    // }).catch(err => {
    //   console.log("Error: ", err);
    // });
  };

  return (
    <>
      <div className={styles.addHeader}>
        <h3>Add Hours</h3>
        <Add handleClick={handleSubmit} />
      </div>
      <Date
        date={date}
        name='date'
        label='Date'
        value={date}
        icon='calendar alternate outline'
        handleChange={setDate}
      />
      <Time
        start={start}
        handleStart={setStart}
        end={end}
        handleEnd={setEnd}
      />
    </>
  );
};

export default AddHours;
