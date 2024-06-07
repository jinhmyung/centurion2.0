import React, { CSSProperties } from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './Constants';

interface CardProps {
  text: string;
}

/**
 * Card Component
 * This component represents a draggable card with text content.
 * The card's opacity changes when it is being dragged.
 */
const Card: React.FC<CardProps> = ({ text }) => {
  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: ItemTypes.CARD,
      item: { text },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1,
      }),
    }),
    []
  );

  const cardStyle: CSSProperties = {
    border: '1px solid #ccc',
    padding: '16px',
    margin: '8px',
    borderRadius: '4px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    cursor: 'move',
    textAlign: 'center' as const, // TypeScript specific value for textAlign
    fontFamily: 'Arial, sans-serif',
    fontSize: '14px',
    opacity
  };

  return (
    <div ref={dragRef} style={cardStyle}>
      {text}
    </div>
  );
};

export default Card;
