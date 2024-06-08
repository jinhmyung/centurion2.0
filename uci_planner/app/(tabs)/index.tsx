import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Card from './Card';
import './index.css'; // Import the CSS file

export default function App() {
  const [activeSection, setActiveSection] = useState('GE');

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container">
        <div className="main-content">
          <h1>UCInformaticsPlanner</h1>
          <Card text="Sample Card Text" />
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
              <div>General Education Content
                <Card text="Sample Card Text" />
              </div>
              
            ) : (
              <div>Major Content
                <Card text="Sample Card Text" />
              </div>
            )}
          </div>
        </div>
      </div>
    </DndProvider>
  );
}
