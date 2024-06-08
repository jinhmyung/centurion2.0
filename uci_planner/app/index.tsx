import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Card from './(tabs)/Card';
import './index.css'; // Import the CSS file
import Yearcard from './(tabs)/Yearcard';

export default function App() {
  const [activeSection, setActiveSection] = useState('GE');
  const [activeButton, setActiveButton] = useState(null);

  const handleHeaderButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container">
        <div className="main-content">
          <header className="main-header">
            <h1>UCInformaticsPlannerssss</h1>
            <div className="header-buttons">
              <button
                className={activeButton === 'eraser' ? 'active' : ''}
                onClick={() => handleHeaderButtonClick('eraser')}
              >
                <img src="assets\images\eraser.png" alt="Eraser" />
              </button>
              <button
                className={activeButton === 'pen' ? 'active' : ''}
                onClick={() => handleHeaderButtonClick('pen')}
              >
                <img src="assets\images\pen-nib.svg" alt="Pen" />
              </button>
              <button
                className={activeButton === 'pencil' ? 'active' : ''}
                onClick={() => handleHeaderButtonClick('pencil')}
              >
                <img src="assets/images/pencil.svg" alt="Pencil" />
              </button>
            </div>
          </header>
          <Yearcard />
        </div>
        <div className="sidebar">
          <div className="buttons">
            <button
              className={activeSection === 'GE' ? 'active' : ''}
              onClick={() => setActiveSection('GE')}
            >
              GE
            </button>
            <button
              className={activeSection === 'Major' ? 'active' : ''}
              onClick={() => setActiveSection('Major')}
            >
              Major
            </button>
          </div>
          <div className="section-content">
            {activeSection === 'GE' ? (
              <div>
                General Education Content
                <Card text="Sample Card Text" />
              </div>
            ) : (
              <div>
                Major Content
                <Card text="Sample Card Text" />
              </div>
            )}
          </div>
        </div>
      </div>
    </DndProvider>
  );
}
