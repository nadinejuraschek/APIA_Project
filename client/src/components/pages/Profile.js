import React, { useContext } from 'react';

import Header from '../Header';

import userPic from '../../images/user.jpg';
import blankPic from '../../images/blankProfile.svg';

import { UserContext } from '../../contexts/UserContext';

const Profile = () => {
    const [ user, setUser ] = useContext(UserContext);

    let countryName;
    let countryFlag = user.country + ' flag';;

        if (user.country === 'ar') {
            countryName = 'Argentina'
            countryFlag = user.country + ' flag';
        } else if (user.country === 'au') {
            countryName = 'Australia'
        } else if (user.country === 'at') {
            countryName = 'Austria'
        } else if (user.country === 'bo') {
            countryName = 'Bolivia'
        } else if (user.country === 'ba') {
            countryName = 'Bosnia'
        } else if (user.country === 'br') {
            countryName = 'Brazil'
        } else if (user.country === 'ca') {
            countryName = 'Canada'
        } else if (user.country === 'cl') {
            countryName = 'Chile'
        } else if (user.country === 'cn') {
            countryName = 'China'
        } else if (user.country === 'co') {
            countryName = 'Colombia'
        } else if (user.country === 'cr') {
            countryName = 'Costa Rica'
        } else if (user.country === 'hr') {
            countryName = 'Croatia'
        } else if (user.country === 'cz') {
            countryName = 'Czech Republic'
        } else if (user.country === 'dk') {
            countryName = 'Denmark'
        } else if (user.country === 'ec') {
            countryName = 'Ecuador'
        } else if (user.country === 'sv') {
            countryName = 'El Salvador'
        } else if (user.country === 'ee') {
            countryName = 'Estonia'
        } else if (user.country === 'fi') {
            countryName = 'Finland'
        } else if (user.country === 'fr') {
            countryName = 'France'
        } else if (user.country === 'de') {
            countryName = 'Germany'
        } else if (user.country === 'gt') {
            countryName = 'Guatemala'
        } else if (user.country === 'hu') {
            countryName = 'Hungary'
        } else if (user.country === 'ie') {
            countryName = 'Ireland'
        } else if (user.country === 'il') {
            countryName = 'Israel'
        } else if (user.country === 'it') {
            countryName = 'Italy'
        } else if (user.country === 'lv') {
            countryName = 'Latvia'
        } else if (user.country === 'mx') {
            countryName = 'Mexico'
        } else if (user.country === 'nl') {
            countryName = 'Netherlands'
        } else if (user.country === 'nz') {
            countryName = 'New Zealand'
        } else if (user.country === 'pa') {
            countryName = 'Panama'
        } else if (user.country === 'pe') {
            countryName = 'Peru'
        } else if (user.country === 'pl') {
            countryName = 'Poland'
        } else if (user.country === 'pt') {
            countryName = 'Portugal'
        } else if (user.country === 'ru') {
            countryName = 'Russia'
        } else if (user.country === 'cs') {
            countryName = 'Serbia'
        } else if (user.country === 'sk') {
            countryName = 'Slovakia'
        } else if (user.country === 'za') {
            countryName = 'South Africa'
        } else if (user.country === 'kr') {
            countryName = 'South Korea'
        } else if (user.country === 'es') {
            countryName = 'Spain'
        } else if (user.country === 'se') {
            countryName = 'Sweden'
        } else if (user.country === 'ch') {
            countryName = 'Switzerland'
        } else if (user.country === 'th') {
            countryName = 'Thailand'
        } else if (user.country === 'tr') {
            countryName = 'Turkey'
        } else if (user.country === 'ua') {
            countryName = 'Ukraine'
        } else if (user.country === 'gb') {
            countryName = 'United Kingdom'
        }

    return (
        <section className="wrapper">
            <div className="block">
                <Header header="Your Profile" />
                <div className="ui stackable grid">
                    <div className="row">
                        <div className="six wide column">
                            <div className="ui fluid card">
                                <div className="image">
                                    <img src={userPic} alt="au pair" />
                                </div>
                            </div>
                        </div>
                        <div className="ten wide column">
                            <div className="ui segment">
                                <h2>{ user.firstname } { user.lastname }</h2>
                                <p className="meta">
                                    <i class={ countryFlag }></i>
                                    <strong>Home Country:  </strong> 
                                    { countryName }
                                </p>
                                <h4 className="ui dividing header">Personal Info</h4>
                                <div>
                                    <p>
                                        <strong>E-Mail: </strong>
                                        { user.email }
                                    </p>
                                    {/* <p>
                                        <strong>Phone:</strong>
                                        { user.phone }
                                    </p> */}
                                    <p>
                                        <strong>Location:</strong> 
                                        
                                    </p>
                                    <button className="ui disabled button">Change Password</button>
                                </div>
                                {/* <h4 className="ui dividing header">Host Family Info</h4>
                                <div>
                                    <div>Host Family ID: </div>
                                    <div>
                                        Host Parents: 
                                        <div className="ui tiny images hostparents">
                                            <img className="ui image" src={blankPic} alt="hostparent" />
                                            <img className="ui image" src={blankPic} alt="hostparent" />
                                        </div>
                                    </div>
                                    <div>
                                        Host Children:
                                        <div className="ui tiny images hostkids">
                                            <img className="ui image" src={blankPic} alt="hostchild" />
                                            <img className="ui image" src={blankPic} alt="hostchild" />
                                            <img className="ui image" src={blankPic} alt="hostchild" />
                                        </div>
                                    </div>
                                </div> */}
                                <h4 className="ui dividing header"> </h4>
                                <button className="ui button">Edit</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Profile;