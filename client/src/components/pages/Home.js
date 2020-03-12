import React, { useContext } from 'react';

import FeatureCard from './FeatureCard';

import { UserContext } from '../../contexts/UserContext';

import notebookIcon from '../../images/book.svg';
import hostfamilyIcon from '../../images/family.svg';
import clusterIcon from '../../images/cluster.svg';

const Home = () => {
    const [ user, setUser ] = useContext(UserContext);

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