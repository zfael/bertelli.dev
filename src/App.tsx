import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import './App.css';

function App() {
  return (
    <div className="container">
      <div className="profile-picture">
        <img src="https://ca.slack-edge.com/T0257R0RP-U03BQN44N9Y-c46a8968204b-512" alt="Your Name" />
      </div>
      <h1 className="name">Rafael Bertelli</h1>
      <h3 className="job-title">Software Engineer</h3>
      <p className="summary">
        Highly skilled software development professional bringing more than 10 years in software design, development,
        and integration. High knowledge of Node.js, Javascript, AWS Serverless. Works well under pressure and
        consistently meets deadlines and targets while delivering high-quality work. <span className="terminal-cursor">|</span>
      </p> 
      

      <div className="social-icons">
        <p className="reach-out">Reach me out at 👇</p>
        <a href="mailto:rafael@bertelli.dev" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="https://www.linkedin.com/in/rpbertelli/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href="https://github.com/zfael" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>

      {/* <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <a href="mailto:youremail@example.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="https://www.linkedin.com/">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href="https://github.com/">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div> */}
    </div>
  );
}

export default App;
