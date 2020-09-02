// REACT
import React, { useState, useEffect, createContext } from 'react';

// NPM PACKAGES
import axios from 'axios';

// CONTEXT
export const WorkhourContext = createContext();

export const WorkhourProvider = props => {
  const [workhours, setWorkhours] = useState([]);

  useEffect(() => {
    getWorkhours();
  }, []);

  const getWorkhours = () => {
    axios({
      url: '/user/:id/workhours',
      method: 'GET',
    }).then(res => {
      // console.log(res.data.workhours);
      setWorkhours(res.data.workhours);
    });
  };

  const deleteWorkhours = workhourid => {
    axios.delete('/api/workhours/' + workhourid).then(res => {
      console.log(res);
      getWorkhours();
    });
  };

  return (
    <WorkhourContext.Provider
      value={{ workhours, getWorkhours, deleteWorkhours }}
    >
      {props.children}
    </WorkhourContext.Provider>
  );
};
