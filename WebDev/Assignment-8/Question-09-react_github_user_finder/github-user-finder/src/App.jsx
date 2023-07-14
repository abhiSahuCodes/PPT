import React, { useState } from 'react';
import './App.css';
import vector from './assets/vector-users-icon.webp'

const App = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="container">
      <div className="heading">Github User Finder</div>
      <div className="hero">
        <div className="input-section">
          <form id="form" onSubmit={handleSubmit}>
            <input
              type="text"
              id="username"
              className="username"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <button id="submit">Get Data</button>
          </form>
          <div className="userData">
            <div className="profile-image">
              <img
                src={userData.avatar_url || vector}
                alt="Profile Image"
                className="profileImg"
              />
            </div>
            <div className="info">
              <div className="name">Name: <span className="span-name">{userData.name || 'N/A'}</span></div>
              <div className="portfolio">Portfolio: <a href={userData.html_url}>Portfolio Link</a></div>
              <div className="location">Location: <span className="span-location">{userData.location || 'N/A'}</span></div>
              <div className="repos">Public Repos: <span className="span-repos">{userData.public_repos}</span></div>
              <div className="follower">Followers: <span className="span-follower">{userData.followers}</span></div>
              <div className="bio">Bio: <span className="span-bio">{userData.bio || 'N/A'}</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
