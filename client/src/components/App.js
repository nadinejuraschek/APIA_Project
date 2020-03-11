// REACT IMPORTS
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// COMPONENT IMPORTS
import Navbar from './Navbar';
import Footer from './Footer';
import GatedComponent from './GatedComponent';

// import WrongTurn from './WrongTurn';

import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

import Cluster from './pages/cluster/Cluster';

import HostFamily from './pages/hostFamily/HostFamily';

import Goals from './pages/notebook/Goals';
import Notebook from './pages/notebook/Notebook';
import Notes from './pages/notebook/Notes';
import Payments from './pages/notebook/Payments';
import WorkHours from './pages/notebook/WorkHours';

import EmergencyNumbers from './pages/EmergencyNumbers';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Profile from './pages/Profile';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Navbar />

                    {/* Landing Page */}
                    <Route exact path='/' component={ Landing } />

                    {/* Authentication */}
                    <Route exact path='/login' component={ Login } />
                    <Route exact path='/register' component={ Register } />

                    {/* Navbar Links */}
                    <Route exact path='/profile' >
                        <GatedComponent>
                            <Profile />
                        </GatedComponent>
                    </Route>
                    <Route exact path='/emergencynumbers' >
                        <GatedComponent>
                            <EmergencyNumbers />
                        </GatedComponent>
                    </Route>

                    {/* Home */}
                    <Route exact path='/home' >
                        <GatedComponent>
                            <Home />
                        </GatedComponent>
                    </Route>

                    {/* Home Sections */}
                    <Route exact path='/notebook' >
                        <GatedComponent>
                            <Notebook />
                        </GatedComponent>
                    </Route>
                    <Route exact path='/hostfamily' >
                        <GatedComponent>
                            <HostFamily />
                        </GatedComponent>
                    </Route>
                    <Route exact path='/cluster' >
                        <GatedComponent>
                            <Cluster />
                        </GatedComponent>
                    </Route>

                    {/* Notebook Sections */}
                    <Route exact path='/notebook/workhours' >
                        <GatedComponent>
                            <WorkHours />
                        </GatedComponent>
                    </Route>
                    <Route exact path='/notebook/payments' >
                        <GatedComponent>
                            <Payments />
                        </GatedComponent>
                    </Route>
                    <Route exact path='/notebook/goals' >
                        <GatedComponent>
                            <Goals />
                        </GatedComponent>
                    </Route>
                    <Route exact path='/notebook/notes' >
                        <GatedComponent>
                            <Notes />
                        </GatedComponent>
                    </Route>

                    {/* Error Page */}
                    {/* <Route path='*' component={ WrongTurn } /> */}

                    <Footer />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;