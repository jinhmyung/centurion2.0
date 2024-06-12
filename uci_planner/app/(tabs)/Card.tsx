import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './Constants';
import './Card.css'; // Import the CSS file
import { currentMode } from '..';

interface CardProps {
  text: string;
  mode?: string; // Add isPencil prop
}

/**
 * Card Component
 * This component represents a draggable card with text content.
 * The card's opacity changes when it is being dragged.
 */
const Card: React.FC<CardProps> = ({ text, mode }) => {
  const [{ isDragging }, dragRef] = useDrag(
    () => ({
      type: ItemTypes.CARD,
      item: { text, mode },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    []
  );

  return (
    console.log(text, mode),
      <div
        ref={dragRef}
        className={`card ${isDragging ? 'dragging' : ''} ${mode === 'pencil' ? 'pencil' : 'pen'}`}
      >
        {text}
      </div>
  );
};

export default Card;