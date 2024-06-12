import React, { useState } from 'react';
import './Yearcard.css'; // Import the CSS file
import Dropfield from './Dropfield';
import Card from './Card';
import { currentMode } from '../index';

const Yearcard = ({ year } : any) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const [droppedItems, setDroppedItems] : any = useState({
    fall: [], 
    winter: [], 
    spring: [],
    summer: [],
  });

  const handleDrop = (season : any, item : any) => {

    // Check we dont plan the same course for same year
    let allcourse : any = [];
    ['fall', 'winter', 'spring', 'summer'].map((season:any) => {
      allcourse += (droppedItems[season].map((item:any) => item.text))
    })

    if (!allcourse.includes(item.text)) {
      let t = [...droppedItems[season]]; 
      t.push({text: item.text, isPencil: currentMode}); 
      setDroppedItems({...droppedItems, [season]: t});
    } else {
      alert("Already added.");
    }
  };

  // Just simply clear planned courses for corresponding season
  const clearSeason = (season : any) => {
    setDroppedItems({...droppedItems, [season]: []})
  }

  return (
    <div className={`yearcard ${isExpanded ? 'expanded' : ''}`}>
      <div className="header" onClick={toggleExpand}>
        <span className="arrow">
          {isExpanded ? '▼' : '▶'}
        </span>
        <span className="title">{ parseInt(year) } - { parseInt(year)+1 }</span>
      </div>
      {isExpanded && (
        <div className="content">
          {['fall', 'winter', 'spring', 'summer'].map((season) => (
            <div
              key={Math.random()}
              style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}
            >
              <span style={{ textAlign: 'center' }}>{season.charAt(0).toUpperCase() + season.slice(1)}</span>
              
              {/* Drop Field (to add courses here) */}
              <Dropfield
                items={droppedItems[season]}
                onDrop={(item:any) => handleDrop(season, item)}
              />
              
              {/* Clear Button */}
              <button className='clearButton' onClick={()=>clearSeason(season)}>Clear All</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Yearcard;