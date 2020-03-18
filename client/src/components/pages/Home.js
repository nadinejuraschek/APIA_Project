import React, { useContext } from 'react';

import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import FeatureCard from './FeatureCard';

import { UserContext } from '../../contexts/UserContext';

import notebookIcon from '../../images/book.svg';
import hostfamilyIcon from '../../images/family.svg';
import clusterIcon from '../../images/cluster.svg';

// TOASTIFY CONFIG
toast.configure({
    autoClose: 8000,
    draggable: false
});

const Home = () => {
    const [ user, setUser ] = useContext(UserContext);

    const activities = [];

    const notify = () => toast("Wow so easy !");

    return (
        <section className="wrapper">
            <div className="block">

                <div className="pageheader">
                        <h2>
                            Good morning, { user.firstname }!
                        </h2>
                        <h3>
                            What Can I Help You With?
                        </h3>
                        <button className="ui button" onClick={notify}>Activity, please!</button>
                </div>

                <div className="ui three column stackable grid container">
                    <div className="column centered">
                        <FeatureCard 
                            title="notebook" 
                            header="My Notebook" 
                            icon={notebookIcon} 
                            link="/notebook"  
                        />
                    </div>
                            
                    <div className="column centered">
                        <FeatureCard 
                            title="hostfamily" 
                            header="My Host Family" 
                            icon={hostfamilyIcon} 
                            link="/hostfamily" 
                        />
                    </div>

                    <div className="column centered">
                        <FeatureCard 
                            title="cluster" 
                            header="My Cluster" 
                            icon={clusterIcon} 
                            link="/cluster" 
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Home;