// REACT
import React, { useContext } from 'react';

// NPM PACKAGES
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// COMPONENTS
import FeatureCard from './FeatureCard';

// CONTEXTS
import { UserContext } from '../../contexts/UserContext';

// ICONS
import notebookIcon from '../../images/book.svg';
import hostfamilyIcon from '../../images/family.svg';
import clusterIcon from '../../images/cluster.svg';

// TOASTIFY CONFIG & STYLE
toast.configure({
    autoClose: 8000,
    draggable: false
});

const Home = () => {
    const [ user, setUser ] = useContext(UserContext);

    const activities = [
        'Finger paint with shaving cream on colored paper.',
        'Decorate a small clay pot. Plant flower seeds, nurture, and watch them grow!',
        'Cut paper dolls from magazines.',
        'Draw a picture or write a card and send it to the grandparents.',
        'Hide a kitchen timer and have your host child search for it by listening for its ticking sound.',
        'Go to the Post Office. Let your host children send letters to themselves and watch for the mailman the next day.',
        'Go exploring with a magnifying glass.',
        'Build a pinecone pyramid and kick it down!',
        'Catch bugs in a plastic jar and make a bug zoo. (Make sure you poke air holes in the lid.',
        'Make a design punching holes in a paper plate. String a showlace through the holes.',
        'Draw faces on balloons with permanent markers. (Watercolor markers wear off.',
        'Learn to play hopscotch.',
        'Light Show: Punch holes in the bottom of an oatmeal container or show box. Shine a flashlight through the box toward the ceiling in a darkened room. (Excellent for nap-resisting toddlers!',
        'Dramatic play: Let your host children play store with their toys. Draw, color, and cut out paper money.',
        'Make a sponge garden. Soak a sponge in water and place on a shallow dish. Sprinkle with alfalfa or rye grass seeds. Keep sponge moist and watch it grow.',
        'Plant your own garden!',
        'Make a book: Have your host children create books about themselves. Include their birth date, handprints, foot prints, drawings, and stories of themselves and their family. These are wondeful keepsakes!',
        'Make placemats by covering your host child\'s artwork with clear contact paper.'
    ];

    const notify = () => toast(activities[Math.floor((Math.random() * 18) + 1)]);

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
                        <button className="ui button activity-button" onClick={notify}>Activity, please!</button>
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