// REACT IMPORTS
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// COMPONENT IMPORTS
import Navbar from './Navbar';
import Footer from './Footer';

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
                    <Route exact path='/login' component={ Login} />
                    <Route exact path='/register' component={ Register } />

                    {/* Navbar Links */}
                    <Route exact path='/profile' component={ Profile } />
                    <Route exact path='/emergency' component={ EmergencyNumbers } />

                    {/* Home */}
                    <Route exact path='/home' component={ Home } />

                    {/* Home Sections */}
                    <Route exact path='/notebook' component={ Notebook } />
                    <Route exact path='/hostfamily' component={ HostFamily } />
                    <Route exact path='/cluster' component={ Cluster } />

                    {/* Notebook Sections */}
                    <Route exact path='/notebook/workhours' component={ WorkHours } />
                    <Route exact path='/notebook/payments' component={ Payments } />
                    <Route exact path='/notebook/goals' component={ Goals } />
                    <Route exact path='/notebook/notes' component={ Notes } />

                    {/* Error Page */}
                    {/* <Route path='*' component={ WrongTurn } /> */}

                    <Footer />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;