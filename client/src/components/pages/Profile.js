import React, { useContext } from 'react';

import Header from '../Header';

import userPic from '../../images/user.jpg';
import blankPic from '../../images/blankProfile.svg';

import { UserContext } from '../../contexts/UserContext';

const Profile = () => {
    const [ user, setUser ] = useContext(UserContext);

    // const displayFlag = () => {
    //     if (user.country === 'Argentina') {
    //         <i class="ar flag"></i>
    //     } else if (user.country === 'Australia') {
    //         <i class="au flag"></i>
    //     } else if (user.country === 'Austria') {
    //         <i class="at flag"></i>
    //     } else if (user.country === 'Bolivia') {
    //         <i class="bo flag"></i>
    //     } else if (user.country === 'Bosnia') {
    //         <i class="ba flag"></i>
    //     } else if (user.country === 'Brazil') {
    //         <i class="br flag"></i>
    //     } else if (user.country === 'Canada') {
    //         <i class="ca flag"></i>
    //     } else if (user.country === 'Chile') {
    //         <i class="cl flag"></i>
    //     } else if (user.country === 'China') {
    //         <i class="cn flag"></i>
    //     } else if (user.country === 'Colombia') {
    //         <i class="co flag"></i>
    //     } else if (user.country === 'Costa Rica') {
    //         <i class="cr flag"></i>
    //     } else if (user.country === 'Croatia') {
    //         <i class="hr flag"></i>
    //     } else if (user.country === 'Czech Republic') {
    //         <i class="cz flag"></i>
    //     } else if (user.country === 'Denmark') {
    //         <i class="dk flag"></i>
    //     } else if (user.country === 'Ecuador') {
    //         <i class="ec flag"></i>
    //     } else if (user.country === 'El Salvador') {
    //         <i class="sv flag"></i>
    //     } else if (user.country === 'Estonia') {
    //         <i class="ee flag"></i>
    //     } else if (user.country === 'Finland') {
    //         <i class="fi flag"></i>
    //     } else if (user.country === 'France') {
    //         <i class="fr flag"></i>
    //     } else if (user.country === 'Germany') {
    //         <i class="de flag"></i>
    //     } else if (user.country === 'Guatemala') {
    //         <i class="gt flag"></i>
    //     } else if (user.country === 'Hungary') {
    //         <i class="hu flag"></i>
    //     } else if (user.country === 'Ireland') {
    //         <i class="ie flag"></i>
    //     } else if (user.country === 'Israel') {
    //         <i class="il flag"></i>
    //     } else if (user.country === 'Italy') {
    //         <i class="it flag"></i>
    //     } else if (user.country === 'Latvia') {
    //         <i class="lv flag"></i>
    //     } else if (user.country === 'Mexico') {
    //         <i class="mx flag"></i>
    //     } else if (user.country === 'Netherlands') {
    //         <i class="nl flag"></i>
    //     } else if (user.country === 'New Zealand') {
    //         <i class="nz flag"></i>
    //     } else if (user.country === 'Panama') {
    //         <i class="pa flag"></i>
    //     } else if (user.country === 'Peru') {
    //         <i class="pe flag"></i>
    //     } else if (user.country === 'Poland') {
    //         <i class="pl flag"></i>
    //     } else if (user.country === 'Portugal') {
    //         <i class="pt flag"></i>
    //     } else if (user.country === 'Russia') {
    //         <i class="ru flag"></i>
    //     } else if (user.country === 'Serbia') {
    //         <i class="cs flag"></i>
    //     } else if (user.country === 'Slovakia') {
    //         <i class="sk flag"></i>
    //     } else if (user.country === 'South Africa') {
    //         <i class="za flag"></i>
    //     } else if (user.country === 'South Korea') {
    //         <i class="kr flag"></i>
    //     } else if (user.country === 'Spain') {
    //         <i class="es flag"></i>
    //     } else if (user.country === 'Sweden') {
    //         <i class="se flag"></i>
    //     } else if (user.country === 'Switzerland') {
    //         <i class="ch flag"></i>
    //     } else if (user.country === 'Thailand') {
    //         <i class="th flag"></i>
    //     } else if (user.country === 'Turkey') {
    //         <i class="tr flag"></i>
    //     } else if (user.country === 'Ukraine') {
    //         <i class="ua flag"></i>
    //     } else if (user.country === 'United Kingdom') {
    //         <i class="gb flag"></i>
    //     }
    // }; 

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
                                <h2>{ user.firstname} {user.lastname}</h2>
                                <p className="meta">
                                    <i class="globe icon"></i>
                                    <strong>Home Country: </strong> { user.country }
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
                                    <button className="ui button">Change Password</button>
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