import React from 'react';
import userPic from '../../images/user.jpg';
import blankPic from '../../images/blankProfile.svg';

const Profile = () => {
    return (
        <section className="wrapper">
            <div className="block">
        
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
                                <h2>Zoe Example</h2>
                                <p className="meta">
                                    <i class="globe icon"></i>
                                    Home Country: Brazil
                                </p>
                                <h4 className="ui dividing header">Personal Info</h4>
                                <div>
                                    <p>E-Mail: </p>
                                    <p>Phone: </p>
                                    <p>US Address: </p>
                                    <button className="ui button">Change Password</button>
                                </div>
                                <h4 className="ui dividing header">Host Family Info</h4>
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
                                </div>
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