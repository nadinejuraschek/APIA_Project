import React from 'react';

const WrongTurn = () => {
  return (
    <section className='wrapper'>
      <div className='block'>
        <h2>You took a wrong turn!</h2>
        <p>
          <a href='/home'>
            <i className='arrow left icon'></i>
            Go Back
          </a>
        </p>
      </div>
    </section>
  );
};

export default WrongTurn;
