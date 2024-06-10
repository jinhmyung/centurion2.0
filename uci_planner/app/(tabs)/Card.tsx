import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './Constants';
import './Card.css'; // Import the CSS file

interface CardProps {
  text: string;
  isPencil?: boolean; // Add isPencil prop
}

/**
 * Card Component
 * This component represents a draggable card with text content.
 * The card's opacity changes when it is being dragged.
 */
const Card: React.FC<CardProps> = ({ text, isPencil }) => {
  const [{ isDragging }, dragRef] = useDrag(
    () => ({
      type: ItemTypes.CARD,
      item: { text },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    []
  );

  return (
    <div
      ref={dragRef}
      className={`card ${isDragging ? 'dragging' : ''} ${isPencil ? 'pencil' : ''}`}
    >
      {text}
    </div>
  );
};

export default Card;