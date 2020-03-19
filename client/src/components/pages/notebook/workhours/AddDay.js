// REACT
import React, { useState } from 'react';

// NPM PACKAGES
import axios from 'axios';

const AddDay = ({ workhour, workhourid, getWorkhours, deleteWorkhours}) => {
  const [ updatedHours, setUpdatedHours ] = useState({});
  const [ show, setShow ] = useState(false);

  const handleEdit = event => {
    event.preventDefault();
    // console.log('Updated workhours to send to DB: ' + updatedHours);
    axios.put('/api/workhours/' + workhourid, updatedHours)
    .then(res => {
      console.log('Updated workhours in DB: ' + res.data);
      getWorkhours();
      show == true ? setShow(false) : setShow(true);
    }).catch(error => {
      console.log('Error: ' + error.response);
    });
  };

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setUpdatedHours(updatedHours => ({...updatedHours, [name]: value }));
    // console.log(updatedHours);
  };

  return (
    <>
      <div className="ui dividing header">Add A Day</div>
      <form className="ui form" onSubmit={handleEdit}>
        <div className="two fields">
            <div className="field">
                <label>Date</label>
                <input name="date" type="text" placeholder="Date" onChange={handleChange} />
            </div>
            <div className="field">
                <label>Total Hours</label>
                <input name="dailyHours" type="number" placeholder="Daily Hours" onChange={handleChange} />
            </div>
        </div>
        <div className="centered">
          <button className="circular ui icon button"><i className="plus icon"></i></button>
        </div>
      </form> 
    </>
  )
};

export default AddDay;