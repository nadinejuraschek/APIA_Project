import React, { useState } from 'react';

const AddDay = () => {
  const [ date, setDate ] = useState('');
  // const [ start, setStart ] = useState('');
  // const [ end, setEnd ] = useState('');
  // const [ totalHours, setTotalHours ] = useState(0);
  const [ dailyHours, setDailyHours ] = useState(0);
  const [ weeklyHours, setWeeklyHours ] = useState(0);
  // const [ dayOff, setDayOff ] = useState(false);

  const onSubmit = event => {
    event.preventDefault();

    let newDay = {
      date,
      // start,
      // end,
      // totalHours,
      dailyHours,
      weeklyHours
      // dayOff
    }

  };

  return (
    <>
      <div className="ui dividing header">Add A Day</div>
      <form className="ui form" onSubmit={onSubmit}>
        <div className="two fields">
            <div className="field">
                <label>Date</label>
                <input value={date} name={date} type="text" placeholder="Date" />
            </div>
            <div className="field">
                <label>Total Hours</label>
                <input value={dailyHours} name={dailyHours} type="number" />
            </div>
        </div>
        <div className="centered">
          <button className="circular ui icon button"><i class="plus icon"></i></button>
        </div>
      </form> 
    </>
  )
};

export default AddDay;