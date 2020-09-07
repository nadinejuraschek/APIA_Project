// REACT
import React from 'react';

// STYLES
import styles from './ring.module.css';

const ProgressRing = ({ radius, stroke, progress, label }) => {
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <>
    <svg height={radius * 2} width={radius * 2} className={styles.ring}>
      <circle
        className={styles.ring}
        stroke='#f1f1f1'
        fill='transparent'
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        className={styles.progress}
        stroke='#86abfa'
        fill='transparent'
        strokeWidth={stroke}
        strokeDasharray={circumference + ' ' + circumference}
        style={{ strokeDashoffset }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
    </svg>
    <div className={styles.label}>
        {label}
    </div>
    </>
  );
};

export default ProgressRing;
