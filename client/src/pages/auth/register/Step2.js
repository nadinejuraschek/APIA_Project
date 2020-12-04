// REACT
import { useState } from 'react';

const Step2 = ({ formRef }) => {
  return (
    <>
      {/* <div>
        <h3>I am a</h3>
        <div>
          <div style={{ backgroundColor: 'lightblue', height: '60px', width: '60px' }}></div>
          <label>Au Pair</label>
        </div>
        <div>
          <div style={{ backgroundColor: 'lightblue', height: '60px', width: '60px' }}></div>
          <label>Host Family Member</label>
        </div>
        <div>
          <div style={{ backgroundColor: 'lightblue', height: '60px', width: '60px' }}></div>
          <label>Community Counselor</label>
        </div>
      </div> */}
      <div>
        <label>Home Country</label>
        <input name='country' type='text' placeholder='Home Country' ref={formRef}/>
      </div>
      <div>
        <label>Arrival Date</label>
        <input name='arrival' type='text' placeholder='Arrival Date' ref={formRef} />
      </div>
    </>
  );
};

export default Step2;