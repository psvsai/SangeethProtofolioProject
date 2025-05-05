import React, { useState } from 'react';
import './BasicCard.css';
import profileImage from '../assets/Sangeethpic1.jpg'; // Replace with your actual image path

function BasicCard() {
  const [activeTab, setActiveTab] = useState('home'); // Default to home

  const renderContent = () => {
    if (activeTab === 'skills') {
      return (
        <div className="skills-list">
          <span>React</span>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>Java</span>
          <span>Spring Boot</span>
        </div>
      );
    } else if (activeTab === 'projects') {
      return (
        <div className="projects-list">
          <p>Project 1: Weather App</p>
          <p>Project 2: Movie Browser</p>
          <p>Project 3: Portfolio Website</p>
        </div>
      );
    } else if (activeTab === 'home') {
      return (
        <div className="home-section">
          <h2>Welcome to My Portfolio</h2>
          <p>This is a brief introduction to who I am and what I do. Explore my skills and projects using the buttons above.</p>
        </div>
      );
    }
    return <p>Select a tab to view content</p>;
  };

  return (
    <div className="card split-card">
      <div className="card-left">
        <div className="top-tabs-inside">
          <button onClick={() => setActiveTab('home')}>🏠 Home</button>
          <button onClick={() => setActiveTab('skills')}>🛠️ Skills</button>
          <button onClick={() => setActiveTab('projects')}>🚀 Projects</button>
        </div>

        <div className="intro-row">
          <div className="profile-image-container">
            <img src={profileImage} alt="PSV Sai Mahesh" className="profile-image" />
          </div>

          <h1>Hey, I'm Sangeeth Reddy Vanga</h1>
          <p>
            I'm a passionate <strong>Frontend Developer</strong> with hands-on experience building responsive web applications using technologies like
            <strong> React</strong>, <strong> JavaScript</strong>, <strong> HTML</strong>, and <strong> CSS</strong>.
          </p>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/your-linkedin-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/your-github-username"
              target="_blank"
              rel="noopener noreferrer"
              className="github"
            >
              GitHub
            </a>
          </div>

          <div className="hero-buttons">
            <button>Resume</button>
            <button>Contact Me</button>
          </div>
        </div>
      </div>

      <div className="card-right">
        {renderContent()}
      </div>
    </div>
  );
}

export default BasicCard;
