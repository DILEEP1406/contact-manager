import React from 'react';

const About = () => {
  return(
    <div className="about">
      <div className="page-title">
        About
      </div>
      <div className="detail">
        A simple contact manager with full CRUD Functionality and React's Context API. We will be storing the contacts in Local Storage.
      </div>
      <div className="features">Features and Tools:-</div>
      <ul>
        <li>React</li>
        <li>React-router</li>
        <li>ContextAPI</li>
        <li>LocalStorage</li>
        <li>Responsive UI</li>
        <li>FontAwesome Icons</li>
        <li>Error Handling and Form Validation</li>
        <li>CSS Flexbox and Grid Used for responsive layout</li>
      </ul>
    </div>
  )
};

export default About;