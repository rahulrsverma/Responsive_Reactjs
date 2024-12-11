import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="App">
      <header className="header">
        <div className="logo">MyWebsite</div>
        <button
          className="nav-toggle"
          onClick={toggleNav}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
        <nav className={`nav ${isNavOpen ? 'show-nav' : ''}`}>
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <section id="home">
          <h1>Welcome to My Website</h1>
          <p>This is a simple responsive website example in ReactJS.</p>
        </section>
        <section id="about">
          <h2>About Us</h2>
          <p>Learn more about what we do.</p>
        </section>
        <section id="services">
          <h2>Our Services</h2>
          <p>Discover the services we offer.</p>
        </section>
        <section id="contact">
          <h2>Contact Us</h2>
          <p>Get in touch with us for more information.</p>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 MyWebsite. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
