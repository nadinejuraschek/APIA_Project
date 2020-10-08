// REACT
import React, { useContext, useState } from 'react';

// STYLES
import styles from '../messages.module.css';

// COMPONENTS
import Contacts from 'components/List/Contacts';

// CONTEXTS
import { UserContext } from 'contexts/UserContext';

const Sidebar = () => {
  // const [ user ] = useContext(UserContext);
  const [ tab, setTab ] = useState('family');

  return (
    <div className={styles.sidebar}>
      <div className={styles.tabs}>
        <button className={`${styles.tab} ${ tab === 'family' ? styles.activeTab : ''}`} onClick={() => setTab('family')}>
          Host Family
        </button>
        <button className={`${styles.tab} ${ tab === 'cluster' ? styles.activeTab : ''}`} onClick={() => setTab('cluster')}>
          Cluster
        </button>
      </div>
      <Contacts />
    </div>
  );
};

export default Sidebar;