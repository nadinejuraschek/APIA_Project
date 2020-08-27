// REACT
import React, { useState } from 'react';

// NPM PACKAGES
import axios from 'axios';

const PaymentEntry = ({ paymentid, payment, deletePayment, getPayments }) => {
  const [show, setShow] = useState(false);
  const [updatedPayment, setUpdatedPayment] = useState({});

  const showEdit = () => {
    show === true ? setShow(false) : setShow(true);
  };

  const handleEdit = event => {
    event.preventDefault();
    // console.log('Updated payment to send to DB: ' + updatedPayment);
    axios
      .put('/api/payments/' + paymentid, updatedPayment)
      .then(res => {
        console.log('Updated payment in DB: ' + res.data);
        getPayments();
        show === true ? setShow(false) : setShow(true);
      })
      .catch(error => {
        console.log('Error: ' + error.response);
      });
  };

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setUpdatedPayment(updatedPayment => ({ ...updatedPayment, [name]: value }));
  };

  return (
    <>
      <tr>
        <td>
          <form className='ui form'>
            <button
              type='button'
              className='no-style-button'
              onClick={() => showEdit()}
            >
              <i className='edit outline icon'></i>
            </button>
            <button
              type='button'
              className='no-style-button'
              onClick={() => deletePayment(paymentid)}
            >
              <i className='close icon'></i>
            </button>
          </form>
        </td>
        <td>{payment.week}</td>
        <td>
          {payment.paid ? (
            <i className='icon light checkmark'></i>
          ) : (
            <i className='icon dark close'></i>
          )}
        </td>
        <td className={payment.late ? 'light-bg' : ''}>{payment.date}</td>
      </tr>

      <tr className={show === true ? '' : 'hide'}>
        <td colSpan='4'>
          <form className='ui mini form' onSubmit={handleEdit}>
            {/* <div className="field">
                        <label>Week</label>
                        <input 
                            type='number'
                            name='week'
                            placeholder={'#' + payment.week}
                        />
                    </div> */}
            <div className='field'>
              <label>Paid?</label>
              <select
                name='paid'
                className='ui fluid dropdown'
                onChange={handleChange}
              >
                <option value=''>Choose One</option>
                <option value='true'>Yes</option>
                <option value='false'>No</option>
              </select>
            </div>
            <div className='field'>
              <label>Late?</label>
              <select
                name='late'
                className='ui fluid dropdown'
                onChange={handleChange}
              >
                <option value='' placeholder='Late?'>
                  Choose One
                </option>
                <option value='false'>No</option>
                <option value='true'>Yes</option>
              </select>
            </div>
            <div className='field'>
              <label>Date</label>
              <input
                type='text'
                name='date'
                placeholder={payment.date}
                onChange={handleChange}
              />
            </div>
            <div className='field centered'>
              <button className='ui button'>Edit</button>
            </div>
          </form>
        </td>
      </tr>
    </>
  );
};

export default PaymentEntry;
