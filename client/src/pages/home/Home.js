// REACT
import React, { useContext, useState } from 'react';
import { withRouter } from 'react-router';

// NPM PACKAGES
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

// COMPONENTS
import Countdown from '../../components/Countdown';
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

// TOASTIFY CONFIG & STYLE
toast.configure({
  autoClose: 8000,
  draggable: false,
});

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

  const activities = [
    'Finger paint with shaving cream on colored paper.',
    'Decorate a small clay pot. Plant flower seeds, nurture, and watch them grow!',
    'Cut paper dolls from magazines.',
    'Draw a picture or write a card and send it to the grandparents.',
    'Hide a kitchen timer and have your host child search for it by listening for its ticking sound.',
    'Go to the Post Office. Let your host children send letters to themselves and watch for the mailman the next day.',
    'Go exploring with a magnifying glass.',
    'Build a pinecone pyramid and kick it down!',
    'Catch bugs in a plastic jar and make a bug zoo. (Make sure you poke air holes in the lid.',
    'Make a design punching holes in a paper plate. String a showlace through the holes.',
    'Draw faces on balloons with permanent markers. (Watercolor markers wear off.',
    'Learn to play hopscotch.',
    'Light Show: Punch holes in the bottom of an oatmeal container or show box. Shine a flashlight through the box toward the ceiling in a darkened room. (Excellent for nap-resisting toddlers!',
    'Dramatic play: Let your host children play store with their toys. Draw, color, and cut out paper money.',
    'Make a sponge garden. Soak a sponge in water and place on a shallow dish. Sprinkle with alfalfa or rye grass seeds. Keep sponge moist and watch it grow.',
    'Plant your own garden!',
    'Make a book: Have your host children create books about themselves. Include their birth date, handprints, foot prints, drawings, and stories of themselves and their family. These are wondeful keepsakes!',
    "Make placemats by covering your host child's artwork with clear contact paper.",
  ];

  // const notify = () => toast(activities[Math.floor(Math.random() * 18 + 1)]);

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
          {/* <button className='ui button activity-button' onClick={notify}>
              Childcare activity, please!
            </button> */}
        </div>

        <div className={styles.hours}>
          <Workhours />
        </div>

        <div className={styles.today}>
          <Today />
        </div>

        <div className={styles.reminders}>
          <Reminders />
        </div>

        <div className={styles.countdown}>
          <Countdown
            startDate={user.startDate}
            endDate={user.endDate}
            message={message}
            setMessage={setMessage}
          />
        </div>

        <div className={styles.misc}>
        </div>
      </div>
    </main>
  );
};

export default withRouter(Home);
