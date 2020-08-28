// REACT
import React, { useContext, useState } from 'react';
import { withRouter } from 'react-router';

// ICONS
import logo from '../../images/logo.svg';
import notebook from '../../images/book.svg';
import hostfamily from '../../images/family.svg';
import cluster from '../../images/cluster.svg';

// NPM PACKAGES
import axios from 'axios';

// CONTEXT
import { UserContext } from '../../contexts/UserContext';

// STYLES
import styles from './nav.module.css';

const Navbar = ({ history }) => {
  const [user] = useContext(UserContext);

  const handleLogout = () => {
    axios({
      url: '/api/user/signout',
      method: 'POST',
    }).then(response => {
      history.push('/login');
    });
  };

  return (
    <nav className={styles.nav}>
      <a className={styles.logo} href='/home'>
        <div className={styles.navLogo}>
          <img alt='App Logo' src={logo} />
        </div>
        On Par
      </a>

      <a className={styles.navLink} href='/messages'>
        <div className={styles.icon}>
          <img alt='Messages' src={notebook} />
        </div>
        <p>Messages</p>
      </a>

      <a className={styles.navLink} href='/notebook'>
        <div className={styles.icon}>
          <img alt='Notebook' src={notebook} />
        </div>
        <p>Notebook</p>
      </a>

      <a className={styles.navLink} href='/hostfamily'>
        <div className={styles.icon}>
          <img alt='Host Family' src={hostfamily} />
        </div>
        <p>Host Family</p>
      </a>

      <a className={styles.navLink} href='/cluster'>
        <div className={styles.icon}>
          <img alt='Cluster' src={cluster} />
        </div>
        <p>Cluster</p>
      </a>

      <a className={styles.navLink} href='/resources'>
        <div className={styles.icon}>
          <img alt='Resources' src={cluster} />
        </div>
        <p>Resources</p>
      </a>

      <div className={styles.footer}>
        <p>© {new Date().getFullYear()}</p>
      </div>
    </nav>
    // <nav className='ui huge top fixed menu'>
    //   <a className='header item' href='/home'>
    //     <img className='nav-logo' alt='App Logo' src={logo} />
    //     On Par
    //   </a>

    //   <div className='right menu'>
    //     {user ? (
    //       <div className='ui simple dropdown item'>
    //         <i className='user large circle icon'></i>
    //         <i className='dropdown icon'></i>
    //         <div className='menu'>
    //           <a className='item' href='/profile'>
    //             Profile
    //           </a>
    //           <a className='item' href='/emergencynumbers'>
    //             Emergency Numbers
    //           </a>
    //           <button className='item' onClick={handleLogout}>
    //             Log Out
    //           </button>
    //         </div>
    //       </div>
    //     ) : (
    //       <a className='item' href='/login'>
    //         Log In
    //       </a>
    //     )}
    //   </div>
    // </nav>
  );
};

export default withRouter(Navbar);
