import React from 'react';

const Dev = () => {
  return (
    <section className='wrapper'>
      <div className='block'>
        <div className='custom-container'>
          <h2>This feature is currently in development.</h2>
          <h4>Check back soon!</h4>
          <p>
            <a href='/home'>
              <i className='arrow left icon'></i>
              Go Back
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Dev;