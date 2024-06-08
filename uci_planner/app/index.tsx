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
              <div>
                <h3>Major Content</h3>
                <h4>Lower Division A(2)</h4>
                <div className="cards-row">
                  <Card text="ICS 32A" />
                  <Card text="ICS 33" />
                </div>
                <h4>Lower Division B (4)</h4>
                <div className="cards-row">
                  <Card text="ICS 45J" />
                  <Card text="INF 43" />
                  <Card text="ICS 6B" />
                </div>
                <div>
                  <Card text="STATS 7" />
                </div>
                <h4>Upper Division Core (7)</h4>
                {/* <button>Pick Courses</button> */}
                <div className="cards-row">
                  <Card text="INF 113" />
                  <Card text="INF 121" />
                  <Card text="INF 131" />
                </div>
                <div className="cards-row">
                  <Card text="INF 151" />
                  <Card text="INF 161" />
                  <Card text="INF 191A" />
                </div>
                <Card text="INF 191B" />
                <h4>Health Informatics Core</h4>
                {/* <button>Pick Courses</button> */}
                <div className="cards-row">
                  <Card text="INF 171" />
                  <Card text="INF 172" />
                  <Card text="INF 173" />
                </div>
                <h4>Health Informatics Elective</h4>
                {/* <button>Pick Courses</button> */}
                <div className="cards-row">
                  <Card text="INF 132" />
                  <Card text="INF 133" />
                  <Card text="INF 134" />
                </div>
                <Card text="CS 122A" />
                <h4>Public Health Core</h4>
                {/* <button>Pick Courses</button> */}
                <div className="cards-row">
                  <Card text="PUBHLTH 1" />
                  <Card text="PUBHLTH 2" />
                </div>
                <h4>Final Elective</h4>
                {/* <button>Pick Courses</button> */}
                <div className="cards-row">
                  <Card text="PUBHLTH 101" />
                </div>
                <p> </p>
                <p> </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </DndProvider>
  );
}
