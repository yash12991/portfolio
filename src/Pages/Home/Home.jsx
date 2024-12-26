import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import profile from 'D:/Project/savitahospital/savita/src/Components/Assets/profile-img.jpg';

const Home = () => {
  return (
    <div className="container">
      <div className="hero">
        <div className="profile-container">
          <img src={profile} alt="Yash Sonawane" className="profile-img" />
        </div>
        <div className="intro-text">
          <h1>Hi, I'm Yash Sonawane</h1>
          <p>A passionate developer and tech enthusiast</p>
          <Link to="/abouts">
            <button className="cta-button">Learn More About Me</button>
          </Link>
          <p>
            I am a dedicated full-stack developer with a passion for building scalable and efficient applications.
            My expertise includes working with modern web technologies like React, Node.js, and Python. I am
            constantly exploring new tools and techniques to stay on top of the industry trends.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
