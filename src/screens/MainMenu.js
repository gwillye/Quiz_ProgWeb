import React from 'react';
import { Link } from 'react-router-dom';
import './MainMenu.css';

const MainMenu = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Menu Principal</Link>
          </li>
          <li>
            <Link to="/ranking">Ranking</Link>
          </li>
          <li>
            <Link to="/search-quiz">Jogar Quiz</Link>
          </li>
          <li>
            <Link to="/create-quiz">Criar Quiz</Link>
          </li>
        </ul>
      </nav>

      <a href="/" id="menuButton" className="iconButton">
        Voltar
      </a>
      <Link to="/profile-configs" id="configButton" className="iconButton">
        <img src="engrenagem-icon.png" alt="Configurações" />
      </Link>
      <div id="menu-item" className="menu-container">
        <Link to="/search-quiz" className="menu-item" id="jogar-quiz">
          <img src="jogarquiz.png" alt="Jogar Quiz" />
        </Link>
        <Link to="/create-quiz" className="menu-item" id="criar-quiz">
          <img src="criarquiz.png" alt="Criar Quiz" />
        </Link>
        <Link to="/ranking" className="menu-item" id="ranking">
          <img src="ranking.png" alt="Ranking" />
        </Link>
      </div>
    </div>
  );
};

export default MainMenu;
