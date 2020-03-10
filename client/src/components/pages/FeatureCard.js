import React from 'react';

const FeatureCard = (props) => {
    console.log(props);
    return (
        <div className="ui fluid card feature-card">
            <a href={props.link}>
                <div className="card-content">
                    <img src={props.icon} className="feature-icon" alt={props.title} />
                    <p className="ui medium header">
                        {props.header}
                    </p>
                </div>
            </a>
        </div>
    );
};

export default FeatureCard;