// REACT
import React from 'react';

// ICONS
// import logo from '../../images/logo.svg';
import notebook from '../../images/book.svg';
import hostfamily from '../../images/family.svg';
import cluster from '../../images/cluster.svg';

// COMPONENTS
import NavLink from './NavLink';

// CONTEXTS
import { UserProvider } from 'contexts/UserContext';

// STYLES
import styles from './nav.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <a className={styles.logo} href='/home'>
        {/* <div className={styles.navLogo}>
          <img alt='App Logo' src={logo} />
        </div> */}
        <p>On Par</p>
      </a>

      <UserProvider>
        <NavLink
          iconSrc={notebook}
          label='Messages'
          link='/messages'
        />

        <NavLink
          iconSrc={notebook}
          label='Notebook'
          link='/notebook'
        />

        <NavLink
          iconSrc={hostfamily}
          label='Host Family'
          link='/hostfamily'
        />

        <NavLink
          iconSrc={cluster}
          label='Cluster'
          link='/cluster'
        />

        <NavLink
          iconSrc={cluster}
          label='Resources'
          link='/resources'
        />

        <div className={styles.footer}>
          <p>© {new Date().getFullYear()}</p>
        </div>
      </UserProvider>
    </nav>
  );
};

export default Navbar;
