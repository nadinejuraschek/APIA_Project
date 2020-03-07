import React from 'react';

const Register = () => {
    return (
        <section className="wrapper">
            <div className="block">

                <form className="ui form">

                    <div className="field">
                        <label>I am a</label>
                        <select className="ui fluid dropdown">
                            <option className="default text" value="">Choose One</option>
                            <option value="aupair" name="register[role]">Au Pair</option>
                            <option value="family" name="register[role]">Host Family Member</option>
                            <option value="lcc" name="register[role]">Community Counselor</option>
                        </select>
                    </div>

                    <div className="field">
                        <label>Your Host Family's ID</label>
                        <div className="ui left icon input">
                            <i class="users icon"></i>
                            <input type="text" name="register[familyID]" placeholder="Host Family ID" />
                        </div>
                    </div>

                    <div className="field">
                        <label>Your Name</label>
                        <div className="two fields">
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="user icon"></i>
                                    <input type="text" name="register[firstname]" placeholder="First Name" />
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="user icon"></i>
                                    <input type="text" name="register[lastname]" placeholder="Last Name" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="field">
                        <label>Home Country</label>
                        <div className="ui fluid search selection dropdown">
                            <input type="hidden" name="register[country]" />
                            <i className="dropdown icon"></i>
                            <div className="default text">Select Country</div>
                            <div className="menu">
                                <div className="item" data-value="ar"><i className="ar flag"></i>Argentina</div>
                                <div className="item" data-value="au"><i className="au flag"></i>Australia</div>
                                <div className="item" data-value="at"><i className="at flag"></i>Austria</div>
                                <div className="item" data-value="bo"><i className="bo flag"></i>Bolivia</div>
                                <div className="item" data-value="ba"><i className="ba flag"></i>Bosnia</div>
                                <div className="item" data-value="br"><i className="br flag"></i>Brazil</div>
                                <div className="item" data-value="tc"><i className="tc flag"></i>Caicos Islands</div>
                                <div className="item" data-value="ca"><i className="ca flag"></i>Canada</div>
                                <div className="item" data-value="cl"><i className="cl flag"></i>Chile</div>
                                <div className="item" data-value="cn"><i className="cn flag"></i>China</div>
                                <div className="item" data-value="co"><i className="co flag"></i>Colombia</div>
                                <div className="item" data-value="cr"><i className="cr flag"></i>Costa Rica</div>
                                <div className="item" data-value="hr"><i className="hr flag"></i>Croatia</div>
                                <div className="item" data-value="cz"><i className="cz flag"></i>Czech Republic</div>
                                <div className="item" data-value="dk"><i className="dk flag"></i>Denmark</div>
                                <div className="item" data-value="ec"><i className="ec flag"></i>Ecuador</div>
                                <div className="item" data-value="sv"><i className="sv flag"></i>El Salvador</div>
                                <div className="item" data-value="ee"><i className="ee flag"></i>Estonia</div>
                                <div className="item" data-value="fi"><i className="fi flag"></i>Finland</div>
                                <div className="item" data-value="fr"><i className="fr flag"></i>France</div>
                                <div className="item" data-value="de"><i className="de flag"></i>Germany</div>
                                <div className="item" data-value="gt"><i className="gt flag"></i>Guatemala</div>
                                <div className="item" data-value="hu"><i className="hu flag"></i>Hungary</div>
                                <div className="item" data-value="ie"><i className="ie flag"></i>Ireland</div>
                                <div className="item" data-value="il"><i className="il flag"></i>Israel</div>
                                <div className="item" data-value="it"><i className="it flag"></i>Italy</div>
                                <div className="item" data-value="lv"><i classv="lv flag"></i>Latvia</div>
                                <div className="item" data-value="mx"><i className="mx flag"></i>Mexico</div>
                                <div className="item" data-value="nl"><i className="nl flag"></i>Netherlands</div>
                                <div className="item" data-value="nz"><i className="nz flag"></i>New Zealand</div>
                                <div className="item" data-value="pa"><i className="pa flag"></i>Panama</div>
                                <div className="item" data-value="pe"><i className="pe flag"></i>Peru</div>
                                <div className="item" data-value="pl"><i className="pl flag"></i>Poland</div>
                                <div className="item" data-value="pt"><i className="pt flag"></i>Portugal</div>
                                <div className="item" data-value="ru"><i className="ru flag"></i>Russia</div>
                                <div className="item" data-value="cs"><i className="cs flag"></i>Serbia</div>
                                <div className="item" data-value="rs"><i className="rs flag"></i>Serbia</div>
                                <div className="item" data-value="sk"><i className="sk flag"></i>Slovakia</div>
                                <div className="item" data-value="za"><i className="za flag"></i>South Africa</div>
                                <div className="item" data-value="kr"><i className="kr flag"></i>South Korea</div>
                                <div className="item" data-value="es"><i className="es flag"></i>Spain</div>
                                <div className="item" data-value="se"><i className="se flag"></i>Sweden</div>
                                <div className="item" data-value="ch"><i className="ch flag"></i>Switzerland</div>
                                <div className="item" data-value="th"><i className="th flag"></i>Thailand</div>
                                <div className="item" data-value="tr"><i className="tr flag"></i>Turkey</div>
                                <div className="item" data-value="ua"><i className="ua flag"></i>Ukraine</div>
                                <div className="item" data-value="gb"><i className="gb flag"></i>United Kingdom</div>
                            </div>
                        </div>
                    </div>

                    <div className="field">
                        <label>E-Mail</label>
                        <div className="ui left icon input">
                            <i className="envelope icon"></i>
                            <input type="text" name="register[username]" placeholder="E-Mail" />
                        </div>
                    </div>

                    <div className="field">
                        <label>Password</label>
                        <div className="ui left icon input">
                            <i className="lock icon"></i>
                            <input type="password" name="register[password]" placeholder="Password" />
                        </div>
                    </div>

                    <button className="ui button" type="submit">Register</button>
                
                </form>

                <div className="ui message">
                    <p>Already have an account?</p>
                    <a href="/login" className="ui button">
                        Log In
                    </a>
                </div>
                
            </div>
        </section>
    );
};

export default Register;