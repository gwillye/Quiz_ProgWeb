import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div>
      <nav>
      <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/create-account">Create Account</Link>
          </li>
        </ul>
      </nav>

      <div className="content">
        <nav id="texto">
          <img src="logo.png" alt="Logo do Site" />
          <p id="texto_lat">
            Caso deseje acessar os protótipos, o PDF com as telas estão disponíveis neste{' '}
            <a href="https://balsamiq.cloud/sfh9awc/px11u31">link</a>.
          </p>
        </nav>
        <video controls>
          <source src="tutorial.mp4" type="video/mp4" />
          Tutorial de como acessar o site
        </video>
      </div>
      <p id="texto_bottom">Texto</p>
    </div>
  );
};

export default Home;
