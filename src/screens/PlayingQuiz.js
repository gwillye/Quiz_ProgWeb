// src/components/PlayingQuiz.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PlayingQuiz.css'; // Certifique-se de ter o arquivo CSS correspondente
import { Quiz, Pergunta } from './caminho/para/Quiz'; // Substitua pelo caminho real dos seus arquivos Quiz e Pergunta

const PlayingQuiz = ({ match }) => {
  const quizId = parseInt(match.params.id); // Obtém o ID do quiz da URL
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [remainingTime, setRemainingTime] = useState(0);
  const [quiz, setQuiz] = useState(new Quiz(quizId, 0, []));

  // Mock de dados de perguntas usando a classe Pergunta
  const perguntas = [
    new Pergunta(quizId, 1, 'Qual é a capital do Brasil?', ['Brasília', 'Rio de Janeiro', 'São Paulo', 'Belo Horizonte'], [1]),
    new Pergunta(quizId, 2, 'Quanto é 2 + 2?', ['3', '4', '5', '6'], [2]),
    // Adicione mais perguntas conforme necessário
  ];

  useEffect(() => {
    setQuiz(new Quiz(quizId, 0, perguntas, 60, 'Tema do Quiz', 'Quiz n123', 'Português'));
  }, [quizId]);

  useEffect(() => {
    if (currentQuestion < quiz.perguntas.length) {
      const timer = setInterval(() => {
        setRemainingTime((prevTime) => {
          if (prevTime === 0) {
            clearInterval(timer);
            handleNextQuestion();
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [currentQuestion, quiz]);

  const handleNextQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    setRemainingTime(quiz.perguntas[currentQuestion + 1].tempoLimite);
  };

  const checkAnswer = (alternativaIndex) => {
    // Lógica para verificar se a alternativa está correta
    const perguntaAtual = quiz.perguntas[currentQuestion];
    if (perguntaAtual.respostas.includes(alternativaIndex)) {
      // A alternativa está correta
      console.log('Resposta correta!');
      // Adicione lógica para contabilizar pontos ou fazer o que for necessário
    } else {
      // A alternativa está incorreta
      console.log('Resposta incorreta!');
    }

    // Passa para a próxima pergunta
    handleNextQuestion();
  };

  return (
    <div>
      <div className="container-1">
        <div className="question-number">{currentQuestion + 1}</div>
      </div>

      <h1 className="page-title">{quiz.titulo}</h1>

      <table className="time-box">
        <tbody>
          <tr>
            <th>Tempo Restante:</th>
          </tr>
          <tr>
            <td>
              <span id="countdown">{remainingTime}s</span>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="container-2">
        <h1>{quiz.perguntas[currentQuestion]?.questao}</h1>
      </div>

      <table className="question-table">
        <tbody>
          <tr>
            <td>
              <img src="question_image.png" alt="Questão" />
            </td>
          </tr>
        </tbody>
      </table>

      <div className="answer-box">
        {quiz.perguntas[currentQuestion]?.alternativas.map((alternativa, index) => (
          <button key={index} className="answer-button" onClick={() => checkAnswer(index + 1)}>
            {alternativa}
          </button>
        ))}
      </div>

      <Link to={`/quiz/${quizId}`} className="back-button">
        Voltar
      </Link>
    </div>
  );
};

export default PlayingQuiz;

