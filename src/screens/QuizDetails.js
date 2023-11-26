// src/components/QuizDetails.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './QuizDetails.css'; // Certifique-se de ter o arquivo CSS correspondente
import { Quiz } from './caminho/para/Quiz'; // Substitua pelo caminho real do seu arquivo Quiz

const QuizDetails = ({ match }) => {
  const quizId = parseInt(match.params.id); // Obtém o ID do quiz da URL
  const [quiz, setQuiz] = useState(new Quiz(quizId, 0, [], 0, '', '', ''));

  // Mock de dados para o quiz
  useEffect(() => {
    // Substitua esta parte com a lógica para buscar o quiz do servidor ou de onde quer que venha
    setQuiz(new Quiz(quizId, 0, [], 60, 'Tema do Quiz', 'Quiz n123', 'Português'));
  }, [quizId]);

  return (
    <div>
      <Link to="/jogar-quiz" className="back-button">
        Voltar
      </Link>
      <h1 className="page-title">{quiz.titulo}</h1>
      <h3 className="subtitle">{`Quiz de usuário_${quiz.id_criador}`}</h3>
      <img src="imagem.png" alt="Imagem do quiz" />

      <div className="info-table" id="left-table">
        <table>
          <tbody>
            <tr>
              <th>Tempo Limite</th>
              <td>{`${quiz.tempolimite} segundos`}</td>
            </tr>
            <tr>
              <th>Tema</th>
              <td>{quiz.tema}</td>
            </tr>
            <tr>
              <th>Idioma</th>
              <td>{quiz.idioma}</td>
            </tr>
            <tr>
              <th>Quantidade de Perguntas</th>
              <td>{quiz.perguntas.length}</td>
            </tr>
            <tr>
              <th>Quantidade de Alternativas</th>
              <td>{quiz.perguntas.length > 0 ? quiz.perguntas[0].alternativas.length : 0}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="info-table" id="right-table">
        <table>
          <tbody>
            <tr>
              <th>Sua Pontuação Atual</th>
              <td>xxxx pontos</td>
            </tr>
            <tr>
              <th>Seu Ranking Atual</th>
              <td>--</td>
            </tr>
            <tr>
              <th>Quantidade de Partidas</th>
              <td>0 partidas</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Link to={`/play-quiz/${quizId}`} className="play-button">
        JOGAR
      </Link>
    </div>
  );
};

export default QuizDetails;
