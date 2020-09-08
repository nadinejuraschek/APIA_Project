// REACT
import React from 'react';

// STYLES
import styles from './goals.module.css';

// ICONS
import education from 'images/education.svg';
import personal from 'images/personal.svg';
import travel from 'images/travel.svg';

const GoalItem = ({ text, type }) => {
  return (
    <li className={styles.item}>
      <div className={styles.icon}>
        {
          type === "education"
          ?
          <img src={education} alt={text} />
          :
          type === "travel"
          ?
          <img src={travel} alt={text} />
          :
          <img src={personal} alt={text} />
        }
      </div>
      <div>{text}</div>
    </li>
  );
};

export default GoalItem;
