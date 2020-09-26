// REACT
import React from 'react';

// STYLES
import styles from './resources.module.css';

const ResourceItem = ({ active, icon, label, link }) => {
  return (
    <a className={`${styles.item} ${active ? '' : styles.inactive}`} href={link}>
      <div className={styles.icon}>
        <img src={icon} alt={label} />
      </div>
      <p className={styles.label}>{label}</p>
    </a>
  );
};

export default ResourceItem;