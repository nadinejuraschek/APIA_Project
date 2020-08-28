// REACT
import React, { useContext, useState } from 'react';

// NPM PACKAGES
import axios from 'axios';
import moment from 'moment';

// COMPONENTS
import Header from '../../components/Header';
// import Filer from '../../components/Filer';
import Flag from '../../components/Flag';
import ProfileInput from '../../components/Input/Profile';
import Primary from '../../components/Button/Primary';
import PeopleList from '../../components/List/People';

// IMAGES
import blankPic from '../../images/blankProfile.svg';

// CONTEXTS
import { UserContext } from '../../contexts/UserContext';

// STYLES
import styles from './auth.module.css';

const Profile = () => {
  const [user, setUser, editUser] = useContext(UserContext);
  const daysNum = moment(new Date()).diff(user.startDate, 'days');

  const [email, setEmail] = useState(user.email);
  const [birthday, setBirthday] = useState(user.birthday || '');
  const [location, setLocation] = useState(user.location || '');
  const [phone, setPhone] = useState(user.phone || '');
  const [facebook, setFacebook] = useState(user.facebook || '');
  const [instagram, setInstagram] = useState(user.instagram || '');
  const [twitter, setTwitter] = useState(user.twitter || '');
  const [snapchat, setSnapchat] = useState(user.snapchat || '');
  const [familyID, setFamilyID] = useState(user.familyID);
  const [edit, setEdit] = useState(false);

  const toggleEdit = () => {
    edit ? setEdit(false) : setEdit(true);
  };

  const hostparents = [
    {
      type: 'hostparent',
      name: 'Mom',
      profileImg: '',
    },
    {
      type: 'hostparent',
      name: 'Dad',
      profileImg: '',
    },
  ];

  const hostchildren = [
    {
      type: 'hostchild',
      name: 'Child',
      birthday: '2013-01-30T22:00:00.000Z',
      profileImg: '',
    },
    {
      type: 'hostchild',
      name: 'Child',
      birthday: '2017-06-03T22:00:00.000Z',
      profileImg: '',
    },
    {
      type: 'hostchild',
      name: 'Child',
      birthday: '2020-04-09T22:00:00.000Z',
      profileImg: '',
    },
  ];

  const handleEdit = event => {
    event.preventDefault();
    axios.put('/api/user/' + user._id, {
      email: email,
      familyID: familyID,
      birthday: birthday,
      location: location,
      phone: phone,
      contact: {
        facebook: facebook,
        instagram: instagram,
        twitter: twitter,
        snapchat: snapchat
      }
    }).then(updatedUser => {
      console.log("Updated User in DB: ", updatedUser);
      setEdit(false);
    }).catch(err => {
      console.log("Error: ", err);
      setEdit(false);
    });
  };

  return (
    <main>
      <div className={styles.grid}>
        <h2 className={styles.header}>Your Profile</h2>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={blankPic} alt={user.firstname} />
          {/* <Filer /> */}
        </div>
        <div className={styles.details}>
          <div className={styles.name}>
            <h2>
              {user.firstname} {user.lastname}
            </h2>
            <Flag country={user.country} />
          </div>
            <div className={styles.buttons}>
              {
                edit
                ?
                <Primary label='Update' handleClick={handleEdit} />
                :
                <Primary label='Edit' handleClick={toggleEdit} />
              }
              <button className='ui disabled button'>Change Password</button>
            </div>
            <h4 className={`ui dividing header ${styles.personalHeader}`}>Personal Info</h4>
              <div className={styles.info}>
                <ProfileInput
                  edit={edit}
                  handleChange={setEmail}
                  icon='envelope outline'
                  label='E-Mail'
                  name='email'
                  value={email}
                />
                <ProfileInput
                  edit={edit}
                  handleChange={setBirthday}
                  icon='birthday cake'
                  label='Birthday'
                  name='birthday'
                  value={birthday}
                />
                <ProfileInput
                  edit={edit}
                  handleChange={setLocation}
                  icon='map marker alternate'
                  label='Location'
                  name='location'
                  value={location}
                />
                <ProfileInput
                  edit={edit}
                  handleChange={setPhone}
                  icon='phone alternate'
                  label='Phone'
                  name='phone'
                  value={phone}
                />
              </div>
              <div className={styles.connect}>
                <ProfileInput
                  edit={edit}
                  handleChange={setFacebook}
                  icon='facebook alternate'
                  label='Facebook'
                  name='facebook'
                  value={facebook}
                />
                <ProfileInput
                  edit={edit}
                  handleChange={setInstagram}
                  icon='instagram alternate'
                  label='Instagram'
                  name='instagram'
                  value={instagram}
                />
                <ProfileInput
                  edit={edit}
                  handleChange={setTwitter}
                  icon='twitter alternate'
                  label='Twitter'
                  name='twitter'
                  value={twitter}
                />
                <ProfileInput
                  edit={edit}
                  handleChange={setSnapchat}
                  icon='snapchat square alternate'
                  label='Snapchat'
                  name='snapchat'
                  value={snapchat}
                />
            </div>
        </div>

        <div className={styles.hostfamily}>
          <h4 className='ui dividing header'>Host Family Info</h4>
          <div className={styles.familyInfo}>
            <div>
              <ProfileInput
                edit={edit}
                handleChange={setFamilyID}
                icon='id card outline'
                label='Host Family ID'
                name='familyID'
                value={familyID}
              />
              <PeopleList data={hostparents} label='Host Parents' />
            </div>
            <PeopleList data={hostchildren} label='Host Children' />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
