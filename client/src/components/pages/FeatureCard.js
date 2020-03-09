import React from 'react';

const FeatureCard = (props) => {
    console.log(props);
    return (
        <div className="card">
            <a href={props.link}>
                <div className="card-content">
                    <p className="ui medium header">
                        {props.header}
                    </p>
                    <img src={props.icon} className="section-icon" alt={props.title} />
                </div>
            </a>
        </div>
    );
};

export default FeatureCard;