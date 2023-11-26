import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Quiz, Pergunta } from './caminho-do-seu-arquivo/Quiz'; // Importe o caminho correto
import './CreateQuiz.css';

const CreateQuiz = () => {
  const [quiz, setQuiz] = useState(new Quiz(1, 1, [], 15, '', '', 'Inglês')); // Adapte conforme necessário
  const [quantidadeAlternativas, setQuantidadeAlternativas] = useState(4);

  const handleInputChange = (event, field) => {
    setQuiz({ ...quiz, [field]: event.target.value });
  };

  const handleQuantidadePerguntasChange = (event) => {
    const quantidadePerguntas = parseInt(event.target.value);
    const perguntas = Array.from({ length: quantidadePerguntas }, () => new Pergunta('', []));
    setQuiz({ ...quiz, perguntas });
  };

  const handlePerguntaChange = (index, event) => {
    const novasPerguntas = [...quiz.perguntas];
    novasPerguntas[index].texto = event.target.value;
    setQuiz({ ...quiz, perguntas: novasPerguntas });
  };

  const handleAlternativaChange = (perguntaIndex, alternativaIndex, event) => {
    const novasPerguntas = [...quiz.perguntas];
    novasPerguntas[perguntaIndex].alternativas[alternativaIndex] = event.target.value;
    setQuiz({ ...quiz, perguntas: novasPerguntas });
  };

  const handleCheckboxChange = (perguntaIndex, alternativaIndex) => {
    const novasPerguntas = [...quiz.perguntas];
    novasPerguntas[perguntaIndex].alternativas.forEach((alt, index) => {
      alt.correta = index === alternativaIndex;
    });
    setQuiz({ ...quiz, perguntas: novasPerguntas });
  };

  const criarQuiz = () => {
    // Insira aqui o que for necessário para conectar com o Firebase
    console.log('Quiz criado:', quiz);
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/main-menu">Main Menu</Link>
          </li>
          <li>
            <Link to="/create-quiz">Create Quiz</Link>
          </li>
          <li>
            <Link to="/search-quiz">Search Quiz</Link>
          </li>
          <li>
            <Link to="/ranking">Ranking</Link>
          </li>
        </ul>
      </nav>

      <h1>Criar Quiz</h1>
      <Link to="/main-menu" className="voltar">
        Voltar
      </Link>

      <div>
        <button onClick={criarQuiz}>Criar Quiz</button>
      </div>

      <div>
        <Link to="/main-menu" className="salvar">
          Salvar
        </Link>
      </div>
    </div>
  );
};

export default CreateQuiz;
