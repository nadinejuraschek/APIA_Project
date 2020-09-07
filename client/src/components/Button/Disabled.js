import React from 'react';

// STYLES
import styles from './button.module.css';

const Disabled = ({ label }) => {
  return (
    <button className={styles.disabled}>
        {label}
    </button>
  );
};

export default Disabled;