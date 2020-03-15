import React, { useState } from 'react';

const AddPayment = () => {
  const [ week, setWeek ] = useState(0);
  const [ paid, setPaid ] = useState(false);
  const [ date, setDate ] = useState('');
  const [ late, setLate ] = useState(false);

  const onSubmit = event => {
    event.preventDefault();

    let newPayment = {
      week,
      paid,
      date,
      late
    }

  };

  return (
    <>
      <div className="ui divider"></div>
      <form className="ui form" onSubmit={onSubmit}>
        <div className="four fields">
          <div className="field">
            <label>Week</label>
            <input value={week} name={week} type="number" min="1" max="52" />
          </div>
          <div className="field">
            <label>Paid?</label>
            <select name="paid" className="ui fluid dropdown">
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className="field">
            <label>Date</label>
            <input value={date} name={date} type="text" placeholder="Date Paid" />
          </div>
          <div className="field">
            <label>Late?</label>
            <select name="late" className="ui fluid dropdown">
              <option value="false">No</option>
              <option value="true">Yes</option>
            </select>
          </div>
        </div>
        <div className="centered">
          <button className="circular ui icon button"><i class="plus icon"></i></button>
        </div>
      </form> 
    </>
  )
};

export default AddPayment;