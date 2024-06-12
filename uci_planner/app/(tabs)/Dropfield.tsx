import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import Card from './Card';
import { ItemTypes } from './Constants';

// import './Yearcard.css'; // Import the CSS file

const Dropfield = ({ onDrop, items } : any) => {

  const [droppedItems, setDroppedItems] : any = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
      accept: ItemTypes.CARD,
      drop: (item) => onDrop(item),
      collect: (monitor) => ({
          isOver: monitor.isOver(),
      }),
  }));

  return (
    <div 
      ref={drop}
      style={{
        border: `${isOver ? '2px rgba(0, 0, 0, 0.2) dashed' : '2px rgba(0, 0, 0, 0.2) solid'}`,
        borderRadius: 10,
        minWidth: 150, 
        minHeight: 50,
        height: "100%",
        alignItems: "center", 
        display: "flex", 
        flexDirection: "column",
      }}
    >
      {items.map((item : any) => (
        <div key={Math.random()}>
          <Card text={item.text} mode={item.isPencil}/>
        </div>
      ))}
    </div>
  );
};

export default Dropfield;