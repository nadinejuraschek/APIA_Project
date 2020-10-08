// REACT
import React from 'react';

// STYLES
import styles from './contacts.module.css';

// COMPONENTS
import ContactItem from './ContactItem';

const Contacts = () => {
  return (
    <div className={styles.list}>
      <ContactItem name="Jessica M." />
    </div>
  );
};

export default Contacts;
