import React from 'react';

import Header from '../../components/Header';
import FeatureCard from '../../components/FeatureCard';

import hoursIcon from '../../images/hours.svg';
import paymentIcon from '../../images/payment.svg';
import goalIcon from '../../images/goal.svg';
import notesIcon from '../../images/note.svg';

const Notebook = () => {
  return (
    <section className='wrapper'>
      <div className='block'>
        <Header header='My Notebook' />

        <div className='ui stackable grid'>
          <div className='four wide column centered'>
            <FeatureCard
              title='workhours'
              header='Work Hours'
              icon={hoursIcon}
              link='/notebook/workhours'
            />
          </div>

          <div className='four wide column centered'>
            <FeatureCard
              title='payment'
              header='Payments'
              icon={paymentIcon}
              link='/notebook/payments'
            />
          </div>

          <div className='four wide column centered'>
            <FeatureCard
              title='goals'
              header='Goals'
              icon={goalIcon}
              link='/notebook/goals'
            />
          </div>

          <div className='four wide column centered'>
            <FeatureCard
              title='notes'
              header='Notes'
              icon={notesIcon}
              link='/notebook/notes'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notebook;
