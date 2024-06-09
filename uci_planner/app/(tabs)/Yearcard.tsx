import React, { useState } from 'react';
import './Yearcard.css'; // Import the CSS file
import Dropfield from './Dropfield';
import Card from './Card';

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
    let t = [...droppedItems[season]]; 
    t.push(item.text); 
    setDroppedItems({...droppedItems, [season]: t});
  };

  const handleRemoveItem = (index : any) => {
      const updatedItems = [...droppedItems];
      updatedItems.splice(index, 1);
      setDroppedItems(updatedItems);
  };

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
              <Dropfield
                items={droppedItems[season]}
                onDrop={(item:any) => handleDrop(season, item)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Yearcard;