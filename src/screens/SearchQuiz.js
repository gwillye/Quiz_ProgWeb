import React from 'react';
import { Link } from 'react-router-dom';
import './SearchQuiz.css';

const SearchQuiz = () => {
  return (
    <div>
      <Link to="/menu" className="back-button">
        Voltar
      </Link>
      <h1 className="page-title">Jogar Quiz</h1>

      <div className="quiz-container">
        <table>
          <thead>
            <tr>
              <th>Nome do Quiz</th>
              <th>Criador do Quiz</th>
              <th>Tempo Limite Total</th>
              <th>Quantidade de Perguntas</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Quiz 1</td>
              <td>João</td>
              <td>30 minutos</td>
              <td>10</td>
              <td>
                <Link to="/quiz">Jogar</Link>
                <Link to="/ranking-quiz">Ranking</Link>
              </td>
            </tr>
            <tr>
              <td>Quiz 2</td>
              <td>Maria</td>
              <td>20 minutos</td>
              <td>15</td>
              <td>
                <Link to="/quiz">Jogar</Link>
                <Link to="/ranking-quiz">Ranking</Link>
              </td>
            </tr>
            <tr>
              <td>Quiz 3</td>
              <td>Carlos</td>
              <td>45 minutos</td>
              <td>8</td>
              <td>
                <Link to="/quiz">Jogar</Link>
                <Link to="/ranking-quiz">Ranking</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchQuiz;
