// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import MainMenu from './components/MainMenu';
import ProfileConfigs from './components/ProfileConfigs'; // Adicione esta importação

function App() {
  return (
    <Router>
      <div className="App">
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
            <li>
              <Link to="/main-menu">Main Menu</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/login" component={Login} />
        <Route path="/create-account" component={CreateAccount} />
        <Route path="/main-menu" component={MainMenu} />
        <Route path="/profile-configs" component={ProfileConfigs} /> {/* Adicione esta rota */}
      </div>
    </Router>
  );
}

export default App;
