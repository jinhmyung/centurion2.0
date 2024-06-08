import React, { useState } from 'react';
import './Yearcard.css'; // Import the CSS file

const Yearcard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`yearcard ${isExpanded ? 'expanded' : ''}`}>
      <div className="header" onClick={toggleExpand}>
        <span className="arrow">
          {isExpanded ? '▼' : '▶'}
        </span>
        <span className="title">2020 - 2021</span>
      </div>
      {isExpanded && (
        <div className="content">
          <span>Fall</span>
          <span>Winter</span>
          <span>Spring</span>
          <span>Summer</span>
        </div>
      )}
    </div>
  );
};

export default Yearcard;