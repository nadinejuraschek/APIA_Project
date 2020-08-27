// REACT
import React, { useState } from 'react';

// NPM PACKAGES
import axios from 'axios';

const EditWeek = ({ workhour, workhourid, getWeek, getWorkhours }) => {
  const [updatedHours, setUpdatedHours] = useState({
    number: workhour.number,
    day: [],
    weeklyHours: workhour.weeklyHours,
  });

  const handleEdit = event => {
    event.preventDefault();
    console.log('/api/workhours/' + workhourid);
    // console.log('Updated workhours to send to DB: ' + updatedHours);
    axios
      .put('/api/workhours/' + workhourid, updatedHours)
      .then(res => {
        console.log(res.data);
        getWeek();
        show === true ? setShow(false) : setShow(true);
      })
      .catch(error => {
        console.log('Error: ' + error.response);
      });
  };

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setUpdatedHours(updatedHours => ({ ...updatedHours, [name]: value }));
    console.log(updatedHours);
  };

  return (
    <>
      <div className='ui divider'></div>
      <form className='ui form' onSubmit={handleEdit}>
        <div className='three fields'>
          <div className='field'>
            <label>Monday</label>
            <input
              name='day[0].date'
              type='text'
              placeholder='Date'
              onChange={handleChange}
            />
          </div>
          <div className='field'>
            <label>Daily Hours</label>
            <input
              name='day[0].dailyHours'
              type='number'
              placeholder='Daily Hours'
              onChange={handleChange}
            />
          </div>
          <div className='field'>
            <label>Day Off?</label>
            <select
              name='day[0].dayOff'
              className='ui fluid dropdown'
              onChange={handleChange}
            >
              <option></option>
              <option value='true'>Yes</option>
              <option value='false'>No</option>
            </select>
          </div>
        </div>

        <div className='three fields'>
          <div className='field'>
            <label>Tuesday</label>
            <input
              name='day[1].date'
              type='text'
              placeholder='Date'
              onChange={handleChange}
            />
          </div>
          <div className='field'>
            <label>Daily Hours</label>
            <input
              name='day[1].dailyHours'
              type='number'
              placeholder='Daily Hours'
              onChange={handleChange}
            />
          </div>
          <div className='field'>
            <label>Day Off?</label>
            <select
              name='day[1].dayOff'
              className='ui fluid dropdown'
              onChange={handleChange}
            >
              <option></option>
              <option value='true'>Yes</option>
              <option value='false'>No</option>
            </select>
          </div>
        </div>

        <div className='three fields'>
          <div className='field'>
            <label>Wednesday</label>
            <input
              name='day[2].date'
              type='text'
              placeholder='Date'
              onChange={handleChange}
            />
          </div>
          <div className='field'>
            <label>Daily Hours</label>
            <input
              name='day[2].dailyHours'
              type='number'
              placeholder='Daily Hours'
              onChange={handleChange}
            />
          </div>
          <div className='field'>
            <label>Day Off?</label>
            <select
              name='day[2].dayOff'
              className='ui fluid dropdown'
              onChange={handleChange}
            >
              <option></option>
              <option value='true'>Yes</option>
              <option value='false'>No</option>
            </select>
          </div>
        </div>

        <div className='three fields'>
          <div className='field'>
            <label>Thursday</label>
            <input
              name='day[3].date'
              type='text'
              placeholder='Date'
              onChange={handleChange}
            />
          </div>
          <div className='field'>
            <label>Daily Hours</label>
            <input
              name='day[3].dailyHours'
              type='number'
              placeholder='Daily Hours'
              onChange={handleChange}
            />
          </div>
          <div className='field'>
            <label>Day Off?</label>
            <select
              name='day[3].dayOff'
              className='ui fluid dropdown'
              onChange={handleChange}
            >
              <option></option>
              <option value='true'>Yes</option>
              <option value='false'>No</option>
            </select>
          </div>
        </div>

        <div className='three fields'>
          <div className='field'>
            <label>Friday</label>
            <input
              name='day[4].date'
              type='text'
              placeholder='Date'
              onChange={handleChange}
            />
          </div>
          <div className='field'>
            <label>Daily Hours</label>
            <input
              name='day[4].dailyHours'
              type='number'
              placeholder='Daily Hours'
              onChange={handleChange}
            />
          </div>
          <div className='field'>
            <label>Day Off?</label>
            <select
              name='day[4].dayOff'
              className='ui fluid dropdown'
              onChange={handleChange}
            >
              <option></option>
              <option value='true'>Yes</option>
              <option value='false'>No</option>
            </select>
          </div>
        </div>

        <div className='three fields'>
          <div className='field'>
            <label>Saturday</label>
            <input
              name='day[5].date'
              type='text'
              placeholder='Date'
              onChange={handleChange}
            />
          </div>
          <div className='field'>
            <label>Daily Hours</label>
            <input
              name='day[5].dailyHours'
              type='number'
              placeholder='Daily Hours'
              onChange={handleChange}
            />
          </div>
          <div className='field'>
            <label>Day Off?</label>
            <select
              name='day[5].dayOff'
              className='ui fluid dropdown'
              onChange={handleChange}
            >
              <option></option>
              <option value='true'>Yes</option>
              <option value='false'>No</option>
            </select>
          </div>
        </div>

        <div className='three fields'>
          <div className='field'>
            <label>Sunday</label>
            <input
              name='day[6].date'
              type='text'
              placeholder='Date'
              onChange={handleChange}
            />
          </div>
          <div className='field'>
            <label>Daily Hours</label>
            <input
              name='day[6].dailyHours'
              type='number'
              placeholder='Daily Hours'
              onChange={handleChange}
            />
          </div>
          <div className='field'>
            <label>Day Off?</label>
            <select
              name='day[6].dayOff'
              className='ui fluid dropdown'
              onChange={handleChange}
            >
              <option></option>
              <option value='true'>Yes</option>
              <option value='false'>No</option>
            </select>
          </div>
        </div>

        <div className='centered'>
          <button className='ui button'>Edit</button>
        </div>
      </form>
    </>
  );
};

export default EditWeek;
