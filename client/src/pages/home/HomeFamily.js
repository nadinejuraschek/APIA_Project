// REACT
import React, { useContext, useState } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

// NPM PACKAGES
import axios from 'axios';

// COMPONENTS
import Today from '../../components/TodayView';
import Reminders from '../../components/ReminderView';
import Workhours from '../../components/WorkhourView';
import SecondaryBtn from '../../components/Button/Secondary';

// CONTEXTS
import { UserContext } from '../../contexts/UserContext';

// ICONS

// IMAGES
import blankProfile from '../../images/blankProfile.svg';

// STYLES
import styles from './home.module.css';

const Home = ({ history }) => {
  const [user] = useContext(UserContext);
  const [message, setMessage] = useState('');
  const time = new Date().getHours();
  let greeting;

  const handleLogout = () => {
    axios({
      url: '/api/user/signout',
      method: 'POST',
    }).then(res => {
      history.push('/login');
    });
  };

  if (time > 6 && time < 11) {
    greeting = `Good morning, ${user.firstname}!`;
  } else if (time >= 11 && time < 15) {
    greeting = `It's lunchtime, ${user.firstname}!`;
  } else if (time >= 15 && time < 18) {
    greeting = `Good afternoon, ${user.firstname}!`;
  } else if (time >= 18 && time < 23) {
    greeting = `Good evening, ${user.firstname}!`;
  } else {
    greeting = `Up so late, ${user.firstname}?`;
  }

  return (
    <main>
      <div className={styles.grid}>
        <div className={styles.header}>
          <div className={styles.greeting}>
            <img className={styles.profile} src={blankProfile} alt={user.firstname} />
            <h2>{greeting}</h2>
          </div>
          <h4>{message === '' ? 'What can I help you with?' : message}</h4>
          <div className={styles.buttons}>
            <SecondaryBtn link="/profile" label="Profile" />
            <SecondaryBtn label="Log Out" handleClick={handleLogout} />
          </div>
        </div>

        <div className={styles.hours}>

        </div>

        <div className={styles.today}>
          <Today />
        </div>

        <div className={styles.reminders}>
          <Reminders />
        </div>

        <div className={styles.countdown}>
        </div>

        <div className={styles.misc}>
        
        </div>
      </div>
    </main>
  );
};

export default withRouter(Home);
