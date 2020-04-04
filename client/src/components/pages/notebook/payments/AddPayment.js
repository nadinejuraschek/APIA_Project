import React, { useState, useContext } from 'react';

import axios from 'axios';

import { PaymentContext } from '../../../../contexts/PaymentContext';

const AddPayment = () => {
  const { getPayments, payments } = useContext(PaymentContext);
  const [ newPayment, setNewPayment ] = useState({ week: 0, paid: false, date: '', late: false });

  const handleSubmit = event => {
    event.preventDefault();
    console.log('Payment to send to DB: ' +  newPayment);
    axios({
      url: '/api/payments',
      method: 'POST',
      data: newPayment
    }).then(response => {
      console.log('Payment in DB: ' + response.data);
      getPayments();
      setNewPayment({ week: 0, paid: false, date: '', late: false });
    }).catch(error => {
      console.log('Error: ' + error);
    });
  };

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setNewPayment(newPayment => ({...newPayment, [name]: value}));
  };

  return (
    <>
      <div className="ui divider"></div>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="four fields">
          <div className="field">
            <label>Week</label>
            <input 
              name="week" 
              type="number" 
              min="1" max="52" 
              placeholder="Week #" 
              onChange={handleChange} 
              value={newPayment.week}
            />
          </div>
          <div className="field">
            <label>Paid?</label>
            <select 
              name="paid" 
              className="ui fluid dropdown" 
              onChange={handleChange}
              value={newPayment.paid}
            >
              <option value=""></option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className="field">
            <label>Date</label>
            <input 
              name="date" 
              type="text" 
              placeholder="Date Paid" 
              onChange={handleChange}
              value={newPayment.date}
            />
          </div>
          <div className="field">
            <label>Late?</label>
            <select 
              name="late" 
              className="ui fluid dropdown" 
              onChange={handleChange}
              value={newPayment.late}
            >
              <option value=""></option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
        </div>
        <div className="centered">
          <button className="circular ui icon button"><i className="plus icon"></i></button>
        </div>
      </form> 
    </>
  )
};

export default AddPayment;