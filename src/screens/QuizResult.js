import React from 'react';
import { Link } from 'react-router-dom';
import './QuizResult.css';

const QuizResult = () => {
    // Inserir Firebase aqui
  const userResults = [
    { position: 1, nickname: 'Usuario1', record: '90%', gamesPlayed: 25 },
    { position: 2, nickname: 'Usuario2', record: '85%', gamesPlayed: 20 },
  ];

  return (
    <div>
      <h1 className="page-title">Quiz n123</h1>

      <Link to="/jogar-quiz" className="back-button">
        Voltar
      </Link>
      <Link to="/quiz" className="play-again-button">
        Jogar Novamente
      </Link>

      <div className="container-1">
        <table className="result-table">
          <thead>
            <tr>
              <th>Posição</th>
              <th>Nickname</th>
              <th>Recorde</th>
              <th>Quantidade de Jogos</th>
            </tr>
          </thead>
          <tbody>
            {userResults.map((result, index) => (
              <tr key={index}>
                <td>{result.position}º</td>
                <td>{result.nickname}</td>
                <td>{result.record}</td>
                <td>{result.gamesPlayed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="container-2">
        <div className="trophy-box">
          <span className="trophy-fraction">4/5</span>
          <img src="trophy.png" alt="Troféu" />
        </div>
        <nav id="quadro">
          <table className="user-stats">
            <tbody>
              <tr>
                <td>Sua Pontuação:</td>
                <td>4000 pontos</td>
              </tr>
              <tr>
                <td>Tempo de Jogo:</td>
                <td>30 min</td>
              </tr>
              <tr>
                <td>Quantidade de Jogos:</td>
                <td>50</td>
              </tr>
            </tbody>
          </table>
          <table className="user-position">
            <tbody>
              <tr>
                <th>Posição no Ranking:</th>
              </tr>
              <tr>
                <td>3º</td>
              </tr>
            </tbody>
          </table>
        </nav>
      </div>
    </div>
  );
};

export default QuizResult;
