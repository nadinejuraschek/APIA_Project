// REACT IMPORTS
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// COMPONENT IMPORTS
import Navbar from './Navbar';
import Footer from './Footer';

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
                    <Route path='/' exact component={ Landing } />
                    
                    {/* Authentication */}
                    <Route path='/login' exact component={ Login} />
                    <Route path='/register' exact component={ Register } />

                    {/* Navbar Links */}
                    <Route path='/profile' exact component={ Profile } />
                    <Route path='/emergency' exact component={ EmergencyNumbers } />

                    {/* Home */}
                    <Route path='/home' exact component={ Home } />

                    {/* Home Sections */}
                    <Route path='/notebook' exact component={ Notebook } />
                    <Route path='/hostfamily' exact component={ HostFamily } />
                    <Route path='/cluster' exact component={ Cluster } />

                    {/* Notebook Sections */}
                    <Route path='/notebook/workhours' exact component={ WorkHours } />
                    <Route path='/notebook/payments' exact component={ Payments } />
                    <Route path='/notebook/goals' exact component={ Goals } />
                    <Route path='/notebook/notes' exact component={ Notes } />

                    <Footer />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;