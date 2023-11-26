// src/components/CreateQuiz.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CreateQuiz.css'; // Certifique-se de ter o arquivo CSS correspondente

const CreateQuiz = () => {
  const [quantidadePerguntas, setQuantidadePerguntas] = useState(1);
  const [perguntas, setPerguntas] = useState([{ texto: '', alternativas: [{ texto: '', correta: false }] }]);

  const handleQuantidadePerguntasChange = (event) => {
    const novaQuantidade = parseInt(event.target.value);
    setQuantidadePerguntas(novaQuantidade);

    if (novaQuantidade > perguntas.length) {
      const novasPerguntas = Array.from({ length: novaQuantidade - perguntas.length }, () => ({
        texto: '',
        alternativas: [{ texto: '', correta: false }],
      }));
      setPerguntas([...perguntas, ...novasPerguntas]);
    } else if (novaQuantidade < perguntas.length) {
      setPerguntas(perguntas.slice(0, novaQuantidade));
    }
  };

  const handlePerguntaChange = (index, event) => {
    const novasPerguntas = [...perguntas];
    novasPerguntas[index].texto = event.target.value;
    setPerguntas(novasPerguntas);
  };

  const handleAlternativaChange = (perguntaIndex, alternativaIndex, event) => {
    const novasPerguntas = [...perguntas];
    novasPerguntas[perguntaIndex].alternativas[alternativaIndex].texto = event.target.value;
    setPerguntas(novasPerguntas);
  };

  const handleCheckboxChange = (perguntaIndex, alternativaIndex) => {
    const novasPerguntas = [...perguntas];
    novasPerguntas[perguntaIndex].alternativas.forEach((alt, index) => {
      alt.correta = index === alternativaIndex;
    });
    setPerguntas(novasPerguntas);
  };

  const criarPerguntas = () => {
    // Sua lógica para criar perguntas aqui...
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

      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="titulo">Insira o título:</label>
              <input type="text" id="titulo" />
            </td>
            <td>
              <label htmlFor="idioma">Insira o idioma:</label>
              <select id="idioma">
                <option value="Coreano">Coreano</option>
                <option value="Espanhol">Espanhol</option>
                <option value="Francês">Francês</option>
                <option value="Inglês">Inglês</option>
                <option value="Japonês">Japonês</option>
                <option value="Português">Português</option>
                <option value="Russo">Russo</option>
              </select>
            </td>
            <td>
              <label htmlFor="tempoLimite">Tempo limite das perguntas:</label>
              <input type="number" id="tempoLimite" min="15" max="30" />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="tema">Insira o tema:</label>
              <select id="tema">
                <option value="Artes">Artes</option>
                <option value="Astronomia">Astronomia</option>
                <option value="Biologia">Biologia</option>
                <option value="Conhecimentos Gerais">Conhecimentos Gerais</option>
                <option value="Coreano">Coreano</option>
                <option value="Economia">Economia</option>
                <option value="Engenharia">Engenharia</option>
                <option value="Ensino Religioso">Ensino Religioso</option>
                <option value="Espanhol">Espanhol</option>
                <option value="Filosofia">Filosofia</option>
                <option value="Física">Física</option>
                <option value="Francês">Francês</option>
                <option value="Geografia">Geografia</option>
                <option value="História">História</option>
                <option value="Inglês">Inglês</option>
                <option value="Japonês">Japonês</option>
                <option value="Literatura">Literatura</option>
                <option value="Matemática">Matemática</option>
                <option value="Português">Português</option>
                <option value="Química">Química</option>
                <option value="Russo">Russo</option>
                <option value="Saúde">Saúde</option>
                <option value="Sociologia">Sociologia</option>
                <option value="Tecnologia da Informação">Tecnologia da Informação</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>

      <div id="perguntasContainer">
        {perguntas.map((pergunta, perguntaIndex) => (
          <div key={perguntaIndex} className="perguntaContainer">
            <label htmlFor={`pergunta-${perguntaIndex + 1}`}>Pergunta {perguntaIndex + 1}:</label>
            <input
              type="text"
              id={`pergunta-${perguntaIndex + 1}`}
              value={pergunta.texto}
              onChange={(event) => handlePerguntaChange(perguntaIndex, event)}
            />

            <div className="alternativasContainer">
              {pergunta.alternativas.map((alternativa, alternativaIndex) => (
                <div key={alternativaIndex} className="alternativaContainer">
                  <label htmlFor={`alternativa-${perguntaIndex + 1}-${alternativaIndex + 1}`}>
                    Alternativa {alternativaIndex + 1}:
                  </label>
                  <input
                    type="text"
                    id={`alternativa-${perguntaIndex + 1}-${alternativaIndex + 1}`}
                    value={alternativa.texto}
                    onChange={(event) => handleAlternativaChange(perguntaIndex, alternativaIndex, event)}
                  />

                  <label htmlFor={`checkbox-${perguntaIndex + 1}-${alternativaIndex + 1}`}>
                    Resposta Certa:
                  </label>
                  <input
                    type="checkbox"
                    id={`checkbox-${perguntaIndex + 1}-${alternativaIndex + 1}`}
                    checked={alternativa.correta}
                    onChange={() => handleCheckboxChange(perguntaIndex, alternativaIndex)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div>
        <button onClick={criarPerguntas}>Criar Pergunta</button>
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
