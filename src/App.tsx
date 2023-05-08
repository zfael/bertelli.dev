import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import './App.css';

const initializeReactGA = () => {
  console.log('initiating GA');
  ReactGA.initialize('G-YX9TCZ7M6C', { debug: true, titleCase: false });
  ReactGA.pageview('/home');
};

const handleClick = (event, category, action) => {
  event.preventDefault();
  ReactGA.event({
    category,
    action,
  });

  window.open(event.currentTarget.href, '_blank', 'noreferrer');
};

function App() {
  useEffect(() => {
    initializeReactGA();
  }, []);

  return (
    <div className="container">
      <div className="profile-picture">
        <img
          src="https://ca.slack-edge.com/T0257R0RP-U03BQN44N9Y-c46a8968204b-512"
          alt="Your Name"
        />
      </div>
      <h1 className="name">Rafael Bertelli</h1>
      <h3 className="job-title">Software Engineer</h3>
      <p className="summary">
        Highly skilled software development professional bringing more than 10
        years in software design, development, and integration. High knowledge
        of Node.js, Javascript, AWS Serverless. Works well under pressure and
        consistently meets deadlines and targets while delivering high-quality
        work. <span className="terminal-cursor">|</span>
      </p>

      <div className="social-icons">
        <p className="reach-out">Get In Touch👇</p>
        <a
          href="mailto:rafael@bertelli.dev"
          target="_blank"
          rel="noreferrer"
          onClick={(event) => handleClick(event, 'social-buttons', 'email')}
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a
          href="https://www.linkedin.com/in/rpbertelli/"
          target="_blank"
          rel="noreferrer"
          onClick={(event) => handleClick(event, 'social-buttons', 'linkedin')}
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a
          href="https://github.com/zfael"
          target="_blank"
          rel="noreferrer"
          onClick={(event) => handleClick(event, 'social-buttons', 'github')}
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  );
}

export default App;
