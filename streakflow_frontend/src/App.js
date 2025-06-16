import React from 'react';
import './App.css';
import Navbar from './Navbar';
import './Navbar.css';

// Ensure no direct usage of PUBLIC_URL without process.env.
function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <div className="container" style={{paddingTop: "80px"}}>
          <div className="hero">
            <div className="subtitle">AI Workflow Manager Template</div>
            <h1 className="title">streakflow_frontend</h1>
            <div className="description">
              Start building your application.
            </div>
            <button className="btn btn-large">Button</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;