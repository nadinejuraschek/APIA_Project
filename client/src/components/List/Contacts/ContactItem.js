// REACT
import React from 'react';

// STYLES
import styles from './contacts.module.css';

// ICONS
import blankProfile from 'images/blankProfile.svg';

const ContactItem = ({ avatar, name }) => {
  return (
    <div className={styles.item}>
      <div className={styles.avatar}>
        <img src={avatar || blankProfile} alt={name} />
      </div>
      <div className={styles.details}>
        <div className={styles.contactName}>
          {name}
        </div>
        <div className={styles.messagePreview}>
          This is a preview of the latest message sent by this contact.
        </div>
      </div>
    </div>
  );
};

export default ContactItem;