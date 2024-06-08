import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Card from './(tabs)/Card';
import './index.css'; // Import the CSS file
import Yearcard from './(tabs)/Yearcard';

export default function App() {
  const [activeSection, setActiveSection] = useState('GE');

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container">
        <div className="main-content">
          <h1>UCInformaticsPlanner</h1>
          <Card text="Sample Card Text" />
          <Yearcard/>
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
                <h3>General Education Content</h3>
                <h4>Ia. Lower Division Writing (2)</h4>
                <div className="cards-row">
                  <Card text="Writing 50" />
                  <Card text="Writing 60" />
                </div>
                <h4>Ib. Upper Division Writing (1)</h4>
                <div className="cards-row">
                  <Card text="ICS 139W" />
                </div>
                <h4>II. Science and Technology (3)</h4>
                {/* <button>Pick Courses</button> */}
                <div className="cards-row">
                  <Card text="BioSci 1A" />
                  <Card text="BioSci 6" />
                  <Card text="BioSci 8" />
                </div>
                <h4>III. Social and Behavioral Sciences (3)</h4>
                {/* <button>Pick Courses</button> */}
                <div className="cards-row">
                  <Card text="AFAM 40A" />
                  <Card text="AFAM 40B" />
                  <Card text="AFAM 40C" />
                </div>
                <h4>IV. Arts and Humanities (3)</h4>
                {/* <button>Pick Courses</button> */}
                <div className="cards-row">
                  <Card text="AFAM 40A" />
                  <Card text="AFAM 40B" />
                  <Card text="AFAM 40C" />
                </div>
                <h4>V. Quantitative, Symbolic, and Computational Reasoning (3)</h4>
                <p>You are required to take one course in each of the subcategories and an additional course from either subcategory.</p>
                <h4>Va. Quantitative Literacy</h4>
                {/* <button>Pick Courses</button> */}
                <div className="cards-row">
                  <Card text="ANTHRO 10A" />
                </div>
                <h4>Vb. Formal Reasoning</h4>
                {/* <button>Pick Courses</button> */}
                <div className="cards-row">
                  <Card text="ANTHRO 10C" />
                </div>
                <h4>VI. Language Other Than English</h4>
                {/* <button>Pick Courses</button> */}
                <div className="cards-row">
                  <Card text="SPANISH 1C" />
                </div>
                <h4>VI. Language Other Than English (1)</h4>
                <p>Students must finish coursework equivalent to a third quarter of study in a language.</p>
                {/* <button>Pick Courses</button> */}
                <div className="cards-row">
                  <Card text="SPANISH 1C" />
                </div>
                <h4>VII. Multicultural Studies (1)</h4>
                {/* <button>Pick Courses</button> */}
                <div className="cards-row">
                  <Card text="AFAM 40A" />
                </div>
                <h4>International/Global Issues (1)</h4>
                {/* <button>Pick Courses</button> */}
                <div className="cards-row">
                  <Card text="ANTHRO 2A" />
                </div>
                <p> </p>
                <p> </p>
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
