import React, { useContext } from 'react';

import Header from '../Header';

import userPic from '../../images/user.jpg';
import blankPic from '../../images/blankProfile.svg';

import { UserContext } from '../../contexts/UserContext';

const Profile = () => {
    const [ user, setUser ] = useContext(UserContext);

    let countryName;

    const displayCountryName = () => {
        if (user.country === 'ar') {
            countryName = 'Argentina'
        } else if (user.country === 'au') {
            countryName = 'Australia'
            // <i class="au flag"></i>
        } else if (user.country === 'at') {
            countryName = 'Austria'
            // <i class="at flag"></i>
        } else if (user.country === 'bo') {
            countryName = 'Bolivia'
            // <i class="bo flag"></i>
        } else if (user.country === 'ba') {
            countryName = 'Bosnia'
            // <i class="ba flag"></i>
        } else if (user.country === 'br') {
            countryName = 'Brazil'
            // <i class="br flag"></i>
        } else if (user.country === 'ca') {
            countryName = 'Canada'
            // <i class="ca flag"></i>
        } else if (user.country === 'cl') {
            countryName = 'Chile'
            // <i class="cl flag"></i>
        } else if (user.country === 'cn') {
            countryName = 'China'
            // <i class="cn flag"></i>
        } else if (user.country === 'co') {
            countryName = 'Colombia'
            // <i class="co flag"></i>
        } else if (user.country === 'cr') {
            countryName = 'Costa Rica'
            // <i class="cr flag"></i>
        } else if (user.country === 'hr') {
            countryName = 'Croatia'
            // <i class="hr flag"></i>
        } else if (user.country === 'cz') {
            countryName = 'Czech Republic'
            // <i class="cz flag"></i>
        } else if (user.country === 'dk') {
            countryName = 'Denmark'
            // <i class="dk flag"></i>
        } else if (user.country === 'ec') {
            countryName = 'Ecuador'
            // <i class="ec flag"></i>
        } else if (user.country === 'sv') {
            countryName = 'El Salvador'
            // <i class="sv flag"></i>
        } else if (user.country === 'ee') {
            countryName = 'Estonia'
            // <i class="ee flag"></i>
        } else if (user.country === 'fi') {
            countryName = 'Finland'
            // <i class="fi flag"></i>
        } else if (user.country === 'fr') {
            countryName = 'France'
            // <i class="fr flag"></i>
        } else if (user.country === 'de') {
            countryName = 'Germany'
            // <i class="de flag"></i>
        } else if (user.country === 'gt') {
            countryName = 'Guatemala'
            // <i class="gt flag"></i>
        } else if (user.country === 'hu') {
            countryName = 'Hungary'
            // <i class="hu flag"></i>
        } else if (user.country === 'ie') {
            countryName = 'Ireland'
            // <i class="ie flag"></i>
        } else if (user.country === 'il') {
            countryName = 'Israel'
            // <i class="il flag"></i>
        } else if (user.country === 'it') {
            countryName = 'Italy'
            // <i class="it flag"></i>
        } else if (user.country === 'lv') {
            countryName = 'Latvia'
            // <i class="lv flag"></i>
        } else if (user.country === 'mx') {
            countryName = 'Mexico'
            // <i class="mx flag"></i>
        } else if (user.country === 'nl') {
            countryName = 'Netherlands'
            // <i class="nl flag"></i>
        } else if (user.country === 'nz') {
            countryName = 'New Zealand'
            // <i class="nz flag"></i>
        } else if (user.country === 'pa') {
            countryName = 'Panama'
            // <i class="pa flag"></i>
        } else if (user.country === 'pe') {
            countryName = 'Peru'
            // <i class="pe flag"></i>
        } else if (user.country === 'pl') {
            countryName = 'Poland'
            // <i class="pl flag"></i>
        } else if (user.country === 'pt') {
            countryName = 'Portugal'
            // <i class="pt flag"></i>
        } else if (user.country === 'ru') {
            countryName = 'Russia'
            // <i class="ru flag"></i>
        } else if (user.country === 'cs') {
            countryName = 'Serbia'
            // <i class="cs flag"></i>
        } else if (user.country === 'sk') {
            countryName = 'Slovakia'
            // <i class="sk flag"></i>
        } else if (user.country === 'za') {
            countryName = 'South Africa'
            // <i class="za flag"></i>
        } else if (user.country === 'kr') {
            countryName = 'South Korea'
            // <i class="kr flag"></i>
        } else if (user.country === 'es') {
            countryName = 'Spain'
            // <i class="es flag"></i>
        } else if (user.country === 'se') {
            countryName = 'Sweden'
            // <i class="se flag"></i>
        } else if (user.country === 'ch') {
            countryName = 'Switzerland'
            // <i class="ch flag"></i>
        } else if (user.country === 'th') {
            countryName = 'Thailand'
            // <i class="th flag"></i>
        } else if (user.country === 'tr') {
            countryName = 'Turkey'
            // <i class="tr flag"></i>
        } else if (user.country === 'ua') {
            countryName = 'Ukraine'
            // <i class="ua flag"></i>
        } else if (user.country === 'gb') {
            countryName = 'United Kingdom'
            // <i class="gb flag"></i>
        }

        return countryName;
    };

    displayCountryName();

    // const displayFlag = () => {
    //     if (user.country === 'ar') {
    //         return <i class="ar flag"></i>
    //     } else if (user.country === 'au') {
    //         return <i class="au flag"></i>
    //     } else if (user.country === 'at') {
    //         return <i class="at flag"></i>
    //     } else if (user.country === 'bo') {
    //         return <i class="bo flag"></i>
    //     } else if (user.country === 'ba') {
    //         return <i class="ba flag"></i>
    //     } else if (user.country === 'br') {
    //         return <i class="br flag"></i>
    //     } else if (user.country === 'ca') {
    //         return <i class="ca flag"></i>
    //     } else if (user.country === 'cl') {
    //         return <i class="cl flag"></i>
    //     } else if (user.country === 'cn') {
    //         return <i class="cn flag"></i>
    //     } else if (user.country === 'co') {
    //         return <i class="co flag"></i>
    //     } else if (user.country === 'cr') {
    //         return <i class="cr flag"></i>
    //     } else if (user.country === 'hr') {
    //         return <i class="hr flag"></i>
    //     } else if (user.country === 'cz') {
    //         return <i class="cz flag"></i>
    //     } else if (user.country === 'dk') {
    //         return <i class="dk flag"></i>
    //     } else if (user.country === 'ec') {
    //         return <i class="ec flag"></i>
    //     } else if (user.country === 'sv') {
    //         return <i class="sv flag"></i>
    //     } else if (user.country === 'ee') {
    //         return <i class="ee flag"></i>
    //     } else if (user.country === 'fi') {
    //         return <i class="fi flag"></i>
    //     } else if (user.country === 'fr') {
    //         return <i class="fr flag"></i>
    //     } else if (user.country === 'de') {
    //         return <i class="de flag"></i>
    //     } else if (user.country === 'gt') {
    //         return <i class="gt flag"></i>
    //     } else if (user.country === 'hu') {
    //         return <i class="hu flag"></i>
    //     } else if (user.country === 'ie') {
    //         return <i class="ie flag"></i>
    //     } else if (user.country === 'il') {
    //         return <i class="il flag"></i>
    //     } else if (user.country === 'it') {
    //         return <i class="it flag"></i>
    //     } else if (user.country === 'lv') {
    //         return <i class="lv flag"></i>
    //     } else if (user.country === 'mx') {
    //         return <i class="mx flag"></i>
    //     } else if (user.country === 'nl') {
    //         return <i class="nl flag"></i>
    //     } else if (user.country === 'nz') {
    //         return <i class="nz flag"></i>
    //     } else if (user.country === 'pa') {
    //         return <i class="pa flag"></i>
    //     } else if (user.country === 'pe') {
    //         return <i class="pe flag"></i>
    //     } else if (user.country === 'pl') {
    //         return <i class="pl flag"></i>
    //     } else if (user.country === 'pt') {
    //         return <i class="pt flag"></i>
    //     } else if (user.country === 'ru') {
    //         return <i class="ru flag"></i>
    //     } else if (user.country === 'cs') {
    //         return <i class="cs flag"></i>
    //     } else if (user.country === 'sk') {
    //         return <i class="sk flag"></i>
    //     } else if (user.country === 'za') {
    //         return <i class="za flag"></i>
    //     } else if (user.country === 'kr') {
    //         return <i class="kr flag"></i>
    //     } else if (user.country === 'es') {
    //         return <i class="es flag"></i>
    //     } else if (user.country === 'se') {
    //         return <i class="se flag"></i>
    //     } else if (user.country === 'ch') {
    //         return <i class="ch flag"></i>
    //     } else if (user.country === 'th') {
    //         return <i class="th flag"></i>
    //     } else if (user.country === 'tr') {
    //         return <i class="tr flag"></i>
    //     } else if (user.country === 'ua') {
    //         return <i class="ua flag"></i>
    //     } else if (user.country === 'gb') {
    //         return <i class="gb flag"></i>
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
                                <h2>{ user.firstname } { user.lastname }</h2>
                                <p className="meta">
                                    <i class="globe icon"></i>
                                    <strong>Home Country: </strong> {countryName}
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