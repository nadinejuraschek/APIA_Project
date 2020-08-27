// REACT
import React, { useState, useContext } from 'react';

// NPM PACKAGES
import axios from 'axios';

// COMPONENTS
import Header from '../../../components/Header';
import WorkCard from './WorkCard';

// CONTEXT
import { WorkHourContext } from '../../../contexts/WorkHourContext';

const WorkHours = props => {
  const { workhours, getWorkhours, getWeek, deleteWorkhours } = useContext(
    WorkHourContext
  );
  const [show, setShow] = useState(false);

  const showAdd = () => {
    show === true ? setShow(false) : setShow(true);
  };

  const [newHours, setNewHours] = useState({
    number: 0,
    mon: {
      date: '',
      dailyHours: 0,
      dayOff: true,
    },
    tue: {
      date: '',
      dailyHours: 0,
      dayOff: true,
    },
    wed: {
      date: '',
      dailyHours: 0,
      dayOff: true,
    },
    thu: {
      date: '',
      dailyHours: 0,
      dayOff: true,
    },
    fri: {
      date: '',
      dailyHours: 0,
      dayOff: true,
    },
    sat: {
      date: '',
      dailyHours: 0,
      dayOff: true,
    },
    sun: {
      date: '',
      dailyHours: 0,
      dayOff: true,
    },
    weeklyHours: 0,
  });

  const handleSubmit = event => {
    event.preventDefault();
    // console.log('WorkHours sent to DB: ' + newHours);
    axios({
      url: '/api/workhours',
      method: 'POST',
      data: newHours,
    })
      .then(response => {
        console.log('WorkHours in DB: ' + response.data);
        getWorkhours();
        setNewHours({
          number: 0,
          mon: {
            date: '',
            dailyHours: 0,
            dayOff: true,
          },
          tue: {
            date: '',
            dailyHours: 0,
            dayOff: true,
          },
          wed: {
            date: '',
            dailyHours: 0,
            dayOff: true,
          },
          thu: {
            date: '',
            dailyHours: 0,
            dayOff: true,
          },
          fri: {
            date: '',
            dailyHours: 0,
            dayOff: true,
          },
          sat: {
            date: '',
            dailyHours: 0,
            dayOff: true,
          },
          sun: {
            date: '',
            dailyHours: 0,
            dayOff: true,
          },
          weeklyHours: 0,
        });
      })
      .catch(error => {
        console.log('Error: ' + error);
      });
  };

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setNewHours(newHours => ({ ...newHours, [name]: value }));
  };

  return (
    <section className='wrapper-scroll'>
      <div className='block'>
        <Header header='Your Work Hours' />

        <div className='custom-container'>
          <div className='ui stackable grid'>
            <div className='five column row'>
              {workhours.map(workhour => (
                <WorkCard
                  key={workhour._id}
                  workhourid={workhour._id}
                  workhour={workhour}
                  deleteWorkhours={deleteWorkhours}
                  getWorkhours={getWorkhours}
                  getWeek={getWeek}
                />
              ))}
            </div>
          </div>
        </div>

        <div class={show === true ? '' : 'hide'}>
          <form className='ui form' onSubmit={handleSubmit}>
            <div className='field'>
              <label>Week</label>
              <input
                name='number'
                type='number'
                min='1'
                max='52'
                placeholder='#'
                onChange={handleChange}
                value={newHours.number}
              />
            </div>
            <div className='three fields'>
              <div className='field'>
                <label>Monday</label>
                <input
                  name='mon.date'
                  type='text'
                  placeholder='Date'
                  onChange={handleChange}
                  // value={newHours.mon.date}
                />
              </div>
              <div className='field'>
                <label>Daily Hours</label>
                <input
                  name='mon.dailyHours'
                  type='number'
                  placeholder='Daily Hours'
                  onChange={handleChange}
                  // value={newHours.mon.dailyHours}
                />
              </div>
              <div className='field'>
                <label>Day Off?</label>
                <select
                  name='mon.dayOff'
                  className='ui fluid dropdown'
                  onChange={handleChange}
                  // value={newHours.mon.dayOff}
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
                  name='tue.date'
                  type='text'
                  placeholder='Date'
                  onChange={handleChange}
                  // value={newHours.tue.date}
                />
              </div>
              <div className='field'>
                <label>Daily Hours</label>
                <input
                  name='tue.dailyHours'
                  type='number'
                  placeholder='Daily Hours'
                  onChange={handleChange}
                  // value={newHours.tue.dailyHours}
                />
              </div>
              <div className='field'>
                <label>Day Off?</label>
                <select
                  name='tue.dayOff'
                  className='ui fluid dropdown'
                  onChange={handleChange}
                  // value={newHours.tue.dayOff}
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
                  name='wed.date'
                  type='text'
                  placeholder='Date'
                  onChange={handleChange}
                  // value={newHours.wed.date}
                />
              </div>
              <div className='field'>
                <label>Daily Hours</label>
                <input
                  name='wed.dailyHours'
                  type='number'
                  placeholder='Daily Hours'
                  onChange={handleChange}
                  // value={newHours.wed.dailyHours}
                />
              </div>
              <div className='field'>
                <label>Day Off?</label>
                <select
                  name='wed.dayOff'
                  className='ui fluid dropdown'
                  onChange={handleChange}
                  // value={newHours.wed.dayOff}
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
                  name='thu.date'
                  type='text'
                  placeholder='Date'
                  onChange={handleChange}
                  // value={newHours.thu.date}
                />
              </div>
              <div className='field'>
                <label>Daily Hours</label>
                <input
                  name='thu.dailyHours'
                  type='number'
                  placeholder='Daily Hours'
                  onChange={handleChange}
                  // value={newHours.thu.dailyHours}
                />
              </div>
              <div className='field'>
                <label>Day Off?</label>
                <select
                  name='thu.dayOff'
                  className='ui fluid dropdown'
                  onChange={handleChange}
                  // value={newHours.thu.dayOff}
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
                  name='fri.date'
                  type='text'
                  placeholder='Date'
                  onChange={handleChange}
                  // value={newHours.fri.date}
                />
              </div>
              <div className='field'>
                <label>Daily Hours</label>
                <input
                  name='fri.dailyHours'
                  type='number'
                  placeholder='Daily Hours'
                  onChange={handleChange}
                  // value={newHours.fri.dailyHours}
                />
              </div>
              <div className='field'>
                <label>Day Off?</label>
                <select
                  name='fri.dayOff'
                  className='ui fluid dropdown'
                  onChange={handleChange}
                  // value={newHours.fri.dayOff}
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
                  name='sat.date'
                  type='text'
                  placeholder='Date'
                  onChange={handleChange}
                  // value={newHours.sat.date}
                />
              </div>
              <div className='field'>
                <label>Daily Hours</label>
                <input
                  name='sat.dailyHours'
                  type='number'
                  placeholder='Daily Hours'
                  onChange={handleChange}
                  // value={newHours.sat.dailyHours}
                />
              </div>
              <div className='field'>
                <label>Day Off?</label>
                <select
                  name='sat.dayOff'
                  className='ui fluid dropdown'
                  onChange={handleChange}
                  // value={newHours.sat.dayOff}
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
                  name='sun.date'
                  type='text'
                  placeholder='Date'
                  onChange={handleChange}
                  // value={newHours.sun.date}
                />
              </div>
              <div className='field'>
                <label>Daily Hours</label>
                <input
                  name='sun.dailyHours'
                  type='number'
                  placeholder='Daily Hours'
                  onChange={handleChange}
                  // value={newHours.sun.dailyHours}
                />
              </div>
              <div className='field'>
                <label>Day Off?</label>
                <select
                  name='sun.dayOff'
                  className='ui fluid dropdown'
                  onChange={handleChange}
                  // value={newHours.sun.dayOff}
                >
                  <option></option>
                  <option value='true'>Yes</option>
                  <option value='false'>No</option>
                </select>
              </div>
            </div>

            <div className='centered button-container'>
              <button className='ui button'>Add</button>
            </div>
          </form>
        </div>

        {/* add a workweek */}
        <div className='centered'>
          {/* <form className="ui form" onSubmit={handleSubmit}>
                        <div className="field">
                            <input 
                                name="number" 
                                type="number" 
                                min="1" max="52" 
                                placeholder="Week #"
                                onChange={handleChange}
                            />
                        </div> */}
          <button className='circular ui icon button' onClick={() => showAdd()}>
            <i className='plus icon'></i>
          </button>
          {/* </form> */}
        </div>
      </div>
    </section>
  );
};

export default WorkHours;
