import React from 'react';
import { Link } from 'react-router-dom';
import './ChooseQuiz.css'; 
import { Quiz } from './src/models/Quiz.js'; 

const quizzes = [
  new Quiz(1, 123, [], 30, 'Tema Quiz 1', 'Quiz 1', 'Português'),
  new Quiz(2, 456, [], 20, 'Tema Quiz 2', 'Quiz 2', 'Inglês'),
  new Quiz(3, 789, [], 45, 'Tema Quiz 3', 'Quiz 3', 'Espanhol'),
];

const ChooseQuiz = () => {
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
            {quizzes.map((quiz) => (
              <tr key={quiz.id}>
                <td>{quiz.titulo}</td>
                <td>{quiz.id_criador}</td>
                <td>{quiz.tempolimite} minutos</td>
                <td>{quiz.perguntas.length}</td>
                <td>
                  <Link to={`/play-quiz/${quiz.id}`} className="play-button">
                    Jogar
                  </Link>
                  <Link to={`/quiz-ranking/${quiz.id}`} className="ranking-button">
                    Ranking
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ChooseQuiz;
