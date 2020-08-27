import React from 'react';

const FeatureCard = ({ link, icon, title, header }) => {
  return (
    <div className='ui fluid card feature-card'>
      <a href={link}>
        <div className='card-content'>
          <img src={icon} className='feature-icon' alt={title} />
          <p className='ui medium header feature-header'>{header}</p>
        </div>
      </a>
    </div>
  );
};

export default FeatureCard;
