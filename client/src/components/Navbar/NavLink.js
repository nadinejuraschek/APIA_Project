// REACT
import React from 'react';
import { withRouter } from 'react-router';

// STYLES
import styles from './nav.module.css';

const NavLink = ({ label, iconSrc, link, location } ) => {
    console.log("Pathname: ", location.pathname);
  return (
    <a
      className={styles.navLink}
      href={link}
    >
      <div className={styles.icon}>
        <img alt={label} src={iconSrc} />
      </div>
      <p className={link === location.pathname ? '' : styles.hide}>{label}</p>
    </a>
  );
};

export default withRouter(NavLink);
